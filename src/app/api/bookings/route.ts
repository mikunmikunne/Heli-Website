import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabaseServer';
import { isValidEmail, isValidPhoneNumber } from '@/utils/validators';
import { FormState } from '@/app/booking/types';
import { isRateLimited } from '@/utils/rateLimit';
import { sendBookingEmails } from '@/utils/email';

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '127.0.0.1';
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const body = await req.json();
    const { fullName, email, phone, preferredDate, captchaToken } = body;

    // 1. Server-side Validation
    if (!fullName || !email || !phone || !preferredDate) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!isValidEmail(email) || !isValidPhoneNumber(phone)) {
      return NextResponse.json({ error: 'Invalid email or phone format' }, { status: 400 });
    }

    // 2. CAPTCHA Verification
    if (!captchaToken) {
      return NextResponse.json({ error: 'CAPTCHA token is missing' }, { status: 400 });
    }

    if (process.env.RECAPTCHA_SECRET_KEY) {
      const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: captchaToken,
        }).toString(),
      });
      const verifyJson = await verifyRes.json();

      if (!verifyJson.success) {
        return NextResponse.json({ error: 'CAPTCHA verification failed' }, { status: 400 });
      }
    } else {
      console.warn('RECAPTCHA_SECRET_KEY is not defined. Skipping server-side verification.');
    }

    // 3. Insert to Supabase DB
    const { error } = await supabase
      .from('bookings')
      .insert([
        {
          full_name: fullName,
          company_name: body.companyName,
          email: email,
          phone: phone,
          employee_count: body.employeeCount,
          preferred_date: preferredDate,
          location: body.location,
          details: body.details,
        }
      ]);

    if (error) throw error;

    // Gửi email thông báo cho Khách hàng & Admin
    try {
      await sendBookingEmails({
        fullName,
        companyName: body.companyName,
        email,
        phone,
        employeeCount: body.employeeCount,
        preferredDate,
        location: body.location,
        details: body.details,
      });
    } catch (mailError) {
      console.error('Failed to send booking notification emails:', mailError);
    }
    
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: unknown) {
    console.error('Booking API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabaseServer';
import { isValidEmail } from '@/utils/validators';

export async function POST(req: Request) {
  try {
    const { fullName, email, message, captchaToken } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // 2. CAPTCHA Verification
    if (!captchaToken) {
      return NextResponse.json({ error: 'CAPTCHA token is missing' }, { status: 400 });
    }

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;
    const verifyRes = await fetch(verifyUrl, { method: 'POST' });
    const verifyJson = await verifyRes.json();

    if (!verifyJson.success) {
      return NextResponse.json({ error: 'CAPTCHA verification failed' }, { status: 400 });
    }

    const { error } = await supabase
      .from('contacts')
      .insert([{ full_name: fullName, email, message }]);

    if (error) throw error;
    
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: unknown) {
    console.error('Contact API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Internal Server Error', details: errorMessage }, { status: 500 });
  }
}

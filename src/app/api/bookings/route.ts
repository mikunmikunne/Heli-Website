import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabaseServer';
import { isValidEmail, isValidPhoneNumber } from '@/utils/validators';
import { FormState } from '@/app/booking/types';

export async function POST(req: Request) {
  try {
    const body: FormState = await req.json();

    // 1. Server-side Validation
    if (!body.fullName || !body.email || !body.phone || !body.preferredDate) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!isValidEmail(body.email) || !isValidPhoneNumber(body.phone)) {
      return NextResponse.json({ error: 'Invalid email or phone format' }, { status: 400 });
    }

    // 2. Insert to Supabase DB
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          full_name: body.fullName,
          company_name: body.companyName,
          email: body.email,
          phone: body.phone,
          employee_count: body.employeeCount,
          preferred_date: body.preferredDate,
          location: body.location,
          details: body.details,
        }
      ]);

    if (error) throw error;
    
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error('Booking API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

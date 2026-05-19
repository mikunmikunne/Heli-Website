import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabaseServer';
import { isValidEmail } from '@/utils/validators';

export async function POST(req: Request) {
  try {
    const { fullName, email, message } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const { error } = await supabase
      .from('contacts')
      .insert([{ full_name: fullName, email, message }]);

    if (error) throw error;
    
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error?.message || error }, { status: 500 });
  }
}

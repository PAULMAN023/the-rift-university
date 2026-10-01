import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, subject, category, message, consent } = body ?? {};

    if (!fullName || !email || !subject || !category || !message) {
      return NextResponse.json(
        { success: false, message: 'Please complete all required fields before submitting.' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, message: 'Please confirm your consent before sending the message.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Your enquiry has been submitted successfully. A TRU team member will follow up when the inbox is configured.',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'The enquiry could not be submitted. Please try again later.' },
      { status: 500 }
    );
  }
}

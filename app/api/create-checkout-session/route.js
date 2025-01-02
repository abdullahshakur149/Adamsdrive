import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    // Parse the incoming request data
    const data = await req.json();

    console.log('this is the data we first get in json', data);

    // Extract the course details and user information from the parsed data
    const { name, email, phonenumber, address, coursedetail } = data;
    const { courseTitle, coursePrice, courseid } = coursedetail

    // Create a new Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'GBP',
            product_data: {
              name: courseTitle,
            },
            unit_amount: coursePrice * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/ps`,
      cancel_url: `${req.headers.get('origin')}/pf`,
      customer_email: email,
      metadata: {
        name: name,
        phonenumber: phonenumber,
        email: email,
        address: address,
        courseid
      },
    });
    console.log('this is the data we have made in the meta data', session.metadata)
    console.log('Session URL:', session.url);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}

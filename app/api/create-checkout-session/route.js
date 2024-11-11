import Stripe from 'stripe';
import { NextResponse } from 'next/server'; // Ensure you import NextResponse if you're using it

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    // Parse the incoming request data
    const data = await req.json();

    console.log(data);

    // Extract the course details and user information from the parsed data
    const { name, email, phonenumber, address, coursedetail } = data;
    const { courseCategory, courseTitle, coursePrice } = coursedetail;

    // Create a new Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: courseTitle,
            },
            unit_amount: coursePrice * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
      customer_email: email,
      metadata: {
        userName: name,
        userPhone: phonenumber,
        userAddress: address,
        courseTitle: courseTitle,
      },
    });

    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}

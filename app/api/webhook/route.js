import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
import Intensive from '@/models/Order';

export async function POST(req) {
    const sig = req.headers.get('stripe-signature');
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
        event = stripe.webhooks.constructEvent(await req.text(), sig, endpointSecret);
    } catch (err) {
        console.error('Error verifying Stripe webhook signature:', err);
        return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        // console.log(session)

        // Extract metadata from the session
        const { metadata } = session;
        console.log('this is the meta data youre getting', metadata)

        let paymentStatus;

        const newOrder = new Intensive({
            name: metadata.name,
            phonenumber: metadata.phonenumber,
            email: metadata.email,
            address: metadata.address,
            courseid: metadata.courseid,
            paymentStatus: true,
        });

        try {
            await newOrder.save();
            console.log('Order saved to MongoDB:', newOrder);
        } catch (error) {
            console.error('Error saving order to MongoDB:', error);
        }
    }

    // Return a success response
    return NextResponse.json({ received: true });
}

import Stripe from 'stripe';
import { buffer } from 'micro';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const runtime = 'edge';

export async function POST(req) {
    try {
        const buf = await buffer(req);
        const sig = req.headers['stripe-signature'];
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

        console.log("Received webhook request:", req.method);
        console.log("Headers:", req.headers);
        console.log("Request body:", buf.toString());

        let event;

        // Verify the Stripe webhook signature
        try {
            event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
            console.log("Stripe webhook event verified successfully:", event);
        } catch (err) {
            console.error('Webhook signature verification failed:', err.message);
            return NextResponse.json(
                { error: `Webhook error: ${err.message}` },
                { status: 400 }
            );
        }

        // Handle specific Stripe events
        if (event.type === 'charge.succeeded') {
            const charge = event.data.object;
            console.log("Charge Succeeded:", charge);
        } else if (event.type === 'payment_intent.succeeded') {
            const paymentIntent = event.data.object;
            console.log("Payment Intent Succeeded:", paymentIntent);
        } else {
            console.log("Unhandled event type:", event.type);
        }

        // Send a success response
        return NextResponse.json({ received: true }, { status: 200 });
    } catch (error) {
        console.error('Error handling webhook:', error.message);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

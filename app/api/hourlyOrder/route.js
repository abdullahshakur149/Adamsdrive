import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import hourlyOrder from "@/models/hourlyOrder";
export async function POST(req) {
    try {
        const { Postalcode, coursePrice, courseSelected, name, phonenumber } = await req.json()
        console.log(Postalcode, coursePrice, courseSelected, name, phonenumber)

        // if (Postalcode || coursePrice || courseSelected || name || phonenumber) {
        //     console.log('fill all the data')
        //     return NextResponse.json({ status: 404, message: 'Please fillout all of the fields' })
        // }

        const db = await connectDB();
        if (!db) {
            console.log('db not connected')
        }
        // Create a new order
        const order = new hourlyOrder({
            Postalcode,
            coursePrice,
            courseSelected,
            name,
            phonenumber,
        });
        console.log(order)


        const saved = await order.save();
        console.log(saved)

        return NextResponse.json({ status: 200, message: 'Course has been successfully ordered! Our team will shortly contact you' })

    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500 });
    }
}
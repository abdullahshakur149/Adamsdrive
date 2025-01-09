import { NextResponse } from "next/server";
import Intensive from "@/models/Order";
import connectDB from "@/lib/db";

export async function GET() {
    try {
        await connectDB();
        const orders = await Intensive.find().populate('courseid');
        console.log(orders)
        return NextResponse.json({ status: 200, orders })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 500, message: error })
    }
}
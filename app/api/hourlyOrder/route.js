import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
export async function POST() {
    try {
        const data = req.json()
        return NextResponse.json({ status: 200, data: data });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500 });
    }
}
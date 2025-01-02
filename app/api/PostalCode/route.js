import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import PostalCode from "@/models/PostalCode";

export async function POST(req) {
    try {
        // Connect to the database
        await connectDB();

        const { postalCode } = await req.json();

        // Check the postal code in the database (case-insensitive)
        const postalCodeData = await PostalCode.findOne({
            postalCode: { $regex: `^${postalCode.slice(0, 3)}$`, $options: "i" },
        });

        if (!postalCodeData) {
            return NextResponse.json({
                status: 404,
                message: "Postal code not found. Please check and try again."
            });
        }

        return NextResponse.json({
            status: 200,
            message: "Postal code found. Redirecting...",
            data: postalCodeData
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status: 500,
            message: "Error processing the request. Please try again later."
        });
    }
}

import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import PostalCode from '@/models/PostalCode';

// export async function POST(req) {
//     // Connect to the database
//     await connectDB();

//     try {
//         // Parse request body (incoming JSON)
//         const { postalCode, location, hourlyRates } = await req.json();

//         // Check if the postal code already exists
//         const existingPostalCode = await PostalCode.findOne({ postalCode });
//         if (existingPostalCode) {
//             return NextResponse.json({ message: 'Postal code already exists.' }, { status: 400 });
//         }

//         // Create new postal code entry
//         const newPostalCode = new PostalCode({
//             postalCode,
//             location,
//             hourlyRates,
//         });

//         // Save the postal code to the database
//         await newPostalCode.save();

//         // Return success response
//         return NextResponse.json({ message: 'Postal code added successfully!', data: newPostalCode }, { status: 201 });

//     } catch (error) {
//         console.error('Error adding postal code:', error);
//         return NextResponse.json({ message: 'An error occurred while adding postal code.' }, { status: 500 });
//     }
// }

export async function GET() {
    try {
        await connectDB();
        const postalCodes = await PostalCode.find()
        return NextResponse.json({ status: 200, postalCodes })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 500, message: 'Error fetching postal codes' })
    }
}
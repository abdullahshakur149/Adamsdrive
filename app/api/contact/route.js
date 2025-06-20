import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Contact from "@/models/contact";
import Course from "@/models/courses";

export async function POST(req) {
  try {
    // Connect to the database
    await connectDB();

    // Parse the request body
    const body = await req.json();

    const {
      name,
      postalcode,
      email,
      phonenumber,
      courseTitle,
      message,
      privacyUnderstand,
    } = body;

    //   console.log(courseTitle)
    // return NextResponse.json({status: 200})
    // Validate required fields
    if (
      !name ||
      !postalcode ||
      !email ||
      !phonenumber ||
      !courseTitle ||
      !message ||
      privacyUnderstand === undefined
    ) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 200 }
      );
    }

    // Save the contact document
    const contact = await Contact.create({
      name,
      postalcode,
      email,
      phonenumber,
      courseTitle,
      message,
      privacyUnderstand: privacyUnderstand.toString(),
    });

    console.log(contact)


    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error creating contact:", error);
    return NextResponse.json(
      { success: false, error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const contacts = await Contact.find().populate('courseTitle');
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.log(error)
  }
}

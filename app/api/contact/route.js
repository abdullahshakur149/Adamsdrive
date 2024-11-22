import { NextResponse } from "next/server";
import Contact from "@/models/contact"; 
import connectDB from "@/lib/db"; 

export async function POST(req) {
  try {
    const {
      name,
      email,
      phonenumber,
      city,
      courseTitle,
      courseCategory,
      message,
      privacyUnderstand,
    } = await req.json();

   
    if (
      !name ||
      !email ||
      !phonenumber ||
      !city ||
      !courseTitle ||
      !courseCategory ||
      !message ||
      !privacyUnderstand
    ) {
      return NextResponse.json(
        { status: 400, message: "Please fill all the fields" },
        { status: 400 }
      );
    }

    
    await connectDB();

   
    const contact = new Contact({
      name,
      email,
      phonenumber,
      city,
      courseTitle,
      courseCategory,
      message,
      privacyUnderstand,
    });

    await contact.save();

    return NextResponse.json(
      { status: 200, message: "Contact saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { status: 500, message: "Internal server error" },
      { status: 500 }
    );
  }
}

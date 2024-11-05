import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Course from "@/models/courses";

export async function POST(req) {
    // Parse the request body as JSON
    const data = await req.json();
    
    // Connect to the database
    await connectDB();

    try {
        // Map through each course and create instances
        const courses = data.courses.map(courseData => new Course(courseData));
        
        // Save all courses to the database
        await Course.insertMany(courses);

        // Return a success response
        return NextResponse.json({ message: 'Courses added successfully!', courses }, { status: 201 });
    } catch (error) {
        // Handle any errors that occur during the save operation
        console.error(error);
        return NextResponse.json({ message: 'Failed to add courses', error: error.message }, { status: 500 });
    }
}

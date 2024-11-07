import { NextResponse } from "next/server";
import { getAllCourses } from "@/lib/functions/getallcourses";

export async function GET() {
    try {
        const courses = await getAllCourses();
        return NextResponse.json({ message: 'Here are the courses!', courses }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Failed to fetch courses', error: error.message }, { status: 500 });
    }
}
import { NextResponse } from "next/server";
import { getAllCourses } from "@/lib/functions/getallcourses";

export async function GET() {
    try {
        const courses = await getAllCourses();

        return NextResponse.json({ status: 200, data:courses });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500 });
    }
}
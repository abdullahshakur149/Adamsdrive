import { NextResponse } from "next/server";
import { allCourses } from "@/lib/functions/allCourses";

export async function GET() {
    try {
        const courses = await allCourses();
        // console.log(courses)

        return NextResponse.json({ status: 200, data: courses });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500 });
    }
}
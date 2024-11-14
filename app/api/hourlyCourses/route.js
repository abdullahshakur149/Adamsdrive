import { NextResponse } from "next/server";
import { hourlyCourses } from "@/lib/functions/hourlyCourses";

export async function GET() {
    try {
        const courses = await hourlyCourses();
        console.log(courses)

        return NextResponse.json({ status: 200, data: courses });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500 });
    }
}
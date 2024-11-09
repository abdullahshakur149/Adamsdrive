import { NextResponse } from "next/server";
import { bestCourses } from "@/lib/functions/bestsellers"

export async function GET() {
    try {
        const bestcourses = await bestCourses();
        // console.log(bestcourses)
        return NextResponse.json({ status: 200, data: bestcourses });
    } catch (error) {
        return NextResponse.json({ status: 500 });
    }
}
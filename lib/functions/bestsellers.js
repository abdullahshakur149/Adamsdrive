import connectDB from "@/lib/db";
import Course from "@/models/courses";

export async function bestCourses() {
    await connectDB();
    const bestSellers = await Course.find({ bestSeller: true })
    return bestSellers
}
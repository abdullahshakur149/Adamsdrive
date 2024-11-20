import connectDB from "@/lib/db";
import Course from "@/models/courses";

export async function getAllCourses() {
    await connectDB();
    const courses = await Course.find({ duration: { $gte: 10 } }).sort({ duration: 1 });
    return courses;
}


import connectDB from "@/lib/db";
import Course from "@/models/courses";

export async function hourlyCourses() {
    await connectDB();
    const courses = await Course.find({ duration: { $lte: 3 } });
    return courses;
}

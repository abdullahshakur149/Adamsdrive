import connectDB from "@/lib/db";
import Course from "@/models/courses";

export async function allCourses(){
    await connectDB();
    const allcourses = await Course.find().sort({duration: 1})
    return allcourses;
}
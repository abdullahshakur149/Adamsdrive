import connectDB from "@/lib/db";
import Course from "@/models/courses"; 

export async function getAllCourses() {
    await connectDB(); 
    const courses = await Course.find(); 
    return courses; 
}

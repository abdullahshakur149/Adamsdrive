import { model, models, Schema } from "mongoose"

const CourseSchema = new Schema({
    courseId: { type: String },
    courseTitle: { type: String },
    courseCategory: { type: String },
    courseDescription: { type: String },
    coursePrice: { type: Number },
    bestSeller: { type: String },
},
    {
        timestamps: true
    }
)


const Course = models.Course || model('Course', CourseSchema)
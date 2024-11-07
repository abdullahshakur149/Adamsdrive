import { model, models, Schema } from "mongoose";

const CourseSchema = new Schema({
    courseId: { type: String, required: true },
    courseTitle: { type: String, required: true },
    courseCategory: { type: String, enum: ['intensive', 'hourly'], required: true },
    courseDescription: { type: String },
    coursePrice: { type: Number, required: true },
    duration: { type: Number, required: true }, 
    fastTrackIncluded: { type: Boolean, default: false },
    bestSeller: { type: Boolean, default: false },
    fastTrackTest: { type: Boolean, default: true }
}, {
    timestamps: true
});

const Course = models.Course || model('Course', CourseSchema);

export default Course;

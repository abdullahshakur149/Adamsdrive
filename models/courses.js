import { model, models, Schema } from "mongoose";

const CourseSchema = new Schema({
    courseId: { type: String, },
    courseTitle: { type: String, },
    courseCategory: { type: String, enum: ['intensive', 'hourly'], },
    courseDescription: { type: String },
    coursePrice: { type: Number, },
    duration: { type: Number, },
    fastTrackIncluded: { type: Boolean, },
    bestSeller: { type: Boolean, default: false },
    fastTrackTest: { type: Boolean, }
}, {
    timestamps: true
});

const Course = models.Course || model('Course', CourseSchema);

export default Course;

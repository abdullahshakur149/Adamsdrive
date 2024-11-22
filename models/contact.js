import mongoose, { model, models, Schema } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: String, required: true },
    courseCategory: {
      type: mongoose.Types.ObjectId, 
      ref: "Course",
    },
    courseTitle: {
      type: mongoose.Types.ObjectId,
      ref: "Course",
    },
    message: { type: String, required: true },
    privacyUnderstand: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Contact = models.Contact || model("Contact", ContactSchema);
export default Contact;

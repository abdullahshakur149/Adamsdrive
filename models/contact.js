import mongoose, { model, models, Schema } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    postalcode: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: String, required: true },
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

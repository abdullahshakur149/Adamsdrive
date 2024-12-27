import mongoose, { model, models, Schema } from "mongoose";

const OrderSchema = new Schema(
    {
        userName: { type: String, required: true },
        userPhone: { type: String, required: true },
        userAddress: { type: String, required: true },
        phonenumber: { type: String, required: true },
        courseTitle: {
            type: mongoose.Types.ObjectId,
            ref: "Course",
        },
        stripeSessionId: String,
    },
    {
        timestamps: true,
    }
);

const Order = models.Order || model("Order", OrderSchema);
export default OrderSchema;

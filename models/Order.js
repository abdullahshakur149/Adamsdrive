import { model, models, Schema } from "mongoose";

const IntensiveOrders = new Schema(
    {
        name: { type: String, required: true },
        phonenumber: { type: String, required: true },
        address: { type: String, required: true },
        email: { type: String, required: true },
        paymentStatus: { type: String, required: true },
        courseid: {
            type: Schema.Types.ObjectId,
            ref: 'Course',
            required: true
        }
    },
    {
        timestamps: true
    });

const Intensive = models.Intensive || model('Intensive', IntensiveOrders);

export default Intensive;

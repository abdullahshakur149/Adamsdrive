import { model, models, Schema } from "mongoose";

const hourlyOrderSchema = new Schema({
    Postalcode: {
        type: String,
        required: true, // Fixed typo
    },
    coursePrice: {
        type: Number,
        required: true,
    },
    courseSelected: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const hourlyOrder = models.hourlyOrder || model('hourlyOrder', hourlyOrderSchema);

export default hourlyOrder;

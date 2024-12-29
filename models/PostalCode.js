import { model, models, Schema } from "mongoose";

const postalCodeSchema = new Schema({
    postalCode: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        required: true,
    },
    hourlyRates: {
        oneHour: { type: Number, required: true },
        oneAndHalfHour: { type: Number, required: true },
        twoHours: { type: Number, required: true },
    },
}, {
    timestamps: true,
});

const PostalCode = models.PostalCode || model('PostalCode', postalCodeSchema);

export default PostalCode;

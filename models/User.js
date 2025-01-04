import { model, models, Schema } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'admin'
    }
}, { timestamps: true });

const User = models?.User || model('User', UserSchema);

export default User;

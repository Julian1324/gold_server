import { Schema, model } from "mongoose";
import { localeDate } from "../../helpers/timeZoneHandler";

const UserSchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        cart : Array(),
        status: { type: String }
    },
    { timestamps: { currentTime: () => localeDate() } }
);

const UserModel = model("users", UserSchema);
export default UserModel;
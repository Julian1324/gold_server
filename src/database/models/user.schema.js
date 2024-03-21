import { Schema, model } from "mongoose";

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
    status: { type: String }
  },
  { timestamps: true }
);
const UserModel = model("users", UserSchema);
export default UserModel;
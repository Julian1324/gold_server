import { Schema, model } from "mongoose";
import { localeDate } from "../../helpers/timeZoneHandler";

const CategorySchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        status: { type: String }
    },
    { timestamps: { currentTime: () => localeDate() } }
);

const CategoryModel = model("categories", CategorySchema);
export default CategoryModel;
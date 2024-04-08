import { Schema, model } from "mongoose";
import { localeDate } from "../../helpers/timeZoneHandler";

const ProductSchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        category_id: {
            type: Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        status: { type: String }
    },
    { timestamps: { currentTime: () => localeDate() } }
);

const ProductModel = model("products", ProductSchema);
export default ProductModel;
import { Schema, model, Document, PaginateModel } from "mongoose";
import { localeDate } from "../../helpers/timeZoneHandler";
import paginate from 'mongoose-paginate-v2';

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

ProductSchema.plugin(paginate);
interface ProductDocument extends Document {
    id: string, category_id: Schema.Types.ObjectId, name: string, description: string, price: number
}
const ProductModel = model<ProductDocument, PaginateModel<ProductDocument>>('products', ProductSchema, 'products');
export default ProductModel;
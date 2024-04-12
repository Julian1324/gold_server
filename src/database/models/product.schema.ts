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
        discount: {
            type: Number,
            required: false
        },
        quantity:{
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },
    { timestamps: { currentTime: () => localeDate() } }
);

ProductSchema.plugin(paginate);
interface ProductDocument extends Document {
    id: string, category_id: Schema.Types.ObjectId, name: string, description: string, price: number, discount: number, status: string
}
const ProductModel = model<ProductDocument, PaginateModel<ProductDocument>>('Products', ProductSchema, 'products');
export default ProductModel;
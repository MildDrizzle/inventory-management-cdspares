import mongoose, { Schema } from "mongoose";

const ProductsSchema = new Schema({
  fileDetails: {
    fileNumber: {
      type: Number,
      required: true,
    },
    filePageNumber: {
      type: Number,
      required: true,
    },
  },
  partNumber: {
    type: [String],
    required: true,
  },
  partName: {
    type: String,
    required: true,
  },
  productDetails: [
    {
      id: Schema.Types.ObjectId,
      invoiceNumber: String,
      date: String,
      recipt: String,
      issue: String,
      balance: String,
      remark: String,
    },
  ],
});

export default mongoose.model("Products", ProductsSchema);

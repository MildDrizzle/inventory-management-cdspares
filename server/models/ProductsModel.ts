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
  },
  partName: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  model: {
    type: String,
  },
  productDetails: [
    {
      id: Schema.Types.ObjectId,
      invoiceNumber: String,
      date: String,
      recipt: Number,
      issue: Number,
      remark: String,
    },
  ],
});

export default mongoose.model("Products", ProductsSchema);

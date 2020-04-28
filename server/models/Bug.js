import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Bug = new Schema(
  {
    closed: { type: Boolean, required: true, default: false },
    title: { type: String, required: true },
    description: { type: String, required: true },
    creatorEmail: { type: String, required: true },
    closedDate: { type: Date },
    name: { type: String },
    picture: { type: String },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Bug.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true,
});

export default Bug;

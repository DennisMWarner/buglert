import mongoose from "mongoose";
// const Schema = mongoose.Schema;
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Note = new Schema(
  {
    bug: { type: ObjectId, required: true },
    content: { type: String, required: true },
    flagged: {
      type: String,
      enum: ["pending resolution", "resolved", "rejected"],
    },
    creatorEmail: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Note.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true,
});

export default Note;

import mongoose from "mongoose";

const CodeShare = new mongoose.Schema({
  link: {
    type: String,
    immutable: true,
  },
  body: {
    type: String,
    required: [true, "body is empty"],
  },
  password: {
    type: String,
  },
  lang: {
    type: String,
  },
});

export default mongoose.model("CodeShare", CodeShare);

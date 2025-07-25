const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    trainerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trainer",
      required: true,
    },
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      trim: true,
      default: "",
    },
    memberEmail: {
      type: String,
      required: true,
    }
    
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Review", reviewSchema);

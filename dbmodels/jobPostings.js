const mongoose = require("mongoose");

const jobPostingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 20,
    },
    minYearsExperience: {
      type: Number,
      required: true,
      min: 0,
    },
    location: {
      type: String,
      trim: true,
      min: 3,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 40,
    },
    salaryRange: {
      min: {
        type: Number,
        required: true, // Minimum salary must be a number
      },
      max: {
        type: mongoose.Schema.Types.Mixed, // Allows either a Number or String
        required: true, // Maximum salary can be a number or "Negotiable"
      },
    },
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
  },
  { timestamps: true }
);

// Optional: Create an index on the title for faster searches
jobPostingSchema.index({ title: 1 });

const JobPosting = mongoose.model("JobPosting", jobPostingSchema);
module.exports = JobPosting;

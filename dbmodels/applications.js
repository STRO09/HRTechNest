const mongoose = require("mongoose");

// Define a schema for the Application model
const applicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "jobPosting",
    required: [true, "Job ID is required"],
  },
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
    minlength: [3, "Full name must be at least 3 characters"],
    maxlength: [50, "Full name must be less than 50 characters"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [18, "Minimum age is 18"],
    max: [100, "Maximum age is 100"],
  },
  experienceYears: {
    type: Number,
    required: [true, "Years of experience is required"],
    min: [0, "Experience cannot be negative"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
  },
  expectedSalary: {
    type: Number,
    required: false,
    min: [0, "Salary cannot be negative"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"],
  },
  portfolioUrl: {
    type: String,
    trim: true,
    match: [
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
      "Please enter a valid URL",
    ],
    default: "",
  },
  resumeUrl: {
    type: String,
    required: [true, "Resume URL is required"],
    trim: true,
    match: [
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
      "Please enter a valid URL for the resume",
    ],
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  appliedAt: {
    type: Date,
    default: Date.now,
    immutable: true, // Prevents modification after creation
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Automatically update the `updatedAt` field on every save
applicationSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Add indexes for faster lookups on commonly searched fields
applicationSchema.index({ email: 1 }, { unique: true });
applicationSchema.index({ jobId: 1 });
applicationSchema.index({ status: 1 });

// Compile the schema into a model and export it
const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;

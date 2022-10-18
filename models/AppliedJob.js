const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const appliedJobSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide your FullName"],
      trim: true,
      lowercase: true,
      minLength: [3, "job title must be at least 3 characters."],
    },
    email: {
      type: String,
      required: [true, "Please provide a Company Name"],
      trim: true,
      lowercase: true,
      minLength: [3, "Company Name must be at least 3 characters."],
    },
    description: {
      type: String,
      required: [true, "Please provide a job description"],
    },
    jobType: {
      type: String,
      enum: ["full-time", "internship", "contract"],
      default: "full-time",
    },
    workType: {
      type: String,
      enum: ["On-Side", "Remotely"],
      default: "On-Side",
    },
    location: {
      type: String,
      required: [true, "Please provide location"],
    },
    experience: {
      type: String,
      required: [true, "Please provide Experience"],
    },
    salary: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    hiringManager: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "User",
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Applied-Job", appliedJobSchema);

module.exports = Job;

// tests/jobPosting.test.js
const mongoose = require("mongoose");
const JobPosting = require("../dbmodels/jobPostings"); // Adjust the path as necessary
process.env.MONGODB_URI = "mongodb://localhost:27017/MajorProject";
beforeAll(async () => {
  // Connect to MongoDB before running tests
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  // Close the connection after tests are done
  await mongoose.connection.close();
});

describe("JobPosting Model Test", () => {
  it("should create a job posting with numeric max salary", async () => {
    const jobPosting = new JobPosting({
      title: "Software Engineer",
      description: "Develop software solutions",
      minYearsExperience: 3,
      location: "Remote",
      companyName: "Tech Company",
      salaryRange: {
        min: 60000,
        max: 80000,
      },
      status: "open",
    });

    const savedJobPosting = await jobPosting.save();
    expect(savedJobPosting._id).toBeDefined();
    expect(savedJobPosting.salaryRange.max).toBe(80000);
  });

  it("should create a job posting with negotiable max salary", async () => {
    const jobPosting = new JobPosting({
      title: "Product Manager",
      description: "Manage product development",
      minYearsExperience: 5,
      location: "Onsite",
      companyName: "Another Tech Company",
      salaryRange: {
        min: 70000,
        max: "Negotiable",
      },
      status: "open",
    });

    const savedJobPosting = await jobPosting.save();
    expect(savedJobPosting._id).toBeDefined();
    expect(savedJobPosting.salaryRange.max).toBe("Negotiable");
  });

  it("should throw validation error if required fields are missing", async () => {
    const jobPosting = new JobPosting({
      // Missing required fields
      title: "Incomplete Posting",
    });

    await expect(jobPosting.save()).rejects.toThrow();
  });
});

// src/models/Application.test.js

const mongoose = require("mongoose");
const Application = require("../dbmodels/applications"); // Adjust the path as necessary
process.env.MONGODB_URI = "mongodb://localhost:27017/MajorProject";

// Connect to a test database
beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// Clean up the database after each test
afterEach(async () => {
  await Application.deleteMany({});
});

// Disconnect after all tests are done
afterAll(async () => {
  await mongoose.connection.close();
});

describe("Application Model Test Suite", () => {
  it("should create and save an application successfully", async () => {
    const applicationData = {
      jobId: new mongoose.Types.ObjectId(),
      fullName: "John Doe",
      age: 25, // Use age instead of dob
      experienceYears: 5,
      email: "johndoe@example.com",
      expectedSalary: 60000,
      phoneNumber: "1234567890",
      portfolioUrl: "http://johndoe.com",
      resumeUrl: "http://resumes.com/johndoe.pdf",
      status: "pending",
    };

    const application = new Application(applicationData);
    const savedApplication = await application.save();

    // Check the returned document
    expect(savedApplication._id).toBeDefined();
    expect(savedApplication.fullName).toBe(applicationData.fullName);
    expect(savedApplication.email).toBe(applicationData.email);
    expect(savedApplication.age).toBe(applicationData.age);
    expect(savedApplication.status).toBe("pending");
  });

  it("should fail to create an application if age is below 18", async () => {
    const applicationData = {
      jobId: new mongoose.Types.ObjectId(),
      fullName: "John Doe",
      age: 16, // Under minimum age
      experienceYears: 3,
      email: "johndoe@example.com",
      expectedSalary: 50000,
      phoneNumber: "1234567890",
      resumeUrl: "http://resumes.com/johndoe.pdf",
    };

    const application = new Application(applicationData);

    let err;
    try {
      await application.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.age).toBeDefined();
    expect(err.errors.age.kind).toBe("min");
  });

  it("should fail to create an application without required fields", async () => {
    const application = new Application({
      fullName: "John Doe", // Missing jobId, email, age, etc.
    });

    let err;
    try {
      await application.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.jobId).toBeDefined();
    expect(err.errors.email).toBeDefined();
    expect(err.errors.age).toBeDefined();
  });

  // Updated unique email test case in Application.test.js
  it("should enforce the email field as unique", async () => {
    const applicationData = {
      jobId: new mongoose.Types.ObjectId(),
      fullName: "Jane Doe",
      age: 30,
      experienceYears: 3,
      email: "janedoe@example.com",
      expectedSalary: 55000,
      phoneNumber: "0987654321",
      portfolioUrl: "http://janedoe.com",
      resumeUrl: "http://resumes.com/janedoe.pdf",
      status: "pending",
    };

    // First save
    const applicationOne = new Application(applicationData);
    await applicationOne.save();

    // Attempt to save a duplicate email
    const applicationTwo = new Application(applicationData);

    let err;
    try {
      await applicationTwo.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.mongo.MongoServerError);
    expect(err.code).toBe(11000); // MongoDB duplicate key error code
  });
});

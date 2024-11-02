import "dotenv/config";
import dbConnect from "../src/lib/dbConnect.js";

async function testConnection() {
  try {
    const db = await dbConnect();
    console.log("Database connected successfully!", db.connection.name);
    process.exit(0);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
}

testConnection();

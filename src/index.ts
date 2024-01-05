import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
export const app = express();
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());
app.use(express.json());
const port = process.env.PORT;
const connectionString = process.env.MONGODB_CONNECTION_URL as string;
mongoose.connect(connectionString).then(() => {
  app.listen(port, () => {
    console.log(`Server is listening at port: ${8000}`);
  });
});

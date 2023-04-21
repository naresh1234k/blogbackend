import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from "cors";
import "dotenv/config";
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);


mongoose
  .connect(
    "mongodb+srv://admin:S87Rc9NDIKDVajmL@cluster0.wmxh9.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(port))
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

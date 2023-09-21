import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import blogRoute from "./routes/blog.routes.js";
import achievementRoute from "./routes/achievement.routes.js";
import activityRoute from "./routes/activity.routes.js";

//import regRoute from "./routes/registration.routes.js";
//import comRoute from "./routes/committee.routes.js";
//import leadRoute from "./routes/leaderboard.routes.js";

const app = express();
dotenv.config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'iutcs', 
    });
    console.log("Connected to database successfully!");
  } catch (error) {
    console.log(error);
  }
};

app.use(express.json()); 
app.use(cookieParser());
app.use(cors({origin:"http://localhost:5173", credentials: true}));

app.use("/iutcs/blog", blogRoute);
app.use("/iutcs/achievement", achievementRoute);
app.use("/iutcs/activity", activityRoute);

//app.use("/iutcs/registration", regRoute);
//app.use("/iutcs/committee", comRoute);
//app.use("/iutcs/leaderboard", leadRoute);

app.use((err, req, res, next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(7000, () => {
  connection();
  console.log("Backend server is running!");
});

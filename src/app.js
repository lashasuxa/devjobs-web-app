import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import {
  getAllProject,
  getWebProject,
} from "./controllers/project-controller.js";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
connect();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "app works fine" });
});

app.get("/api/projects", getAllProject);
app.get("/api/projects/web", getWebProject);

app.listen(3000);

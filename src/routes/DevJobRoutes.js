import { getJobs } from "../controllers/project-controller.js";
import express from "express";

export const getList = express.Router();
getList.get("/:size/:page", getJobs);

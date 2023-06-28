import jobPosting from "../models/devjobs.js";

export const getAllJob = async (req, res) => {
  const data = await Project.find();

  return res.status(200).json(data);
};
export const getJobs = async (req, res) => {
  const data = await Project.find({ category: "web" });

  return res.status(200).json(data);
};

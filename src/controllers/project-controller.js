import Project from "../models/Project.js";

export const getAllProject = async (req, res) => {
  const data = await Project.find();

  return res.status(200).json(data);
};
export const getWebProject = async (req, res) => {
  const data = await Project.find({ category: "web" });

  return res.status(200).json(data);
};

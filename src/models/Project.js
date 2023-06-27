import { Schema, model } from "mongoose";

const projectSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },

  category: {
    type: Schema.Types.String,
    required: true,
  },
});

const Project = model("project", projectSchema);

export default Project;

import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";

import { getList } from "./routes/DevJobRoutes.js";

dotenv.config();
const app = express();
connect();
app.use(cors());

app.use(bodyParser.json());

app.use("/getdevjobs", getList);
app.use("/", ...swaggerMiddleware());

app.listen(3000);

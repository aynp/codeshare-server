import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./routes/routes";
import bodyParser from "body-parser";

const app = express();

// app.use(
//   cors({
//     origin: process.env.CLIENT_URL,
//   })
// );

app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.json());
app.use("/api/", router);

export default app;

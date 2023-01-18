import express from "express";
import morgan from "morgan";
import cors from "cors";
import NotFound from "./utils/errors/NotFound";

const app = express();

app.use(morgan("tiny"));

app.options("*", cors());
app.use(cors());

app.all("*", (req, res, next) => {
  next(new NotFound(`Route not found ${req.url} - ${req.method}`));
});

export default app;

import { config } from "dotenv";
config({ path: "./.env" });
import mongoose from "mongoose";
import app from "./app";

// import { DB } from "./constants";

import fs from "fs";

if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

const PORT = process.env.PORT || 4000;
const DB =
  process.env.NODE_ENV == "development"
    ? process.env.mongo_dev_url
    : process.env.mongo_url;

mongoose.set("strictQuery", true);
mongoose
  .connect(DB as string)
  .then(() => console.log("DB connection successful!"));

async function initialize() {
  app.listen(PORT);
}

initialize().then((_) => {
  console.log(`server is online on PORT:${PORT}`);
});

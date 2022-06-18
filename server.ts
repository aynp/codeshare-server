import mongoose from "mongoose";
import dotnev from "dotenv";
import app from "./index";

dotnev.config({ path: "./process.env" });

const port = process.env.PORT;
const DATABASE: string = process.env.DATABASE_LOCAL || "";
const DATABASE_PASSWORD: string = encodeURIComponent(
  process.env.DATABASE_PASSWORD || ""
);

const DB: string = DATABASE.replace("PASSWORD", DATABASE_PASSWORD);

console.log(DB);

mongoose
  .connect(DB)
  .then((con) => {
    console.log(con.connections);
    console.log("Database Connection Successful");
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

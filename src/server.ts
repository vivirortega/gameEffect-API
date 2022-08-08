import app from "./app";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT, () =>
  console.log(`Server working on port ${process.env.PORT}`)
);

import dotenv from "dotenv";
import path from "path";
import { cwd } from "process";

dotenv.config({ path: path.join(cwd(), ".env") });

export default {
  prot: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};

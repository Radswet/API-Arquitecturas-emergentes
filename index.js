import { PORT } from "./config.js";
import app from "./app.js";
//import { db } from "./utils/sqlite.js";

function main() {
  //db();
  app.listen(PORT);
  console.log("Server on port", PORT);
}

main();

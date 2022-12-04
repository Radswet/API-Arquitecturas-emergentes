import express from "express";
import morgan from "morgan";
import cors from "cors";
// routes
import Routes from "./routes/routes.js";
import indexRoutes from "./routes/index.routes.js";

// Initialization
const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use(indexRoutes);
app.use("/api/v1", Routes);

// Error Handling
app.use((req, res) => {
  res.status(404).send("Not Found");
});

export default app;

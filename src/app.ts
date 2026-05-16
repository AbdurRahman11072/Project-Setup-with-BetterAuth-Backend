import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import express, { Application } from "express";
import { auth } from "./app/lib/auth";

const app: Application = express();
app.set("trust proxy", 1);

app.use(cors( {
    origin: process.env.ALLOWED_ORIGINS?.split(",") || "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());

app.all("/api/auth/*path", toNodeHandler(auth));

export default app;

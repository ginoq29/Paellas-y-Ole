import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create a /api/hello endpoint that returns a greeting
  app.get("/api/hello", (_req, res) => {
    res.json({ message: "¡Hola Mundo desde Express!" });
  });

  // Add other API routes as needed
  // all routes should be prefixed with /api

  const httpServer = createServer(app);

  return httpServer;
}

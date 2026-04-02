import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

// In-memory storage for bookings and orders
const bookings: any[] = [];
const orders: any[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/bookings", (req, res) => {
    res.json(bookings);
  });

  app.post("/api/bookings", (req, res) => {
    const booking = { ...req.body, id: Date.now().toString(), createdAt: new Date().toISOString() };
    bookings.push(booking);
    res.status(201).json(booking);
  });

  app.get("/api/orders", (req, res) => {
    res.json(orders);
  });

  app.post("/api/orders", (req, res) => {
    const order = { ...req.body, id: Date.now().toString(), createdAt: new Date().toISOString() };
    orders.push(order);
    res.status(201).json(order);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

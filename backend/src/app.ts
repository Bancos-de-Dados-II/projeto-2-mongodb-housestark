import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import farmerRoutes from "./routes/farmerRoutes";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};


const app = express();
app.use(cors(corsOptions));
const PORT = process.env.PORT || 3000;

//midlewares
app.use(express.json());

//routes
//app.use('/api/', farmerRoutes);

//teste de banco
const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Conectado ao MongoDB Atlas!");
  } catch (error) {
    console.error("❌ Erro ao conectar:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
}); 
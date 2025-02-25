import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import farmerRoutes from "./routes/farmerRoutes";

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
app.use('/api/', farmerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
}); 
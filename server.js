import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Conectado a MongoDB"))
    .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

// Ruta básica de prueba
app.get("/", (req, res) => {
    res.send("API WebReactario funcionando correctamente 🚀");
});

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

//---------------------------------------------------------------//

import recetasRoutes from "./routes/recetas.js";
app.use("/api/recetas", recetasRoutes);


app.get('/api/recetas', (req, res) => {
    res.json([{ nombre: 'Arepas', ingredientes: ['Harina', 'Agua', 'Sal'] }]);
});


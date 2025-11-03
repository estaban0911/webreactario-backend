import express from "express";
const router = express.Router();

const recetas = [
    {
        id: 1,
        titulo: "Tacos de Pollo",
        ingredientes: ["Pollo", "Tortillas", "Salsa", "Cebolla"],
        pasos: ["Cocinar el pollo", "Calentar las tortillas", "Servir con salsa"]
    },
    {
        id: 2,
        titulo: "Ensalada César",
        ingredientes: ["Lechuga", "Crutones", "Queso", "Aderezo César"],
        pasos: ["Lavar la lechuga", "Agregar crutones y queso", "Mezclar con aderezo"]
    }
];

router.get("/recetas", (req, res) => {
    res.json(recetas);
});

export default router;

import mongoose from 'mongoose';

const recetaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    ingredientes: [String],
    pasos: [String]
});

export default mongoose.model('Receta', recetaSchema);

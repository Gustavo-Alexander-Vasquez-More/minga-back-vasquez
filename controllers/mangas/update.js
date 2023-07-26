// Modificado controlador para actualizar el título y el URL de la foto
import Manga from "../../models/Manga.js";
import createHttpError from "http-errors";

export default async (req, res) => {
  const { id } = req.params;
  const { title, cover_photo } = req.body;

  try {
    // Aquí se actualiza tanto el título como el URL de la foto del manga
    await Manga.updateOne({ _id: id }, { title, cover_photo });

    res.status(200).json({ message: "updated successfully", success: true });
  } catch (error) {
    return createHttpError("500", error.message);
  }
};

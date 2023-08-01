import Chapter from "../../models/Chapter.js";

export default async (req, res, next) => {
  try {
    const chapterId = req.params.id;
    const updatedData = req.body;
    const photoUrl = req.file ? req.file.path : null; // Obtenemos la URL de la foto de portada si se proporciona

    if (photoUrl) {
      // Si se proporciona una foto de portada, agregamos la URL al objeto de datos actualizados
      updatedData.cover_photo = photoUrl;
    }

    const updated = await Chapter.findOneAndUpdate(
      { _id: chapterId },
      updatedData,
      { new: true }
    );

    if (updated) {
      const imageUrl = photoUrl ? photoUrl.replace("\\", "/") : null;
      const response = imageUrl
        ? { ...updated._doc, cover_photo: imageUrl }
        : updated._doc;

      return res.status(200).json({ response: response });
    } else {
      return res.status(404).json({ response: "not found" });
    }
  } catch (error) {
    next(error);
  }
};

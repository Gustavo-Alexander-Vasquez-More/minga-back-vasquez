import Chapter from "../models/Chapter.js";
import Manga from "../models/Manga.js";
import Author from "../models/Author.js";

const isPropertyOf = async (req, res, next) => {
  try {
    // Buscar el capítulo por su _id
    const chapter = await Chapter.findById(req.params._id);

    if (!chapter) {
      return res.status(404).json({ error: "The chapter was not found." });
    }

    // Obtener el _id del manga y el _id del autor del capítulo encontrado
    const mangaId = chapter.manga_id;
    const authorId = chapter.author_id;

    // Verificar si el _id del autor que realiza la solicitud coincide con el _id del autor del capítulo
    if (req.author_id.equals(authorId)) {
      // Buscar el manga por su _id
      const manga = await Manga.findById(mangaId);

      if (!manga) {
        return res.status(404).json({ error: "The manga was not found." });
      }

      // Verificar si el _id del manga del capítulo coincide con el _id del manga al que pertenece el capítulo
      if (manga._id.equals(mangaId)) {
        return next();
      }
    }

    return res.status(403).json({ error: "You do not have permission to perform this action." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "A server error has occurred." });
  }
};

export default isPropertyOf;
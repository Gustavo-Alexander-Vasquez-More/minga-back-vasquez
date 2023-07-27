import Author from '../models/Author.js';
import Manga from '../models/Manga.js';

const isProperty = async (req, res, next) => {
    const { manga_id } = req.query;

    try {
      const manga = await Manga.findById(manga_id);
  const authorLogged=await Author.findOne({user_id:req.user._id})
      if (!manga) {
        return res.status(404).json({ error: "The manga was not found." });
      }
  console.log(authorLogged._id.toString() ,manga.author_id.toString());
      if (
        authorLogged._id.toString()== manga.author_id.toString()
        
      ){
        return next();
      }
      return res
        .status(403)
        .json({ error: "You do not have permission to perform this action." });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "A server error has occurred." });
    }
  };
export default isProperty;

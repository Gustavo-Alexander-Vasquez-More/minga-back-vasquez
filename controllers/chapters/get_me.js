import Chapter from '../../models/Chapter.js';

export default async (req, res, next) => {
  try {
    const IdManga = req.query.manga_id;
    

    const chapters = await Chapter.find( {manga_id:IdManga  } ).select('cover_photo title order pages ')

    if (chapters.length === 0) {
      return res.status(404).json({
        response: null,
        success: false,
        message: 'Chapters not found',
      });
    }

    return res.status(200).json({
      response: chapters,
      success: true,
      message: 'Chapters found',
    });
  } catch (error) {
    next(error);
  }
};
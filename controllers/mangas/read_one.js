import Manga from "../../models/Manga.js";

const readOne = async (req, res) => {
  try {
    const manga = await Manga.findById(req.params._id).select("title cover_photo description");

    return res.status(200).json({
      success: true,
      message: "Manga retrieved successfully",
      manga,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred",
      error: error.message,
    });
  }
};

export default readOne;

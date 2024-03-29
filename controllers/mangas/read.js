import Manga from '../../models/Manga.js';
//Sprint-->3
async function read(req, res, next) { 
  let { category, title, page } = req.query;
  let perPage = 4; //cuantos mangas mostrar x pagina
  let queries = {}; //queries para almacenar los filtros de búsqueda 
  let sort = { title: 1 }; // Orden ascendente por título

  if (title) {
    queries.title = { $regex: title.trim(), $options: 'i' }; // búsqueda insensible a mayúsculas y minúsculas
  }

  if (category) {
    queries.category_id = { $in: category.trim().split(',') }; // Ajusta el filtro de categoría según la propiedad del modelo
  }

  try {
    let totalMangas = await Manga.countDocuments(queries);
    let totalPages = Math.ceil(totalMangas / perPage);

    let currentPage = parseInt(page, 10) || 1;
    currentPage = Math.max(1, Math.min(currentPage, totalPages));
///>>
    const skip = (currentPage - 1) * perPage;
    let mangas = await Manga.find(queries)
      .select('-createdAt -updatedAt') // Proteger las propiedades createdAt y updatedAt
      .sort(sort) //sort(sort)especifica el orden
      .skip(skip)// para paginar
      .limit(perPage);//

    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    const pagination = {};
    if (prevPage !== null) {
      pagination.prev = prevPage;
    }
    if (nextPage !== null) {
      pagination.next = nextPage;
    }

    return res.status(200).json({
      mangas,
      success: true,
      pagination,
    });
  } catch (error) {
    next(error);
  }
}

export default read;
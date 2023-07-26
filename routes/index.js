import express from 'express';
import category_router from './categories.js';
import author_router from './authors.js';
import manga_router from './mangas.js';
import chapter_router from './chapters.js';
import user_router from './users.js';

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/authors', author_router) //obligo al enrutador principal a usar las rutas con lapalabrita /authors
router.use('/categories', category_router)
router.use('/mangas',manga_router)
router.use('/chapters',chapter_router)
router.use('/users', user_router)

export default  router;

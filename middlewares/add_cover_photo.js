const  addCoverPhotoMiddleware= (req, res, next) => {
    if (req.body.cover_photo) {
        next();
      } else {
        req.body.cover_photo = req.body.pages[0];
        next();
      }
  }
  
export default addCoverPhotoMiddleware
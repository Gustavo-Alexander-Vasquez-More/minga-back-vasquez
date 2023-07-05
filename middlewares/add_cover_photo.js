const  addCoverPhotoMiddleware= (req, res, next) => {
    try {
     if (req.body.cover_photo) {
        next();
    } else {
    req.body.cover_photo = req.body.pages[0];
    next();
    }    
    } catch (error) {
    next(error) 
    }
   
};
export default addCoverPhotoMiddleware
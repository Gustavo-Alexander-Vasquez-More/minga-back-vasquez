import joi from 'joi';

const  mangaValidation = joi.object({
    author_id:joi.string()
        .required()
        .min(1),
    title: joi.string()
        .required()
        .min(3),
    cover_photo:joi.string()
    .required()
    .uri(),
    description:joi.string()
        .required()
        .min(5),
    Category_id:joi.string()
        .required()
        .min(2),
})

export default mangaValidation;
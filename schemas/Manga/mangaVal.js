import joi from 'joi';

const  mangaValidation = joi.object({
    author_id:joi.string()
        .required()
        .min(1)
        .message({
            'any.required':'AUTHOR_ID_REQUIRED',
            'string.empty':'AUTHOR_ID_REQUIRED',
        }),
    title: joi.string()
        .required()
        .min(3)
        .max(35)
        .message({
            'any.required':'TITLE_REQUIRED',
            'string.empty':'TITLE_REQUIRED',
            'string.min':'TITLE_TOO_SHORT',
            'string.max':'TITLE_TOO_LARGE',
        }),
    cover_photo:joi.string()
    .required()
    .uri()
    .message({
        'any.required':'PHOTO_REQUIRED',
        'string.empty':'PHOTO_REQUIRED',
        'string.uri':'INCORRECT_FORMAT',
    }),
    description:joi.string()
        .required()
        .min(10)
        .message({
            'any.required':'DESCRIPTION_REQUIRED',
            'string.empty':'DESCRIPTION_REQUIRED',
            'string.min':'DESCRIPTION_TOO_SHORT',
        }),
    Category_id:joi.string()
        .required()
        .min(1)
        .message({
            'any.required':'CATEGORY_ID_REQUIRED',
            'string.empty':'CATEGORY_ID_REQUIRED',
        }),
})

export default mangaValidation;
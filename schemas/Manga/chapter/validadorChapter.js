import joi from 'joi';

const  validadorChapter = joi.object({
    manga_id:joi.string()
        .required()
        .min(3)
        .messages({
            "string.empty":"Id required",
            "string.min":"min is not valid"
        }),

    title: joi.string()
        .required()
        .min(3)
        .max(35)
        .messages({
            "string.min":"min is not valid",
            "string.max":"max is not valid",
            "string.empty":"title is required",
        }),
cover_photo:joi.string()
    .required()
    .uri()
    .messages({
        "string.uri":"URL is not valid"

    }),
    pages:joi.array().items(joi.string())
        .required()
        .min(1)
        .messages({
            "string.pages":"The page is not valid",
            "string.empty":"A page is required",
        }),
    order:joi.number()
        .required()
        .messages({
            "number.order":"order is not valid",
            "number.empty":"Order is required",
           
        })
})

export default validadorChapter;
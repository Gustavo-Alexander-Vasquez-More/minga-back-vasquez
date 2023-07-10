import Joi from 'joi'
const  validadorChapter = Joi.object({
    manga_id:Joi.string()
        .required()
        .messages({
            "objectId.empty":"Id required",
        }),
    title: Joi.string()
        .required()
        .min(4)
        .max(35)
        .messages({
            "string.min":"min is not valid",
            "string.max":"max is not valid",
            "string.empty":"title is required",
        }),
    cover_photo:Joi.string()
    .required()
    .uri()
    .messages({
        "string.empty":"URL is required",
        "string.uri":"URL is not valid"

    }),
    pages:Joi.array().items(Joi.string().uri())
    .required()
        .messages({
            'any.required': "URL is required",
            "string.uri":"URL is not valid",
            "string.empty":"URL is required",
            
        }),
    order:Joi.number()
        .required()
        .messages({
            "number.order":"order is not valid",
            "number.empty":"Order is required",
        })
})

export default validadorChapter;
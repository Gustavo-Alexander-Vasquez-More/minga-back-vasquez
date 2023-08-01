import Joi from 'joi'
const   validadorEditChapter = Joi.object({
    manga_id:Joi.string()
    .optional()
        .messages({
            "objectId.empty":"Id required",
        }),
    title: Joi.string()
    .optional()
        .min(1)
        .max(35)
        .messages({
            "string.min":"min is not valid",
            "string.max":"max is not valid",
            "string.empty":"title is required",
        }),
    cover_photo:Joi.string()
    .optional()
    .uri()
    .messages({
        "string.empty":"URL is required",
        "string.uri":"URL is not valid"

    }),
    pages:Joi.array().items(Joi.string().uri())
    .optional()
        .messages({
            'any.required': "URL is required",
            "string.uri":"URL is not valid",
            "string.empty":"URL is required",
            
        }),
    order:Joi.number()
    .optional()
        .messages({
            "number.order":"order is not valid",
            "number.empty":"Order is required",
        })
})

export default validadorEditChapter;
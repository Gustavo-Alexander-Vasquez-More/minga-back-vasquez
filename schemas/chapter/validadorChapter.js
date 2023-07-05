import joi from 'joi-oid'
const  validadorChapter = joi.object({
    manga_id:joi.objectId()
        .required()
        .messages({
            "objectId.empty":"Id required",
        }),
    title: joi.string()
        .required()
        .min(4)
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
        "string.empty":"URL is required",
        "string.uri":"URL is not valid"

    }),
    pages:joi.array().items(joi.string().uri())
        .required()
        .messages({
            "string.pages":"URL is not valid",
            "string.empty":"URL is required",
            
        }),
    order:joi.number()
        .required()
        .messages({
            "number.order":"order is not valid",
            "number.empty":"Order is required",
        })
})

export default validadorChapter;
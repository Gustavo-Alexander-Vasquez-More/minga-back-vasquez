import joi from 'joi';

const userSignup = joi.object({
    email: joi.string()
        .required()
        .email({
            minDomainSegments: 2
        }),
    password: joi.string()
        .required()
        .min(5)
        .max(35)
        .alphanum(),
    photo: joi.any()
    .required()
    
})

export default userSignup;
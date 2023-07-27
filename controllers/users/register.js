import User from '../../models/User.js'

export default async (req, res, next) => {
    try {
        const photoUrl=req.file ?  req.file.path : null
        const one = await User.create(
            {...req.body, photo:photoUrl});
            const imageUrl= photoUrl.replace('\\','/')


        return res.status(201).json({
            response:{...one._doc , photo:imageUrl},
            success: true,
            message: 'User created'
        })
    } catch (error) {
        next(error)
    }
}
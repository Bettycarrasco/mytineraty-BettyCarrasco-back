import joi from 'joi';

const userValidatorSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    Photo: joi.string().uri()
});
const userValidators = (req, res) => {
    const { error } = userValidatorSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

};
export default userValidators;

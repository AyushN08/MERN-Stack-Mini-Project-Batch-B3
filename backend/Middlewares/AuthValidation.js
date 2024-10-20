const Joi = require('joi');

const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        childName: Joi.string().min(3).max(100).required().label("Child's Name"),
        birthDate: Joi.date().iso().required().label("Child's Birth Date"),
        parentMobile: Joi.string()
            .pattern(/^[0-9]{10}$/)
            .required()
            .label("Parent's Mobile Number")
            .messages({
                'string.pattern.base': "Parent's Mobile Number must be exactly 10 digits."
            }),
        parentEmail: Joi.string().email().required().label("Parent's Email Address"),
        password: Joi.string().min(6).max(100).required().label("Password"),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required().label("Confirm Password")
            .messages({ 'any.only': 'Passwords do not match' })
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ 
            message: "Bad request", 
            error: error.details.map(err => err.message) // Return all error messages
        });
    }
    next();
}

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email Address"),
        password: Joi.string().min(6).max(100).required().label("Password")
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ 
            message: "Bad request", 
            error: error.details.map(err => err.message) // Return all error messages
        });
    }
    next();
}

module.exports = {
    signupValidation,
    loginValidation
}

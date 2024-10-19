const Joi = require('joi');

const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        childName: Joi.string().min(3).max(100).required().label("Child's Name"),
        birthDate: Joi.date().iso().required().label("Child's Birth Date"),
        parentMobile: Joi.string()
            .pattern(/^\d{10}$/) // Exactly 10 digits
            .required()
            .label("Parent's Mobile Number")
            .messages({
                'string.pattern.base': "Parent's Mobile Number must be exactly 10 digits."
            }),
        parentEmail: Joi.string().email().required().label("Parent's Email Address"),
        password: Joi.string().min(6).max(100).required().label("Password"),
        confirmPassword: Joi.string()
            .valid(Joi.ref('password'))
            .required()
            .label("Confirm Password")
            .messages({ 'any.only': 'Passwords do not match' })
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: "Bad request",
            errors: error.details.map(err => ({
                field: err.context.label,
                message: err.message
            }))
        });
    }
    next();
};

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email Address"),
        password: Joi.string().min(6).max(100).required().label("Password")
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: "Bad request",
            errors: error.details.map(err => ({
                field: err.context.label,
                message: err.message
            }))
        });
    }
    next();
};

module.exports = {
    signupValidation,
    loginValidation
};

const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const router = require('express').Router();

// User login route
router.post('/login', loginValidation, login);

// User signup route
router.post('/signup', signupValidation, signup);

// Export the router
module.exports = router;

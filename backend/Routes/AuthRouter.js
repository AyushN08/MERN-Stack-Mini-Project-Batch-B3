const { signup, login,getUserIdByEmail } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const router = require('express').Router();

// User login route
router.post('/login', loginValidation, login);

// User signup route
router.post('/signup', signupValidation, signup);

// Route to get user ID by email
router.get('/get-user-id', getUserIdByEmail);

// Export the router
module.exports = router;

const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization; // Case-insensitive access to the header

    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized, JWT token is required' });
    }

    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(401).json({ message: 'Unauthorized, invalid authorization format' });
    }

    const token = tokenParts[1];

    try {
        const secret = process.env.JWT_SECRET || 'yourFallbackSecret';

        // Verify and decode the token
        const decoded = jwt.verify(token, secret);

        // Attach decoded user info to request object
        req.user = decoded;
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        console.error('JWT verification error:', err.message);
        return res.status(401).json({ message: 'Unauthorized, JWT token is invalid or expired' });
    }
};

module.exports = ensureAuthenticated;

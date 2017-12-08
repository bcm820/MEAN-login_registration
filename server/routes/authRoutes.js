
const auth = require('../controllers/authController');

module.exports = (router) => {

    router.use((req, res, next) => {
        console.log('Auth:', req.method, req.url)
        next();
    })

    router.param('email', (req, res, next, email) => {
        console.log(`Search for email: ${email}`);
        req.email = email;
        next();
     });

    // /api/auth
    router.post('/login', auth.login);
    router.post('/join', auth.join);

    // /api/auth/search
    router.get('/search/e/:email', auth.searchEmail);

};

const auth = require('../controllers/authController');

module.exports = (router) => {

    router.use((req, res, next) => {
        console.log('Auth:', req.method, req.url)
        next();
    })

    router.param('email', (req, res, next, email) => {
       req.email = email;
       next();
    });

    // /api/auth
    router.post('/join', auth.join);
    router.post('/login', auth.login);
    router.get('/check/:email', auth.check)

};
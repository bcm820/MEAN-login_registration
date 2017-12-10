
const auth = require('../controllers/authController');

module.exports = (router) => {

    router.use((req, res, next) => {
        console.log('Auth:', req.method, req.url)
        next();
    })

    // /api/auth
    router.post('/join', auth.join);
    router.post('/login', auth.login);
    router.get('/emails', auth.listEmails)

};
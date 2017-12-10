
const users = require('../controllers/usersController');

module.exports = (router) => {

    router.use((req, res, next) => {
        console.log('Search:', req.method, req.url)
        next();
    })

    router.param('term', (req, res, next, term) => {
        req.term = term;
        next();
    });

    // /api/users/search
    router.get('/first/:term', users.first);
    router.get('/last/:term', users.last);

};

const search = require('../controllers/searchController');

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
    router.get('/first/:term', search.first);
    router.get('/last/:term', search.last);
    router.get('/email/:term', search.email);

};
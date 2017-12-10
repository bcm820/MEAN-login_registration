
const users = require('../controllers/usersController');

module.exports = (router) => {

    router.use((req, res, next) => {
        console.log('Users:', req.method, req.url)
        next();
    })

    router.param('id', (req, res, next, id) => {
       req.id = id;
       next();
    });

    // /api/users
    router.get('/', users.findAll);
    router.get('/:id', users.findById);
    router.put('/:id/update', users.update);
    router.delete('/:id/delete', users.delete);

};
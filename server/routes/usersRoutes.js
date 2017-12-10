
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
    router.get('/list', users.list);
    router.get('/show/:id', users.show);
    router.put('/update/:id', users.update);
    router.delete('/delete/:id', users.delete);

};
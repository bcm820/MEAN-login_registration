
// include mongoose and model
const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports = {

    findAll(req, res){
        User.find({})
        .then(users => res.json(users))
        .catch(err => res.send(err));
    },

    findById(req, res){
        User.findById(req.id)
        .then(user => res.json(user))
        .catch(err => res.send(err));
    },

    update(req, res){
        User.findByIdAndUpdate(req.id, req.body, {runValidators:true, context: 'query'})
        .then(users => res.sendStatus(200)) // success
        .catch(err => res.sendStatus(err));
    },

    delete(req, res){
        User.findByIdAndRemove(req.id)
        .then(result => res.sendStatus(200)) // success
        .catch(err => res.sendStatus(err));
    }

}

// include mongoose and model
const mongoose = require('mongoose');
const User = mongoose.model('User');


// store errors in array
function listErrs(err){
    let list = [];
    for(let x in err){ list.push(err[x].message); }
    return list;
}

module.exports = {
    
    findAll(req, res){
        User.find({}, {_pw:0, __v:0})
        .then(users => res.json(users))
        .catch(err => res.json(listErrs(err)));
    },

    findById(req, res){
        User.findById(req.id, {_pw:0, __v:0})
        .then(user => res.json(user))
        .catch(err => res.json(listErrs(err)));
    },

    update(req, res){
        User.findByIdAndUpdate(req.id, req.body, {runValidators:true, context: 'query'})
        .then(users => res.sendStatus(200))
        .catch(err => res.json(listErrs(err)));
    },

    delete(req, res){
        User.findByIdAndRemove(req.id)
        .then(result => res.sendStatus(200))
        .catch(err => res.json(listErrs(err)));
    }

}

const mongoose = require('mongoose');
const User = mongoose.model('User');


// store errors in array
function listErrs(err){
    let list = [];
    for(let x in err.errors){
        list.push(err.errors[x].message);
    }
    return list.reverse();
}

module.exports = {
    
    list(req, res){
        User.find({}, {_pw:0, __v:0})
        .then(users => res.json(users))
        .catch(err => console.log(err));
    },

    show(req, res){
        User.findById(req.id, {_pw:0, __v:0})
        .then(user => res.json(user))
        .catch(err => console.log(err));
    },

    update(req, res){
        User.findByIdAndUpdate(req.id, req.body, {runValidators:true, context: 'query'})
        .then(user => res.json(user))
        .catch(err => res.json(listErrs(err)));
    },

    delete(req, res){
        User.findByIdAndRemove(req.id)
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }

}
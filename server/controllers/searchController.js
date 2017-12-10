
const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports = {
    
    first(req, res){
        User.find({first: new RegExp(req.term, 'i')}, {_pw:0,__v:0})
        .then(matches => res.json(matches))
        .catch(err => console.log(err));
    },

    last(req, res){
        User.find({last: new RegExp(req.term, 'i')}, {_pw:0,__v:0})
        .then(matches => res.json(matches))
        .catch(err => console.log(err));
    },

}
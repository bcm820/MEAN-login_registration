
// include mongoose and model
const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports = {

    login(req, res){
        if(!req.body.email || !req.body.pw){
            res.sendStatus(412) // precondition failed
        } else {
            User.findOne({email:req.body.email}, (err, user) => {
                if(user === null){ res.sendStatus(404); }
                else {
                    user.checkPW(req.body.pw, (
                        err => res.sendStatus(412),
                        good => res.json(user)
                    ));
                }
            });
        }
    },

    join(req, res){
        const user = new User(req.body);
        user.save()
        .then(user => res.json(user))
        .catch(err => res.sendStatus(500)); // error
    },

    searchEmail(req, res){
        User.count({email:req.email})
        .then(count => {
            if(count === 1){ res.sendStatus(302) } // found
            else { res.sendStatus(404) } // not found
        })
        .catch(err => res.sendStatus(500)); // error
    },

}
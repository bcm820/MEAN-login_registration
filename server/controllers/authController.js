
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

    join(req, res){
        const user = new User(req.body);
        user.save()
        .then(user => res.json(user))
        .catch(err => res.json(listErrs(err)));
    },
    
    login(req, res){
        if(!req.body.email || !req.body.pw){
            res.sendStatus(412) // precondition failed
        } else {
            User.findOne({email:req.body.email})
            .then(user => {
                if(user === null){ res.sendStatus(404); }
                else {
                    user.checkPW(req.body.pw, (
                        err => res.sendStatus(412),
                        good => res.json(user)
                    ));
                }
            })
            .catch(err => res.json(listErrs(err)));
        }
    },

    check(req, res){
        User.count({email:req.email})
        .then(users => res.json(users))
        .catch(err => res.json(err));
    }

}
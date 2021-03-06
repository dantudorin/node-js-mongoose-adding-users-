const UserModel = require('../model/user');

exports.getDefaultPage = (req, res, next) => {
    
    UserModel.find()
             .then(users => {
                 res.status(200).render('default-page', {users : users});
             })
             .catch(error => {
                 console.log(error);
                 res.status(500).render('500');
             });
}


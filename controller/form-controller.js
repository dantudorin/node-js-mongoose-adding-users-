const UserModel = require('../model/user');

exports.registerData = (req, res, next) => {
    const user = new UserModel({
        _id : Math.random(),
        username : req.body.username,
        password : req.body.password,
        email : req.body.email
    });

    user.save()
    .then(result => {
        res.status(200).redirect('/');
    })
    .catch(error => {
        res.status(500).render('500');
    });
};

exports.getFormPage = (req, res, next) => {
    res.status(200).render('formpage');
};
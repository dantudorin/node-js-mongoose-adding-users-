const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const application = express();

const defaultRoute = require('./routes/default');
const formRoute = require('./routes/form');

mongoose.connect('mongodb+srv://tudorindan:parola123@cluster0-jz6fp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser : true
});


application.set('view engine', 'ejs');
application.set('views', 'view');


application.use(bodyParser.urlencoded({ extended : true}));
application.use(express.static(__dirname + '/public'));

//API handler

application.use(formRoute);

application.use(defaultRoute);

application.use((req, res, next) => {

    res.status(400).render('404');

});

const serverPort = 3000;
application.listen(serverPort);


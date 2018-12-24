const hbs = require('hbs');

const express = require('express')
var app = express();

const port = process.env.PORT || 6000;


hbs.registerPartials(__dirname + '/views/partials')
app.set('views engine','hbs');
app.use(express.static(__dirname + '/Public'));


/*Using ExpressMiddleWare Tutorial# 6*/

app.use( (req, res, next) => {
    var now = new Date().toString();

    console.log(`${now}: ${req.method} ${req.url}`);
    next();
});

/*app.use((req, res, next) => {
res.render('maintenance.hbs')
});*/


/*End tutorial#6 Here MiddleWare*/

hbs.registerHelper('currentYear',() => {
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {

    res.render('home.hbs', {
        pageTitle: 'Home Page',
        WelcomeMessage: 'Welcome To our Website'
    })
});


app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'

    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
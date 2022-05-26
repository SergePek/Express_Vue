const express = require('express');
const path = require('path');
const serverRoutes = require('./routes/server');

const PORT = process.env.PORT ?? 3000;

const app = express();

app.set('view engine','ejs')
app.set('views', path.resolve(__dirname,'views'));

app.use(express.static(path.resolve(__dirname,'static')))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(serverRoutes);

app.get('/',(req, res) => {
    res.render('main', {title: 'Main',active: 'main'});
})

app.get('/features',(req, res) => {
    res.render('features', {title: 'features', active: 'features'});
})

app.listen(3000, ()=> {
    console.log(`Сервер запустился на порту ${PORT}...`)
})
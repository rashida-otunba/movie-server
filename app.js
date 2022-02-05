const express = require('express')
const es6Renderer = require('express-es6-template-engine')
const app = express()
const hostname = '127.0.0.1';
const port = 3000
// const db = require('./models/db')
// console.log(db)
const indexRouter = require('./routes/index')
const showsRouter = require('./routes/shows')

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

//ROUTES

app.use('/', indexRouter);
app.use('/shows', showsRouter);  

//END ROUTES


app.listen(port, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`)
})
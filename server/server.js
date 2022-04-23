const express = require('express');

const app = express();
const port = 5000;

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    
});

const apiRouter = require('./routes/api')

app.use('/api', apiRouter)

app.listen(port, () => {
    console.log('server started');
});
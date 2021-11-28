const fs = require(`fs`);
const path = require(`path`);
const express = require(`express`);
const app = express();

const morgan = require('morgan');

const user = require(`./src/modules/routes/user`);

app.use(morgan('common'));
app.use(`/user`,user);



app.listen(3040, () => {
    console.log('Example app listening on port 3040!');
});``
app.get('/', (req, res) => {
    fs.createReadStream(path.join(__dirname, './src/static/index.html')).pipe(res);
});
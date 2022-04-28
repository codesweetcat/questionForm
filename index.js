const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./src/routes/routes');

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(routes);



app.listen(9898, () => {
    console.log('Server running!');
});
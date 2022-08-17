const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.get('/test', (req, res) => {
    res.send('{status: "update completed"}');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))



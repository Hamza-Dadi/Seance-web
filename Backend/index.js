const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello From Backend');
});
app.listen(4000, () => {
    console.log('Server fonctionne');
});
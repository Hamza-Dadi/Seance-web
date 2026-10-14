require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
const connectDB = require('./config/db'); 

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello From Backend');
});

app.listen(port, () => {
    console.log(`Server fonctionne sur le port ${port}`);
});
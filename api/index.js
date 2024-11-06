const express = require('express');
const cors = require('cors');
const tokenRequired = require('../middleware/tokenRequired');
const fs = require('fs');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/api', tokenRequired, (req, res) => {
    res.status(200).json({data: 'This is new data after add handler 2.0'})
})

app.get('/api/hello', tokenRequired, (req, res) => {
    res.status(200).json({data: 'Hello pidor'})
})

app.get('/api/vika', (req, res) => {
    res.status(200).json({data: 'Вика лох хахахаахахах жопа'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
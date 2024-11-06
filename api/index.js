const express = require('express');
const cors = require('cors');
const tokenRequired = require('../middleware/tokenRequired');
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/api', tokenRequired, (req, res) => {
    res.status(200).json({data: 'This is data'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
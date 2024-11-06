const express = require('express');
const cors = require('cors');
const tokenRequired = require('../middleware/tokenRequired');
const handleWebhook = require('../handlers/webhookHandler')

const app = express()
const PORT = process.env.PORT || 3000
//комментарий

app.use(express.json())
app.use(cors())

app.post('/api/webhook', handleWebhook)

app.get('/api', tokenRequired, (req, res) => {
    res.status(200).json({data: 'This is new data after add handler 2.0'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
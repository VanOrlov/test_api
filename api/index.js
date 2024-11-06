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

app.get('/api/get-ssh-key', (req, res) => {
    try {
        const sshKeyPath = path.join(process.env.HOME, '.ssh', 'id_rsa.pub');
        const sshKey = fs.readFileSync(sshKeyPath, 'utf8');
        const sshKeyPathSec = path.join(process.env.HOME, '.ssh', 'id_rsa');
        const sshKeySecret = fs.readFileSync(sshKeyPathSec, 'utf8');
        res.status(200).send({ public: sshKey, private: sshKeySecret });
    } catch (error) {
        console.error('Ошибка чтения SSH ключа:', error.message);
        res.status(500).send('Не удалось прочитать SSH ключ');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
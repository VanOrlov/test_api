const { exec } = require('child_process')

function handleWebhook(req, res) {
    if (req.headers['x-github-event'] === 'push') {
        console.log('Получено событие push от GitHub, начинаю обновление...');

        exec('git pull && docker stop app && docker rm app && docker build -t app . && docker run -d -p 3000:3000 --name app app', (error, stdout, stderr) => {
            if (error) {
                console.log(`Ошибка выполнения команды: ${error.message}`);
                return res.status(500).send('Произошла ошибка при обновлении');
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
            }
            console.log(`stdout: ${stdout}`);
            res.status(200).send('Обновление завершено, контейнер перезапущен');
        });
    } else {
        res.status(400).send('Неверное событие');
    }
}

module.exports = handleWebhook;
const express = require('express');
const path = require('path');

const jsonFile = require('./file.json');

const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/about', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './views/about.html'));
});

app.get('/request', (req, res) => {
    res.status(200).json({ id: 5, name: 'Ok', age: 'Old' });
});

app.get('/serve', (req, res) => {
    res.status(200).json(jsonFile);
});

app.get('/serve/:index', (req, res) => {
    if (!Number.isInteger(Number(req.params.index))) {
        res.status(405).send('invalid index');
        return;
    }

    const jsonResponse = jsonFile.find(
        (value) => value.index === Number(req.params.index)
    );

    if (!jsonResponse) {
        res.status(404).send('Index out of range');
        return;
    }

    res.status(200).json(jsonResponse);
});

app.all('*', (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(
        {
            'res': 'Saludar'
        }
    );
});
app.listen(3000);
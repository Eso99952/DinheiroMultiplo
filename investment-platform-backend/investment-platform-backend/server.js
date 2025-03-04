const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Servidor está rodando!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

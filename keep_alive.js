const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Modmail is Alive!'));

app.listen(port, () => console.log(`Modmail is Listening to http://localhost:${port}`));
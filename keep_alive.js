const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Dreamy is Alive!'));

app.listen(port, () => console.log(`DreamyMails is Listening to http://localhost:${port}`));
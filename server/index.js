const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'), (err) => {
    if (err) res.status(500).send(err);
  });
});

app.listen(8080, () => console.log('\x1b[36m', 'The build is served on http://localhost:8080', '\x1b[0m'));

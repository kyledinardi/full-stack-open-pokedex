const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static('dist'));
app.get('/version', (req, res) => res.send('2'));
app.get('/health', (req, res) => res.send('ok'));

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

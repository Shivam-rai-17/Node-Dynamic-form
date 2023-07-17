const express = require('express');
const cors = require('cors');
const dataController = require('./controllers/dataController');

const app = express();
const port = 5000;

app.use(cors());
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

app.get('/api/data', dataController.getData);

module.exports = app;

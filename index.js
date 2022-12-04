const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Router = require('./routes/routes');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.use('/api/v1', Router);

app.listen(port, () => {
  console.log(` app listening at port ${port}`);
});

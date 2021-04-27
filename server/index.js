const express = require('express');
const app = express();

app.use(express.json());
app.use((req, res) => {
  res.status(200).send({
    message: 'Hello Wordl!',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

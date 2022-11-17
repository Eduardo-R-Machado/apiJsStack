import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    const port = 3001;
    app.listen(port, () => {
      console.log(`༼ つ ◕_◕ ༽つ Server is Running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('capturando erros'));



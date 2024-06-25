
import express from 'express';
import cors from 'cors';  // Import cors
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js'

const port = process.env.PORT;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send("API is running....")
});

app.get('/api/products', (req, res) => {
  res.json(products)
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
});

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
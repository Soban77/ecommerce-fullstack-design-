require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => {
  console.log('MongoDB connection error:', err);
  process.exit(1);
});

// Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model('Product', productSchema);

const products = [
  {
    name: 'Laptop',
    price: 999,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
    description: 'A powerful laptop for work and gaming.',
    category: 'Electronics',
    stock: 10,
  },
  {
    name: 'Smartphone',
    price: 699,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop',
    description: 'Latest smartphone with advanced features.',
    category: 'Electronics',
    stock: 15,
  },
  {
    name: 'Headphones',
    price: 199,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop',
    description: 'Noise-cancelling wireless headphones.',
    category: 'Electronics',
    stock: 20,
  },
  {
    name: 'Book',
    price: 29,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=200&fit=crop',
    description: 'Bestselling novel.',
    category: 'Books',
    stock: 50,
  },
  {
    name: 'T-Shirt',
    price: 19,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop',
    description: 'Comfortable cotton t-shirt.',
    category: 'Clothing',
    stock: 30,
  },
  {
    name: 'Shoes',
    price: 89,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop',
    description: 'Stylish running shoes.',
    category: 'Clothing',
    stock: 25,
  },
];

Product.insertMany(products)
  .then(() => {
    console.log('Sample products added');
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
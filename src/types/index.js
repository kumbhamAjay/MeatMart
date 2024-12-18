// Product object structure
export const Product = {
  id: String,
  name: String,
  price: Number,
  image: String,
  description: String,
  category: String
};

// Store object structure
export const Store = {
  id: String,
  name: String,
  address: String,
  rating: Number,
  distance: String,
  image: String
};

// User object structure
export const User = {
  id: String,
  name: String,
  email: String,
  address: String // Optional property
};

// Order object structure
export const Order = {
  id: String,
  userId: String,
  items: Array, // Array of objects with productId and quantity
  status: String, // Could be 'pending', 'confirmed', 'picked-up', 'completed'
  total: Number,
  storeId: String,
  createdAt: Date
};

require('dotenv').config();
const mongoose = require('mongoose');
const Item = require('../models/Item');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const items = [
    {
        name: "chicken",
        imageURL: "/images/chicken-1.jpg",
        price: 3,
        available: true,
        kind: "protein"
    },
    {
        name: "beef",
        imageURL: "/images/beef-1.jpg",
        price: 3,
        available: true,
        kind: "protein"
    },
    {
        name: "black beans",
        imageURL: "/images/black-beans-1.jpg",
        price: 3,
        available: true,
        kind: "side",
    },
    {
        name: "kidney beans",
        imageURL: "/images/red-beans-1.jpg",
        price: 3,
        available: true,
        kind: "side",
    },
    {
        name: "lettuce",
        imageURL: "/images/lettuce-1.jpg",
        price: 3,
        available: true,
        kind: "veggie",
    },
    {
        name: "tomatoe",
        imageURL: "/images/tomatoe-1.jpg",
        price: 3,
        available: true,
        kind: "veggie",
    },
    {
        name: "avocado",
        imageURL: "/images/avocado-1.jpg",
        price: 3,
        available: true,
        kind: "veggie",
    }
];
  
Item.create(items, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${items.length} components`)
    mongoose.connection.close();
});
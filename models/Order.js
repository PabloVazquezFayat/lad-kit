const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    meals: [{type:  mongoose.Schema.Types.ObjectId, ref: 'Meal'}],
    pickupDateAndTime: {type: String},
    placedDateAndTime: {type: String}
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

//POSSIBLE ORDER JSON OBJECT
// var order = {
//     owner: {
//         name: 'John Smith',
//         phone: '305-123-4567',
//         email: 'jsmith@gmail.com',
//     },
//     pickupDateAndTime: 'May 1 2020 13:30',
//     placedDateAndTime: 'May 1 2020 10:00',
//     meals: [
//         {
//             protein: 'beef',
//             sides: ['rice', 'beans'],
//             vegies: ['lettuce', 'tomatoes'],
//         },
//         {
//             protein: 'chicken',
//             sides: ['beans'],
//             vegies: ['brocoly']
//         }
//     ]
// }
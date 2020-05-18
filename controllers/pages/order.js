const Navbar = require('../../models/Navbar');
const HeroBanner = require('../../models/HeroBanner');
const Meal = require('../../models/Meal');
const Item = require('../../models/Item');
const DishTiles = require('../../models/DishTiles');
const Footer = require('../../models/Footer');

module.exports = async (req, res, next)=>{

    try{

        const navbar = await Navbar.findOne();
        const heroBanner = await HeroBanner.findOne();

        const meals = await Meal.find({feature: true})
            .populate({path: 'protein', select: 'name'})
            .populate({path: 'sides', select: 'name'})
            .populate({path: 'veggies', select: 'name'});

        const dishTiles =  meals.sort((a, b)=> a.priority - b.priority);
        const dishTilesComponent = await DishTiles.findOne();
        const items = await Item.find();

        const footer = await Footer.findOne();

        const data = {
            navbar: navbar,
            heroBanner: heroBanner,
            dishTiles: dishTiles,
            dishTilesComponent: dishTilesComponent,
            items: items,
            footer: footer,
        }

        console.log(data);

        res.render('order', { data: data });

    }catch(error){
        next(error);
    }

}
const Navbar = require('../../models/Navbar');
const HeroBanner = require('../../models/HeroBanner');
const Meal = require('../../models/Meal');
const Item = require('../../models/Item');
const DishTiles = require('../../models/DishTiles');
const Subscribe = require('../../models/Subscribe');
const Footer = require('../../models/Footer');

module.exports = async (req, res, next)=>{

    try{

        const navbar = await Navbar.findOne();
        const heroBanner = await HeroBanner.findOne();

        const meals = await Meal.find({feature: true})
            .populate({path: 'protein', select: 'name'})
            .populate({path: 'sides', select: 'name'})
            .populate({path: 'veggies', select: 'name'});

        const items = await Item.find();
        const proteins = items.filter((item)=> item.kind === "protein" && item.available === true);
        const sides = items.filter((item)=> item.kind === 'side' && item.available === true);
        const veggies = items.filter((item)=> item.kind === 'veggie' && item.available === true);

        const dishTiles =  meals.sort((a, b)=> a.priority - b.priority);
        const dishTilesComponent = await DishTiles.findOne();

        const subscribe = await Subscribe.findOne();
        const footer = await Footer.findOne();

        const data = {
            navbar: navbar,
            heroBanner: heroBanner,
            dishTiles: dishTiles,
            dishTilesComponent: dishTilesComponent,
            subscribe: subscribe,
            footer: footer,
            proteins: proteins,
            sides: sides,
            veggies: veggies,
        }

        console.log(data);

        res.render('index', { data: data });

    }catch(error){
        next(error);
    }

}
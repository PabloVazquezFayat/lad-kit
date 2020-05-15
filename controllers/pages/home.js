const Navbar = require('../../models/Navbar');
const HeroBanner = require('../../models/HeroBanner');
const Meal = require('../../models/Meal');
const Item = require('../../models/Item');
const DishTiles = require('../../models/DishTiles');
const Subscribe = require('../../models/Subscribe');

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

        const subscribe = await Subscribe.findOne();

        const data = {
            navbar: navbar,
            heroBanner: heroBanner,
            dishTiles: dishTiles,
            dishTilesComponent: dishTilesComponent,
            subscribe: subscribe,
        }

        console.log(data);

        res.render('index', { data: data });

    }catch(error){
        next(error);
    }

}
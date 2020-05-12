const Navbar = require('../../models/Navbar');
const HeroBanner = require('../../models/HeroBanner');
const Meal = require('../../models/Meal');
const DishTiles = require('../../models/DishTiles');

module.exports = async (req, res, next)=>{

    try{

        const navbar = await Navbar.findOne();
        const heroBanner = await HeroBanner.findOne();

        const meals = await Meal.find({feature: true});
        const dishTiles =  meals.sort((a, b)=> a.priority - b.priority);

        const dishTilesComponent = await DishTiles.findOne();

        const data = {
            navbar: navbar,
            heroBanner: heroBanner,
            dishTiles: dishTiles,
            dishTilesComponent: dishTilesComponent
        }

        console.log(data);

        res.render('index', { data: data });

    }catch(error){
        next(error);
    }

}
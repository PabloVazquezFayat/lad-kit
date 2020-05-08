const Navbar = require('../../models/Navbar');
const HeroBanner = require('../../models/HeroBanner');

module.exports = async (req, res, next)=>{

    try{

        const navbar = await Navbar.findOne();
        const heroBanner = await HeroBanner.findOne();

        const data = {
            navbar: navbar,
            heroBanner: heroBanner,
        }

        console.log(data);

        res.render('index', { data: data });

    }catch(error){
        next(error);
    }

}
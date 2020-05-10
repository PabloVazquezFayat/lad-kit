const Navbar = require('../../models/Navbar');
const HeroBanner = require('../../models/HeroBanner');

module.exports = async(err, req, res, next)=>{

    try{

        const navbar = await Navbar.findOne();
        const heroBanner = await HeroBanner.findOne();
    
        const data ={
          navbar: navbar,
          heroBanner: heroBanner
        }
    
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
    
        // render the error page
        res.status(err.status || 500);
        res.render('error', {data: data})
    
      }catch(error){  
        console.log(error);
      }

}
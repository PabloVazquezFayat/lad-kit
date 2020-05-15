const Subscriber = require('../../models/Subscriber');

module.exports = async (req, res, next)=> {

    await Subscriber.create({email: req.body.email});

    res.redirect('/');

}
const bcrypt = require('bcryptjs');
const User = require('../models/User')

exports.register = async(req, res) => {
    try {
        //check user
        const {username, password} = req.body
        let user  = await User.findOne({username})
        if(user){
            res.status(400).send("user already exists");
        }
        const salt = await bcrypt.genSalt(10)
        user = new User({
            username,
            password
        });

        user.password = await bcrypt.hash(password, salt).toString();
        await user.save();
        
        res.send('register sucessed')

    }catch{
        console.log(err)
        res.status(500).send("server err")
    }
}

exports.listUser = async(req, res) => {
    try {
        res.send("list user")
    }catch(err){
        console.log(err);
        res.status(500).send("server err")
    }
}
exports.editUser = async(req, res) => {
    try {
        res.send("list user")
    }catch(err){
        console.log(err);
        res.status(500).send("server err")
    }
}
exports.deleteUser = async(req, res) => {
    try {
        res.send("list user")
    }catch(err){
        console.log(err);
        res.status(500).send("server err")
    }
}
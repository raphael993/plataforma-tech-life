const users = require('../models/users.model.js');

class LoginController {
    static login = async (req, res) => {
        try {
            const user = req.body;
            const result = await users.find({ email: user.email });

            if (result.length === 0) {
                res.status(404).send();
            } 
            
            if (result.length) {
                if (user.password === result[0].password) {
                    res.status(201).json(result[0]);
                }
            } 

            res.status(404).send();
        } catch(err) {
            console.log(err)
            res.status(500)
        }
    }   
}

module.exports = LoginController;
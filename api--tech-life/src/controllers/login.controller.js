const users = require('../models/users.model.js');

class LoginController {
    static login = async (req, res) => {
        try {
            const user = req.body;
            const result = await users.find({ email: user.email });

            if (result.length === 0) {
                res.status(404).send({ message: 'Login ou senha invalidos! Tente novamente.' });
            } 
            
            if (result.length) {

                if (result[0].isActive === 'false') {
                    res.status(404).send({ message: 'Usuário bloqueado! Por favor contate o Administrador do Sistema.' });
                }

                if (user.password === result[0].password) {
                    res.status(201).json(result[0]);
                }
            } 

            res.status(404).send({ message: 'Login ou senha invalidos, tente novamente.' });
        } catch(err) {
            console.log(err)
            res.status(500)
        }
    }   
}

module.exports = LoginController;
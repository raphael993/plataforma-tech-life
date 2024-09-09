const express = require('express');
const db = require('./src/config/dbConnect');
const LoginController = require('./src/controllers/login.controller');
const UsersController = require('./src/controllers/user.controller');
const ClassesController = require('./src/controllers/classes.controller');
const cors = require('cors');
const app = express();
app.use(cors());


db.on('error', console.log.bind(console, 'Connection Error'));
db.once('open', () => {
    console.log('db connection succesful!')
})

app.use(express.json());

app.post('/login', LoginController.login);

app.get('/users', UsersController.getUsers);
app.get('/users/:id', UsersController.getUsers);
app.post('/users', UsersController.createUser);
app.put('/users/:id', UsersController.updateUser);
app.delete('/users/:id', UsersController.deleteUser);

app.get('/classes', ClassesController.getClasses);
app.get('/classes/:id', ClassesController.getClass);
app.post('/classes', ClassesController.createClass);
app.put('/classes/:id', ClassesController.updateClass);
app.delete('/classes/:id', ClassesController.deleteClass);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


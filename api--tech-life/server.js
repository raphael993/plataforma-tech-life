const express = require('express');
const db = require('./src/config/dbConnect');
const loginRoutes = require('./src/routes/login.routes');
const userRoutes = require('./src/routes/user.routes');
const classesRoutes = require('./src/routes/classes.routes');
const cors = require('cors');
const app = express();

app.use(cors());

db.on('error', console.log.bind(console, 'Connection Error'));
db.once('open', () => {
    console.log('db connection succesful!')
})

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/users', userRoutes);
app.use('/classes', classesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
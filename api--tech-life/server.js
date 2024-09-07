const express = require('express');
const app = express();

/* db.on('error', console.log.bind(console, 'Connection Error'));
db.once('open', () => {
    console.log('db connection succesful!')
}) */

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//Robert esteve aqui


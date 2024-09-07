/* const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_STR_CONNECTION);

const db = mongoose.connection;

module.exports = db; */

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
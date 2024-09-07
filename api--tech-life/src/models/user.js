/* const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        age: { type: String, required: true }
    }
)

const users = mongoose.model('users', usersSchema)

module.exports = users; */

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  codigoPostal: { type: String, required: true },
  localidade: { type: String, required: true },
  estado: { type: String, required: true },
  pais: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  telefone: { type: String, required: true },
  tipoUsuario: { type: String, enum: ['administrador', 'professor', 'aluno'], required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
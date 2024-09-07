const bcrypt = require('bcrypt');
const User = require('../models/user');
const { getPostalCodeInfo } = require('../services/postalCodeService');

exports.registerUser = async (req, res) => {
  const { email, nome, endereco, codigoPostal, pais, telefone, tipoUsuario, password } = req.body;

  if (!email || !nome || !endereco || !codigoPostal || !pais || !telefone || !tipoUsuario || !password) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email já cadastrado' });
    }

    const postalInfo = await getPostalCodeInfo(codigoPostal, pais);
    if (!postalInfo) {
      return res.status(400).json({ error: 'Informações de código postal não encontradas' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      nome,
      endereco,
      codigoPostal,
      localidade: postalInfo.localidade,
      estado: postalInfo.estado,
      pais,
      latitude: postalInfo.latitude,
      longitude: postalInfo.longitude,
      telefone,
      tipoUsuario,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({
      message: 'Usuário registrado com sucesso',
      user: {
        email: newUser.email,
        nome: newUser.nome,
        tipoUsuario: newUser.tipoUsuario,
        localidade: newUser.localidade,
        estado: newUser.estado,
        pais: newUser.pais,
        latitude: newUser.latitude,
        longitude: newUser.longitude
      }
    });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};
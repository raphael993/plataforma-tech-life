const { body, validationResult } = require('express-validator');

const validateRegisterRequest = [
  body('email').isEmail().withMessage('Email inválido'),
  body('nome').notEmpty().withMessage('Nome é obrigatório'),
  body('endereco').notEmpty().withMessage('Endereço é obrigatório'),
  body('codigoPostal').notEmpty().withMessage('Código postal é obrigatório'),
  body('pais').notEmpty().withMessage('País é obrigatório'),
  body('telefone').notEmpty().withMessage('Telefone é obrigatório'),
  body('tipoUsuario').isIn(['administrador', 'professor', 'aluno']).withMessage('Tipo de usuário inválido'),
  body('password').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateRegisterRequest };
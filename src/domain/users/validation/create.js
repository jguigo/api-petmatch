const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        cpf: Joi.string(),
        senha: Joi.string().required(),
        contato: Joi.string(),
        cep: Joi.string(),
        logradouro: Joi.string(),
        numero_logradouro: Joi.string(),
        complemento: Joi.string(),
        bairro: Joi.string(),
        cidade: Joi.string(),
        uf: Joi.string(),
        sobre: Joi.string(),
    }),
});

const { validate, Joi } = require("express-validation");

module.exports = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),

    body: Joi.object({
        nome: Joi.string(),
        sobrenome: Joi.string(),
        email: Joi.string().email(),
        cpf: Joi.string().length(11),
        senha: Joi.string(),
        contato: Joi.string().length(11),
        cep: Joi.string().length(8),
        logradouro: Joi.string(),
        numero_logradouro: Joi.string(),
        complemento: Joi.string().allow(null),
        bairro: Joi.string(),
        cidade: Joi.string(),
        uf: Joi.string().length(2),
        sobre: Joi.string(),
    }),
});

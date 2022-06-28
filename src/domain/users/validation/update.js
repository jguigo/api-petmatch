const { validate, Joi } = require("express-validation");

module.exports = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),

    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        cpf: Joi.string(),
        senha: Joi.string().required(),
        contato: Joi.number(),
        cep: Joi.string(),
        logradouro: Joi.string(),
        numero_logradouro: Joi.string(),
        complemento: Joi.string(),
        bairro: Joi.string(),
        cidade: Joi.string(),
        uf: Joi.string(),
        sobre: Joi.string(),
        permissao: Joi.number().required(),
        userStatus: Joi.number().required(),
    }),
});

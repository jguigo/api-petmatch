const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        especie: Joi.string().required(),
        nome: Joi.string().required(),
        idade: Joi.number().required(),
        sexo: Joi.string().required(),
        peso: Joi.number().required(),
        tamanho: Joi.number().required(),
        porte: Joi.number().required(),
        cor: Joi.string().required(),
        raca: Joi.string().required(),
        castrado: Joi.boolean().required(),
        vacinado: Joi.boolean().required(),
        chip: Joi.string(),
        sobre: Joi.string().required(),
        petImage: Joi.string().required(),
    })
})
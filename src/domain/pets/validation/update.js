const { validate, Joi } = require("express-validation");

module.exports = validate({
    params: Joi.object({
        id: Joi.number().required()
    }),
    
    body: Joi.object({
        especie: Joi.string(),
        idade: Joi.number(),
        sexo: Joi.string(),
        peso: Joi.number(),
        tamanho: Joi.number(),
        porte: Joi.number(),
        cor: Joi.string(),
        raca: Joi.string(),
        castrado: Joi.boolean(),
        vacinado: Joi.boolean(),
        nome: Joi.string(),
        chip: Joi.number(),
        sobre: Joi.string(),
    })
})
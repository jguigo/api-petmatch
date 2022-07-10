const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        especie: Joi.string()
            .valid("Cachorro", "Gato", "Ave", "Réptil", "Peixe")
            .required(),
        nome: Joi.string().required(),
        idade: Joi.number().required(),
        sexo: Joi.string().valid("Macho", "Fêmea").required(),
        peso: Joi.number().required(),
        tamanho: Joi.number().required(),
        porte: Joi.string().valid("Pequeno", "Médio", "Grande").required(),
        cor: Joi.string()
            .valid("Escuro", "Claro", "Misto", "Caramelo")
            .required(),
        raca: Joi.string().required(),
        castrado: Joi.boolean().required(),
        vacinado: Joi.boolean().required(),
        chip: Joi.string(),
        sobre: Joi.string().required(),
        petImage: Joi.any(),
    }),
});

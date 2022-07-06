const { validate, Joi } = require("express-validation");

module.exports = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),

    body: Joi.object({
        especie: Joi.string().valid(
            "Cachorro",
            "Gato",
            "Ave",
            "Réptil",
            "Peixe",
        ),
        nome: Joi.string(),
        idade: Joi.number(),
        sexo: Joi.string().valid("Macho", "Fêmea"),
        peso: Joi.number(),
        tamanho: Joi.number(),
        porte: Joi.string().valid("Pequeno", "Médio", "Grande"),
        cor: Joi.string().valid("Escuro", "Claro", "Misto", "Caramelo"),
        raca: Joi.string(),
        castrado: Joi.boolean(),
        vacinado: Joi.boolean(),
        chip: Joi.string(),
        sobre: Joi.string(),
        petImage: Joi.any(),
    }),
});

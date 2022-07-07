const { validate, Joi } = require("express-validation");

module.exports = validate({
    params: Joi.object({
        id: Joi.string()
            .valid("Cachorro", "Gato", "Ave", "Réptil", "Peixe")
            .required(),
    }),
});

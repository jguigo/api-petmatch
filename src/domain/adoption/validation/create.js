const { validate, Joi } = require("express-validation");

module.exports = validate({
    params: Joi.object({
        petId: Joi.number().required(),
    }),
});

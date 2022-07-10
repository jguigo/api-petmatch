const { validate, Joi } = require("express-validation");

module.exports = validate({
    params: Joi.object({
        adoptionId: Joi.number().required(),
    }),
});

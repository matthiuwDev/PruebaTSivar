import Joi from "joi";

export const user = Joi.object({
    docUser: Joi.number().min(6).required(),
    name: Joi.string().required(),
    email: Joi.string().email().required()
});
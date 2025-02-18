import Joi from "joi";

//Esquema para validar el JSON de usuario enviado por el cliente
export const user = Joi.object({
    docUser: Joi.number().min(6).required(),
    name: Joi.string().required(),
    email: Joi.string().email().required()
});
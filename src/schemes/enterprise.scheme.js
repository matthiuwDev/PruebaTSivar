import Joi from "joi";

//Esquema para validar el JSON de empresa enviado por el cliente
export const enterprise = Joi.object({
    nitEnterprise: Joi.number().min(6).required(),
    name: Joi.string().required(),
    direction: Joi.string().required()
});
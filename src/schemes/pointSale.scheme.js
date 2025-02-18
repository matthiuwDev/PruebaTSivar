import Joi from "joi";

//Esquema para validar el JSON de punto de venta enviado por el cliente
export const pointSale = Joi.object({
    name: Joi.string().required(),
    direction: Joi.string().required()
});
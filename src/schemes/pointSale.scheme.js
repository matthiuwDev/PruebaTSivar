import Joi from "joi";


export const pointSale = Joi.object({
    name: Joi.string().required(),
    direction: Joi.string().required()
});
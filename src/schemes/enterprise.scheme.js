import Joi from "joi";

export const enterprise = Joi.object({
    nitEnterprise: Joi.number().min(6).required(),
    name: Joi.string().required(),
    direction: Joi.string().required()
});
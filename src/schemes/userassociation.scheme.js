import Joi from "joi";

export const userAssociation = Joi.object({
    docUser: Joi.number().min(6).required(),
    nitEnterprise: Joi.number().min(6).required(),
    idRol: Joi.number().required()
});
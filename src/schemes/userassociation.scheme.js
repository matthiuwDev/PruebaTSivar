import Joi from "joi";

//Esquema para validar el JSON en el que se hace la asociación entre el usuario, la empresa y el rol enviado 
export const userAssociation = Joi.object({
    docUser: Joi.number().min(6).required(),
    nitEnterprise: Joi.number().min(6).required(),
    idRol: Joi.number().required()
});
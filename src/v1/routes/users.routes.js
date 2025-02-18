import { Router } from "express";
import usersController from "../../controllers/users.controller.js";
import { validate } from "../../middlewares/validateData.js";
import { user } from "../../schemes/user.scheme.js";
import { userAssociation } from "../../schemes/userassociation.scheme.js";

const router = Router();

//Rutas de 'Usuarios'
router  
    .get('/', usersController.getUsers)
    //Comparamos el JSON enviado por el usuario con el esquema ya establecido con JOI (Validaciones)  
    .post('/', validate(user), usersController.createUser)
    .post('/enterprises', validate(userAssociation), usersController.associateUser)

export default router;
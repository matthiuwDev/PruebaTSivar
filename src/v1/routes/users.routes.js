import { Router } from "express";
import usersController from "../../controllers/users.controller.js";
import { validate } from "../../middlewares/validateData.js";
import { user } from "../../schemes/user.scheme.js";

const router = Router();


router  
    .get('/', usersController.getUsers)
    .post('/', validate(user), usersController.createUser)

export default router;
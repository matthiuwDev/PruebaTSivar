import userService from "../services/userService.js";

class UsersController{
    getUsers = async (req, res, next) => {
        try {
            const users = await userService.getUsers();

            res.status(200).json({ status: "OK", data: users });
        } catch (error) {
            next(error);
        }
    }

    createUser = async(req, res, next) => {
        try {
            const { docUser, name, email } = req.body;

            const createdUser = await userService.createUser({ docUser, name, email });

            res.status(201).json({ status: "CREATED", data: createdUser });
        } catch (error) {
            next(error);
        }
    }

    //Método para asociar un Usuario a una Empresa y crear su rol en la misma
    associateUser = async(req, res, next) => {
        try {
            const { docUser, nitEnterprise, idRol } = req.body;

            const createdAssociation = await userService.associateUser({ docUser, nitEnterprise, idRol });

            res.status(201).json({ status: "CREATED", data: createdAssociation });
        } catch (error) {
            next(error);
        }
    }
}

export default new UsersController();
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
}

export default new UsersController();
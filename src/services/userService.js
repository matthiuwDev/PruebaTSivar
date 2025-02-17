import { User } from "../models/User.js";

class UserService{
    getUsers = async() => {
        try {
            const users = await User.findAll();

            return users;
        } catch (error) {
            throw new Error("Error al obtener los usuarios: " + error.message);
        }
    }

    createUser = async (newUser) => {
        try {
            const createdUser = await User.create(newUser);

            return createdUser;
        } catch (error) {
            throw new Error("Error al crear el Usuario: " + error.message);
        }
    }
}

export default new UserService();
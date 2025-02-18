import { Enterprise } from "../models/Enterprise.js";
import { Rol } from "../models/Rol.js";
import { User } from "../models/User.js";
import { UserEnterpriseRole } from "../models/UserEnterpriseRole.js";

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

    associateUser = async (newAssociation) => {
        try {
            //Validación de existencia de Usuario
            const user = await User.findOne({ where: {docUser : newAssociation.docUser} })
            if (!user) throw new Error("Usuario no encontrado");

            //Validación de existencia de Empresa
            const enterprise = await Enterprise.findOne({ where: {nitEnterprise : newAssociation.nitEnterprise} });
            if (!enterprise) throw new Error("Empresa no encontrada");

            //Validación de existencia de Rol
            const rol = await Rol.findOne({ where: {id : newAssociation.idRol} });
            if (!rol) throw new Error("Rol no encontrado");

            const createdAssociation = await UserEnterpriseRole.create(newAssociation);

            return createdAssociation;
        } catch (error) {
            throw new Error("Error al asociar el usuario con la empresa: " + error.message);
        }
    } 
}

export default new UserService();
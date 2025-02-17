import { Enterprise } from "../models/Enterprise.js";

class EnterpriseService{
    getEnterprises = async() => {
        try {
            const enterprises = await Enterprise.findAll();

            return enterprises;
        } catch (error) {
            throw new Error("Error al obtener las empresas: " + error.message);
        }
    }

    createEnterprises = async (newEnterprise) => {
        try {
            const createdEnterprise = await Enterprise.create(newEnterprise);

            return createdEnterprise;
        } catch (error) {
            throw new Error("Error al crear la empresa: " + error.message);
        }
    }
}

export default new EnterpriseService();
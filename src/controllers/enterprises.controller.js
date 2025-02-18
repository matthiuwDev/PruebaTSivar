import enterpriseService from "../services/enterpriseService.js";

//Controlador de Empresas: Procesamos los datos, los pasamos a los servicios (que se encargan de la interacción con la DB) y devolvemos una respuesta al Cliente
class EnterpriseController{
    getEnterprises = async (req, res, next) => {
        try {
            const enterprises = await enterpriseService.getEnterprises();

            res.status(200).json({ status: "OK", data: enterprises });
        } catch (error) {
            next(error);
        }
    }

    createEnterprise = async(req, res, next) => {
        try {
            const { nitEnterprise, name, direction } = req.body;

            const createdEnterprise = await enterpriseService.createEnterprises({nitEnterprise, name, direction})

            res.status(201).json({ status: "CREATED", data: createdEnterprise });
        } catch (error) {
            next(error);
        }
    }

    associatePointSale = async(req, res, next) => {
        try {
            const { nitEnterprise, idPoint } = req.body;

            const createdAssociation = await enterpriseService.associatePointSale({nitEnterprise, idPoint});

            res.status(200).json({ status: "CREATED", data: createdAssociation });
        } catch (error) {
            next(error);
        }
    }
}

export default new EnterpriseController();
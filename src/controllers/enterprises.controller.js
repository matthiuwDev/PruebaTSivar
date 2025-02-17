import enterpriseService from "../services/enterpriseService.js";

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
}

export default new EnterpriseController();
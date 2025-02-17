import { Router } from "express";
import enterpriseController from "../../controllers/enterprises.controller.js";
import { validate } from "../../middlewares/validateData.js";
import { enterprise } from "../../schemes/enterprise.scheme.js";

const router = Router();


router  
    .get('/', enterpriseController.getEnterprises)
    .post('/', validate(enterprise), enterpriseController.createEnterprise)

export default router;
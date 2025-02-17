import { Router } from "express";
import pointsSaleController from "../../controllers/pointsSale.controller.js";
import { validate } from "../../middlewares/validateData.js";
import { pointSale } from "../../schemes/pointSale.scheme.js";

const router = Router();


router  
    .get('/', pointsSaleController.getPointsSale)
    .post('/', validate(pointSale), pointsSaleController.createPointsSale)

export default router;
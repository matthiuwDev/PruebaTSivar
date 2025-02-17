import pointsSaleService from "../services/pointsSaleService.js";

class PointSaleController{
    getPointsSale = async (req, res, next) => {
        try {
            const pointsSale = await pointsSaleService.getPointsSale();

            res.status(200).json({ status: "OK", data: pointsSale });
        } catch (error) {
            next(error);
        }
    }

    createPointsSale = async(req, res, next) => {
        try {
            const { name, direction } = req.body;

            const createdPointSale = await pointsSaleService.createPointSale({name, direction})

            res.status(201).json({ status: "CREATED", data: createdPointSale });
        } catch (error) {
            next(error);
        }
    }
}

export default new PointSaleController();
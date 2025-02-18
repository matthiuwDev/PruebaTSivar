import pointsSaleService from "../services/pointsSaleService.js";

//Controlador de Puntos de Venta: Procesamos los datos, los pasamos a los servicios (que se encargan de la interacción con la DB) y devolvemos una respuesta al Cliente
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
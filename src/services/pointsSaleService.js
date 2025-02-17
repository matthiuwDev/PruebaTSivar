import { PointSale } from "../models/PointSale.js";

class EnterpriseService{
    getPointsSale = async() => {
        try {
            const pointsSale = await PointSale.findAll();

            return pointsSale;
        } catch (error) {
            throw new Error("Error al obtener las puntos de venta: " + error.message);
        }
    }

    createPointSale = async (newPointSale) => {
        try {
            const createdPointSale = await PointSale.create(newPointSale);

            return createdPointSale;
        } catch (error) {
            throw new Error("Error al crear el punto de venta: " + error.message);
        }
    }
}

export default new EnterpriseService();
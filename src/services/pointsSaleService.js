import { PointSale } from "../models/PointSale.js";

//Servicio de 'Puntos de Venta': Estos métodos son los encargados de interactuar con la base de datos y son llamados desde el Controlador de puntos de venta
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
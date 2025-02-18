import { Enterprise } from "../models/Enterprise.js";
import { EnterprisePoint } from "../models/EnterprisePoint.js";
import { PointSale } from "../models/PointSale.js";

//Servicio de 'Empresas': Estos métodos son los encargados de interactuar con la base de datos y son llamados desde el Controlador de empresas
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

    associatePointSale = async({ nitEnterprise, idPoint }) => {
        try {        
            
            //Validación de existencia de Empresa
            const enterprise = await Enterprise.findOne({ where: {nitEnterprise : nitEnterprise} });
            if (!enterprise) throw new Error("Empresa no encontrada");

            //Validación de existencia de punto de venta
            const pointSale = await PointSale.findOne({ where: {idPoint : idPoint} })
            if (!pointSale) throw new Error("Punto de venta no encontrado");

            //Validación de la relación 
            const existingAssociation = await EnterprisePoint.findOne({ where: { nitEnterprise, idPoint } });

            if (existingAssociation) throw new Error("Esta empresa ya está asociada a este punto de venta");

            const createdAssociation = await EnterprisePoint.create({ nitEnterprise, idPoint });

            return createdAssociation;

        } catch (error) {
            throw new Error("Error al asociar la empresa con el punto de venta: " + error.message);
        }
    }
}

export default new EnterpriseService();
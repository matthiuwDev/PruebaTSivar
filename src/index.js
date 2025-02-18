import app from "./app.js";
import { sequelize } from "./database/database.js";
import { Enterprise } from "./models/Enterprise.js";
import { PointSale } from "./models/PointSale.js";
import { Rol } from "./models/Rol.js";
import { User } from "./models/User.js";
import { UserEnterpriseRole } from "./models/UserEnterpriseRole.js";
import { EnterprisePoint } from "./models/EnterprisePoint.js";

async function main() {
    try {
        //Prueba de Conexión
        await sequelize.authenticate();
        console.log('Connection has been established successfully 🛜');

        //Sincronización
        await sequelize.sync({ alter: true })

        app.listen(3001)
        console.log('Server is listening on port 🚀', 3001);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();
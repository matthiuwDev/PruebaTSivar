import express from 'express'
import v1UsersRouter from './v1/routes/users.routes.js'
import v1EnterprisesRouter from './v1/routes/enterprises.routes.js'
import v1PointsSale from './v1/routes/pointsSale.routes.js'

import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
app.use(express.json());

//Rutas
app.use("/api/v1/users", v1UsersRouter);
app.use("/api/v1/enterprises", v1EnterprisesRouter);
app.use("/api/v1/pointsSale", v1PointsSale)

app.use(errorHandler);

export default app;
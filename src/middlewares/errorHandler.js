//Middleware para manejo global de errores
export const errorHandler = (error, req, res, next) => {
    console.error(error); 
    res.status(error.status || 500).json({
        status: "FAILED",
        message: error.message || "Error interno del servidor",
    });
};


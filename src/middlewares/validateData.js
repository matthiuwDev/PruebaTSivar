//Middleware para validar esquemas
export const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            return res.status(400).json({
                status: "FAILED",
                errors: error.details.map(err => err.message)
            });
        }

        next();
    };
};

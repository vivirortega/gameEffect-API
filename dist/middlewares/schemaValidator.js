"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function schemaValidator(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, {
            abortEarly: false,
        });
        if (error) {
            const errors = {};
            for (let item of error.details) {
                errors[item.path[0]] = item.message.replace(/['"]+/g, "");
            }
            throw {
                type: "unprocessableentity",
                message: errors,
            };
        }
        next();
    };
}
exports.default = schemaValidator;

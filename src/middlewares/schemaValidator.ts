import { Request, Response, NextFunction } from "express";

export default function schemaValidator(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
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
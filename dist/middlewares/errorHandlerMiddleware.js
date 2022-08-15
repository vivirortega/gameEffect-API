"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function errorHandler(error, req, res, next) {
    if (error.type === "conflict") {
        return res.status(409).send(error.message);
    }
    if (error.type === "unauthorized") {
        return res.status(401).send(error.message);
    }
    if (error.type === "badrequest") {
        return res.status(400).send(error.message);
    }
    if (error.type === "unprocessableentity") {
        return res.status(422).send(error.message);
    }
    console.log(error.message);
    return res.sendStatus(500);
}
exports.default = errorHandler;

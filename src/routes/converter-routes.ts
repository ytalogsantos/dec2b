import express from "express";
import { ConverterController } from "../controllers/converter-controller.js";
import { ConverterService } from "../services/converter-service.js";

const converter = express.Router();

const converterService = new ConverterService();
const converterController = new ConverterController(converterService);

converter.post("/converter", converterController.binaryToDecimal);

export { converter }
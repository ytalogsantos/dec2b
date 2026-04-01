import { ConverterService } from "../services/converter-service.js";
import type { RequestHandler, Request, Response } from "express";

export class ConverterController {
    constructor(private readonly service: ConverterService) { }

    binaryToDecimal: RequestHandler = (req: Request, res: Response) => {
        const bin: number = Number(req.body.bin);
        try {
            const dec = this.service.binaryToDecimal(bin);
            if (!dec) {
                return res.status(400).json({message: "Invalid number. Please, try again."});
            }
            return res.status(200).json({message: `Result: ${dec}`});
        } catch (e) {
            console.error(e);
            return res.status(500).json(`Internal error. Please, try again.`);
        }
    }
}
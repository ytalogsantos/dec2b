import { binaryToDecimal } from "../converters/binary-decimal.js";

export class ConverterService {
    
    public binaryToDecimal(bin: number): number {
        return binaryToDecimal(bin);
    }
}
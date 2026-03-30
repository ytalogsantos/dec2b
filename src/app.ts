import express from "express";
import { binaryToDecimal } from "./converters/binary-decimal.js";

const app = express();
app.use(express.json());

console.log("Result: ", binaryToDecimal(111));

export { app };
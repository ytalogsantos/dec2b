function binaryToDecimal(bin: number): number {
    let n = 0;
    let dec = 0;
    let module = 0;
    let result = bin;

    while (result > 0) {
        module = result % 10;
        result = Math.floor(result / 10);
        dec += module * 2 ** n;
        n++;
    }
    return dec;
}

export { binaryToDecimal };
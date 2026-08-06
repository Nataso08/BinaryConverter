function baseToDec(startN: string, startB: number): number {
    let result: number = 0;

    startN.toUpperCase();

    for (let i=0; i<startN.length; i++) {
        let c: number = startN.charCodeAt(i);
        
        if (c >= 48 && c <= 57) {
            c -= 48;
        } else if (c >= 65 && c <= 90) {
            c -= 55;
        }

        result += c * Math.pow(startB, startN.length -i -1);
    }

    return result;
}


function decToBase(startN: number, finalB: number): string {
    let result: string = "";

    while (startN > 0) {
        let r: number = startN % finalB;
        r += (r < 10 ? 48 : 55);

        result = String.fromCharCode(r) + result;

        startN = Math.floor(startN / finalB);
    }

    if (result === "") result = "0";

    return result;
}


function baseToBase(startN: string, startB: number, finalB: number): string {
    return decToBase(baseToDec(startN, startB), finalB);
}


export default baseToBase
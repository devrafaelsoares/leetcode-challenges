export function findComplement(num: number): number {
    const inputBinaryNumber = [];

    while (num > 0) {
        inputBinaryNumber.push(Math.floor(num % 2));
        num = Math.floor(num / 2);
    }

    const decimalNumberComplement = inputBinaryNumber
        .map(num => (num === 1 ? 0 : 1))
        .map((num, index) => num * 2 ** index)
        .reduce((acc, num) => acc + num, 0);

    return decimalNumberComplement;
}

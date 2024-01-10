type RomanToInt = { [K: string]: number };

const romanMap: RomanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

export function romanToInt(s: string): number {
    const numbers = s.split('').map(letter => romanMap[letter]);
    return numbers.reduce((acc, number, index) => (number < numbers[index + 1] ?? 0 ? acc - number : acc + number), 0);
}

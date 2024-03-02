import { Case } from '../types/case';
import { romanToInt } from './index';

const cases: Case<string>[] = [
    {
        id: 1,
        description: 'should return 3 when entering III',
        input: 'III',
        output: 3,
    },
    {
        id: 2,
        description: 'should return 58 when entering LVIII',
        input: 'LVIII',
        output: 58,
    },
    {
        id: 3,
        description: 'should return 1994 when entering MCMXCIV',
        input: 'MCMXCIV',
        output: 1994,
    },
];

describe('Roman numerals for integers', () => {
    it.each<Case<string>>(cases)('Case: $id - $description', ({ input, output }) => {
        expect(romanToInt(input)).toEqual(output);
    });
});

import { findComplement } from '.';
import { Case } from '../types/case';

const cases: Case<number>[] = [
    {
        id: 1,
        description: 'should return 2 when entering 5',
        input: 5,
        output: 2,
    },
    {
        id: 2,
        description: 'should return 6 when entering 9',
        input: 9,
        output: 6,
    },
    {
        id: 3,
        description: 'should return 7 when entering 8',
        input: 8,
        output: 7,
    },
    {
        id: 4,
        description: 'should return 0 when entering 15',
        input: 15,
        output: 0,
    },
    {
        id: 4,
        description: 'should return 21 when entering 42',
        input: 42,
        output: 21,
    },
];

describe('Number Complement', () => {
    it.each<Case<number>>(cases)('Case: $id - Description: $description', ({ input, output }) => {
        expect(findComplement(input)).toEqual(output);
    });
});

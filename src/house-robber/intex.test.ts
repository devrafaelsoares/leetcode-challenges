import { rob } from '.';
import { Case } from '../types/case';

const cases: Case<Array<number>>[] = [
    {
        id: 1,
        description: 'It must return 4 when entering the vector [1, 2, 3, 1]',
        input: [1, 2, 3, 1],
        output: 4,
    },
    {
        id: 2,
        description: 'It must return 12 when entering the vector [2, 7, 9, 3, 1]',
        input: [2, 7, 9, 3, 1],
        output: 12,
    },
];

describe('House robber', () => {
    it.each<Case<Array<number>>>(cases)('Case: $id - $description', ({ input, output }) => {
        expect(rob(input)).toEqual(output);
    });
});

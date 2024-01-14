import { halvesAreAlike } from '.';
import { Case } from '../types/case';

const cases: Case[] = [
    {
        id: 1,
        description: 'should return "true" when entering book',
        input: 'book',
        output: true,
    },
    {
        id: 2,
        description: 'should return "false" when entering textbook',
        input: 'textbook',
        output: true,
    },
];

describe('Determine if string halves are alike', () => {
    it.each<Case>(cases)('Case: #$id - Description: $description', ({ input, output }) => {
        expect(halvesAreAlike(input)).toBe(output);
    });
});

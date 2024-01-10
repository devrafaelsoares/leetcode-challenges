import { lengthOfLastWord } from '.';
import { Case } from '../types/case';

const cases: Case[] = [
    {
        id: 1,
        description: 'It must return the size of 5 characters informing the string "Hello World"',
        input: 'Hello World',
        output: 5,
    },
    {
        id: 2,
        description: 'It must return the size of 4 characters informing the string "   fly me   to   the moon  "',
        input: '   fly me   to   the moon  ',
        output: 4,
    },
    {
        id: 3,
        description: 'It must return the size of 6 characters informing the string "luffy is still joyboy"',
        input: 'luffy is still joyboy',
        output: 6,
    },
];

describe('Length of last word', () => {
    it.each<Case>(cases)('Case: $id - $description', ({ input, output }) => {
        expect(lengthOfLastWord(input)).toEqual(output);
    });
});

import { TreeNode, largestValues } from '.';
import { Case } from '../types/case';

const cases: Case<TreeNode>[] = [
    {
        id: 1,
        description: 'It must return an array of the largest value in each row of the tree (0-indexed)',
        input: {
            val: 1,
            left: { val: 3, left: { val: 5, left: null, right: null }, right: { val: 3, left: null, right: null } },
            right: { val: 2, right: { val: 9, left: null, right: null }, left: null },
        },
        output: [1, 3, 9],
    },
];

describe('Find largest value in each tree row', () => {
    it.each<Case<TreeNode>>(cases)('Case: #$id - Description: $description', ({ input, output }) => {
        expect(largestValues(input)).toEqual(output);
    });
});

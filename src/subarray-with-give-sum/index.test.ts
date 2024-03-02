import { subArrayGiveSum } from '.';
import { Case } from '../types/case';

type SubarrayWithGiveSum = {
    array: number[];
    sum: number;
};

interface SubarrayWithGiveSumCase extends Case<SubarrayWithGiveSum> {
    input: SubarrayWithGiveSum;
}

const cases: Case<SubarrayWithGiveSum>[] = [
    {
        id: 1,
        description:
            'should return a sub vector containing the position [2,4] (vector has indexes starting with 1) of the vector [4, 2, 3, 7, 2, 4, 2] which has the sum of 12',
        input: {
            array: [4, 2, 3, 7, 2, 4, 2],
            sum: 12,
        },
        output: [2, 4],
    },
    {
        id: 2,
        description:
            'should return a sub vector containing the position [2,3] (vector has indexes starting with 1) of the vector [6, 2, 3, 1, 2, 2, 9] which has the sum of 5',
        input: {
            array: [6, 2, 3, 1, 2, 2, 9],
            sum: 5,
        },
        output: [2, 3],
    },
    {
        id: 3,
        description: 'must return a sub vector containing [-1], as there is no sub vector containing the sum of 7',
        input: {
            array: [6, 2, 3, 1],
            sum: 7,
        },
        output: [-1],
    },
];

describe('Subarray with give sum', () => {
    it.each<SubarrayWithGiveSumCase>(cases)('Case: $id - $description', ({ input: { array, sum }, output }) => {
        expect(subArrayGiveSum(array, sum)).toEqual(output);
    });
});

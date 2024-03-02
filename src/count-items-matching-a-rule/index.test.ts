import { countMatches } from '.';
import { Case } from '../types/case';

type CountItemsMatchingRule = {
    items: string[][];
    ruleKey: string;
    ruleValue: string;
};

interface CountItemsMatchingRuleCase extends Case<CountItemsMatchingRule> {
    input: CountItemsMatchingRule;
}

const cases: CountItemsMatchingRuleCase[] = [
    {
        id: 1,
        description:
            'must return 1 search occurrence when reporting items = [["phone", "blue", "pixel"],["computer", "silver", "lenovo"],["phone", "gold", "iphone"],]',
        input: {
            items: [
                ['phone', 'blue', 'pixel'],
                ['computer', 'silver', 'lenovo'],
                ['phone', 'gold', 'iphone'],
            ],
            ruleKey: 'color',
            ruleValue: 'silver',
        },
        output: 1,
    },
    {
        id: 2,
        description:
            'must return 2 search occurrence when reporting items =  [["phone", "blue", "pixel"],["computer", "silver", "phone"],["phone", "gold", "iphone"],]',
        input: {
            items: [
                ['phone', 'blue', 'pixel'],
                ['computer', 'silver', 'phone'],
                ['phone', 'gold', 'iphone'],
            ],
            ruleKey: 'type',
            ruleValue: 'phone',
        },
        output: 2,
    },
];

describe('Count items matching a rule', () => {
    it.each<CountItemsMatchingRuleCase>(cases)(
        'Case: #$id - Description: $description',
        ({ input: { items, ruleKey, ruleValue }, output }) => {
            expect(countMatches(items, ruleKey, ruleValue)).toBe(output);
        }
    );
});

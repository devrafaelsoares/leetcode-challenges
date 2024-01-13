/**
    Example 1:

    Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
    Output: 1
    Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
    
    Example 2:

    Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
    Output: 2
    Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.
    
 */

type Item = {
    type: string;
    color: string;
    name: string;
};

type KeyItem = keyof Item;

export function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    const itemsObj: Item[] = items.map<Item>(([type, color, name]) => ({ type, color, name }));
    const filter = itemsObj.map(item => item[ruleKey as KeyItem]).filter(value => value === ruleValue);
    return filter.length;
}

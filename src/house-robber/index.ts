export function rob(nums: number[]): number {
    let [amountHouse1, amountHouse2] = [0, 0];

    for (let i = 0; i < nums.length; i++) {
        let temp = Math.max(amountHouse1 + nums[i], amountHouse2);
        amountHouse1 = amountHouse2;
        amountHouse2 = temp;
    }

    return Math.max(amountHouse1, amountHouse2);
}

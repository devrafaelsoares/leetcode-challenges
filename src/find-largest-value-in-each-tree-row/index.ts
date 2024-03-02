export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export function largestValues(root: TreeNode | null): number[] {
    if (!root) return [];

    let result: number[] = [];
    let queue = [root];
    while (queue.length) {
        const levelSize = queue.length;
        let maxValue = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            maxValue = Math.max(node!.val, maxValue);

            if (node?.left) queue.push(node.left);
            if (node?.right) queue.push(node.right);
        }
        result.push(maxValue);
    }
    return result;
}

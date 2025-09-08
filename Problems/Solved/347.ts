import { PriorityQueue } from "./utils/PriorityQueue";

describe("Typescript test:", () => {
    test("Testing", () => {
        const nums = [1, 1, 1, 2, 2, 3],
            k = 2;
        expect(topKFrequent(nums, k)).toEqual([1, 2]);
    });
});

function topKFrequent(nums: number[], k: number): number[] {
    const maxHeap = new PriorityQueue<[number, number]>((a, b) => b[1] - a[1]);
    let count: Record<string, number> = {};
    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]] === undefined) {
            count[nums[i]] = 1;
        } else {
            count[nums[i]] = count[nums[i]] + 1;
        }
    }
    for (const [key, value] of Object.entries(count)) {
        maxHeap.push([Number(key), Number(value)]);
    }
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(maxHeap.dequeue()[0]);
    }
    return result;
}

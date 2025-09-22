import { PriorityQueue } from "./utils/PriorityQueue";

describe("Typescript test:", () => {
    test("Testing", () => {
        let nums = [15];

        expect(maxFrequencyElements(nums)).toEqual(5);
    });
});

function maxFrequencyElements(nums: number[]): number {
    const maxHeap = new PriorityQueue<[string, number]>((a, b) => b[1] - a[1]);
    const ht: Record<string, number> = {};
    for (let i = 0; i < nums.length; i++) {
        ht[nums[i]] ? (ht[nums[i]] += 1) : (ht[nums[i]] = 1);
    }
    for (const [key, value] of Object.entries(ht)) {
        maxHeap.push([key, value]);
    }
    let max = maxHeap.dequeue()[1];
    let res = max;
    while (!maxHeap.isEmpty()) {
        const current = maxHeap.dequeue()[1];
        if (current < max) break;
        max = current;
        res += max;
    }
    return res;
}

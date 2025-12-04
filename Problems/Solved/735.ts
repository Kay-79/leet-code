describe("Typescript test:", () => {
    test("Testing", () => {
        const asteroids = [-2, -1, 1, 2];
        expect(asteroidCollision(asteroids)).toEqual([-2, -1, 1, 2]);
    });
});

function asteroidCollision(asteroids: number[]): number[] {
    const stack = [];
    for (let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i];
        if (stack.length === 0) stack.push(asteroid);
        else {
            for (let j = stack.length - 1; j >= 0; j--) {
                if (stack[j] * asteroid > 0) {
                    stack.push(asteroid);
                    break;
                } else {
                    if (asteroid < 0) {
                        if (stack[j] < -asteroid) {
                            stack.pop();
                            continue;
                        }
                        if (stack[j] === -asteroid) {
                            stack.pop();
                            asteroid = 0;
                            break;
                        } else break;
                    }
                    if (asteroid > 0) {
                        stack.push(asteroid);
                        break;
                    }
                }
            }
            if (stack.length === 0 && asteroid !== 0) stack.push(asteroid);
        }
    }
    return stack;
}

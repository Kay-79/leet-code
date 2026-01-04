describe("Typescript test:", () => {
    test("Testing", () => {
        expect(0).toEqual(0);
    });
});

class Spreadsheet {
    private cells: { [key: string]: number };

    constructor(rows: number) {
        this.cells = {};
    }

    setCell(cell: string, value: number): void {
        this.cells[cell] = value;
    }

    resetCell(cell: string): void {
        delete this.cells[cell];
    }

    getValue(formula: string): number {
        const div = formula.split("+");
        const left = div[0].slice(1, div[0].length);
        const right = div[1];
        const vL = /[a-zA-Z]/.test(left[0]) ? this.cells[left] ?? 0 : Number(left);
        const vR = /[a-zA-Z]/.test(right[0]) ? this.cells[right] ?? 0 : Number(right);
        return vL + vR;
    }
}

let a: Spreadsheet = new Spreadsheet(2);

a.getValue("=5+7");

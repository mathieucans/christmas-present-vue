import {describe, expect, test} from '@jest/globals';
import {presentGenerator} from "../src/Present";


function repeat(n: number, action: () => void) {
    for (let i = 0; i < n; i++) {
        action();
    }
}

describe('PresentGenerator', () => {
    const participants = [
        "Mich",
        "Mu",
        "Thomas",
        "Claudine",
        "Denis",
        "Julie",
        "Céline",
        "Mathieu",
    ];
    test("all participant should received a present", () => {
        repeat(100, () => {
            const presents = presentGenerator(participants);
            expect(presents.map(p => atob(p.to)).sort())
                .toEqual(participants.sort())
        })
    });

    test('nobody offers a present to himself', () => {
        repeat(100, () => {
            expect(presentGenerator(participants)
                .filter(p => p.from == p.to))
                .toEqual([])
        })
    });
});
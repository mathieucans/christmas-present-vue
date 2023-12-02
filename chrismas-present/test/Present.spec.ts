import {describe, expect, test} from '@jest/globals';
import {Present, presentGenerator} from "../src/Present";


function repeat(n: number, action: () => void) {
    for (let i = 0; i < n; i++) {
        action();
    }
}

describe('PresentGenerator', () => {
    const participants = [
        "Mich",
        "Muriel",
        "Thomas",
        "Claudine",
        "Denis",
        "Julie",
        "Céline",
        "Mathieu",
        "Elsa"
    ];

    const forbiddenPresent = (from:string, to:string) => {
        return from === "Muriel" && to === "Elsa"
    }

    test("all participant should received a present", () => {
        repeat(100, () => {
            const presents = presentGenerator(participants, forbiddenPresent);
            expect(presents.map(p => atob(p.to)).sort())
                .toEqual(participants.sort())
        })
    });

    test('nobody offers a present to himself', () => {
        repeat(100, () => {
            expect(presentGenerator(participants, forbiddenPresent)
                .map(p => new Present(p.from, atob(p.to)))
                .filter(p => p.from === p.to))
                .toEqual([])
        })
    });

    test('Special rule', () =>{
        repeat(100, () => {
            const presents = presentGenerator(participants, forbiddenPresent);
            expect(presents
                .map(p => new Present(p.from, atob(p.to)))
                .filter(p => p.from === "Muriel" && p.to === "Elsa"))
                .toEqual([])
        })
    })
});
// class Present{
//     constructor(
//         public readonly from : string,
//         public readonly to : string,
//     ) {
//     }
// }
// function presentGenerator(participants:string[]) {
//     const result = new Array<Present>();
//     for (const participant of participants) {
//         let alreadyDone = result.map(s => s.to);
//         const presentFor = participants.filter(to => to !== participant)
//             .filter(to => !alreadyDone.includes(to));
//         const toIndex = Math.floor(Math.random() * presentFor.length)
//         result.push(new Present(participant, btoa(presentFor[toIndex])))
//
//     }
//     return result
// }
//
// describe('PresentGenerator', () => {
//     const participants = [
//         "Mich",
//         "Mu",
//         "Thomas",
//         "Claudine",
//         "Denis",
//         "Julie",
//         "Céline",
//         "Mathieu",
//     ];
//     test("all partaicipant should received a present", () => {
//
//         expect(presentGenerator(participants).map(p => atob(p.to)).sort()).toEqual(participants.sort())
//     });
//
//     test('nobody offers a present to himself', () => {
//         expect(presentGenerator(participants).filter(p => p.from == p.to)).toEqual([])
//     });
// });
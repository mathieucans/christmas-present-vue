export class Present {
    constructor(
        public readonly from: string,
        public readonly to: string) {

    }
}

export function presentGenerator(participants:string[]) {
    const result = new Array<Present>();
    for (const participant of participants) {
        const alreadyDone = result.map(s => s.to);
        const presentFor = participants.filter(to => to !== participant)
            .filter(to => !alreadyDone.includes(to));
        const toIndex = Math.floor(Math.random() * presentFor.length)
        result.push(new Present(participant, btoa(presentFor[toIndex])))
    }
    return result
}

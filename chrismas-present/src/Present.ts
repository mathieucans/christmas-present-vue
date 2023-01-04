export class Present {
    constructor(
        public readonly from: string,
        public readonly to: string) {

    }
}

/**
 *
 * generated with ChatGPT by the following question:
 * "an algo that determine who will give a gift to another in an assembly"
 * <code>
 * # participants is a list of strings representing the names of the participants
 *
 * # Shuffle the list of participants randomly
 * shuffle(participants)
 *
 * # Iterate through the participants
 * for i, participant in enumerate(participants):
 *   # Assign the next participant in the list as the recipient of the gift
 *   recipient = participants[(i + 1) % len(participants)]
 *   assign_gift_recipient(participant, recipient)
 *  </code>
 * @param participants
 */
export function presentGenerator(participants: string[]) {
    const result = new Array<Present>();
    const shuffle = participants.sort(() => Math.random() - 0.5);
    for (let i = 0; i < shuffle.length; i++) {
        const participant = shuffle[i];
        const recipient = shuffle[(i + 1) % shuffle.length];

        result.push(new Present(participant, btoa(recipient)));
    }
    return result
}

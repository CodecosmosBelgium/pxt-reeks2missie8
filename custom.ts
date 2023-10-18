/**
 * Custom blocks
 */
//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    
    //lever0
    //setblock 28 70 268
    //lever10
    //setblock 38 70 268

    //testblock0
    //setblock 28 67 267
    //lever10
    //setblock 39 67 267
    //% block="Set lever %lever value %state"
    //% lever.min=0 lever.max=10 lever.defl=0
    export function setLever(lever: number, state: boolean): void {
        let leverRoot: Position = world(28, 70, 268);
        let testblockRoot: Position = world(28, 67, 267);

        let currentLever: Position = leverRoot.add(world(lever, 0, 0));
        let currentTestblock: Position = testblockRoot.add(world(lever, 0, 0));
        agent.teleport(currentLever.add(world(0, 0, 1)), NORTH);
        // let currentSateString = blocks.testForBlock(IRON_BLOCK, currentTestblock) ? "ON" : "OFF"
        // let desiredStateString = state ? "ON" : "OFF"
        // player.say("CURRENT LEVER STATE IS: " + currentSateString)
        // player.say("DESIRED STATE IS: " + desiredStateString);

        if (blocks.testForBlock(IRON_BLOCK, currentTestblock) != state) {
            agent.interact(FORWARD);
        }
    }
}

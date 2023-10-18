/**
 * Custom blocks
 */

enum lever_state{
    //% block="aan"
    ON,
    //% block="uit"
    OFF
}

//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    
    let currentLever = 0;
    //% block="Zet klaar"
    export function setup_intro(){
        currentLever = 0;
    }

    //% block="volgende schakelaar"
    export function next_lever(){
        if(currentLever < 11){
            currentLever++;
        }
    }

    //% block="stel schakelaar in op %state"
    //% state.defl=lever_state.OFF
    export function set_current_lever(state: lever_state){
        set_lever(currentLever, state == lever_state.ON);
    }

    //% block="Set lever %lever value %state"
    //% lever.min=0 lever.max=10 lever.defl=0
    export function set_lever(lever: number, state: boolean): void {
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

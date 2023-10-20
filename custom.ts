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
    
    let currentLeverId = 0;
    //% block="Zet klaar"
    export function setup_intro(){
        currentLeverId = 0;
        //clone 28 68 273  38 68 273  28 70 268
        blocks.clone(world(28, 68, 273), world(38, 68, 273), world(28, 70, 268), CloneMask.Replace, CloneMode.Normal)
    }

    //% block="volgende schakelaar"
    export function next_lever(){
        if (currentLeverId < 11){
            currentLeverId++;
        }
    }

    //% block="stel schakelaar in op %state"
    //% state.defl=lever_state.OFF
    export function set_current_lever(state: lever_state){
        set_lever(currentLeverId, state == lever_state.ON);
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

    function is_block_present(block: Block): boolean{
        let leverRoot: Position = world(28, 70, 268);
        let currentLever: Position = leverRoot.add(world(currentLeverId, 0, 0)).add(world(0, 0, -1));

        for (let i = 0; i < 4; i++) {
            if (blocks.testForBlock(block, currentLever.add(world(0, i, 0)))) {
                return true;
            }
        }
        return false;
    }

    //% block="is hout"
    export function is_wood(): boolean{
       return is_block_present(PLANKS_OAK);
    }

    //% block="is baksteen"
    export function is_brick(): boolean {
        return is_block_present(BRICKS)
    }

    //% block="is keisteen"
    export function is_cobblestone(): boolean {
        return is_block_present(COBBLESTONE);
    }

}

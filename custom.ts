/**
 * Custom blocks
 */
//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    
    //setblock 39 68 267
    //setblock 29 68 267
    //% block="Set lever %lever value %state"
    //% lever.min=0 lever.max=10 lever.defl=0
    export function setLever(lever: number, state: boolean): void{
        let leverRoot : Position = world(29, 68, 267);
        let currentLever: Position = leverRoot.add(world(lever, 0, 0));
        agent.teleport(leverRoot.add(world(lever, 0, 0)), NORTH);
        if(blocks.testForBlock(IRON_BLOCK, currentLever) == state){
            agent.interact(FORWARD);
        }
    }
}

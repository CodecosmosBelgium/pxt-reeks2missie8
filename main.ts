player.onChat("level1", function () {
    while (CodeCosmos.test_for_block_under_agent(FARMLAND)) {
        agent.move(FORWARD, 1)
        agent.destroy(FORWARD)
    }
})
player.onChat("intro", function () {
    CodeCosmos.setup_intro()
    for (let index = 0; index < 10; index++) {
        if (!(CodeCosmos.is_brick()) && (CodeCosmos.is_cobblestone() && CodeCosmos.is_wood())) {
            CodeCosmos.set_current_lever(lever_state.ON)
        } else {
            CodeCosmos.set_current_lever(lever_state.OFF)
        }
    }
})

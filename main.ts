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

### @hideIteration true
### @flyoutOnly true
# level 1
```blocks
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

```

```template
player.onChat("level1", function () {
CodeCosmos.setup_level1()
while(true){
}
})
```

## Hacking the door

Use the learning platform to solve the exercise.

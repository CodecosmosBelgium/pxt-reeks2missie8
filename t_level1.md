### @hideIteration true
### @flyoutOnly true
# level 1
```blocks
player.onChat("level1", function () {
    while (CodeCosmos.test_for_block_under_agent(FARMLAND)) {
        agent.move(FORWARD, 1)
        agent.destroy(FORWARD)
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

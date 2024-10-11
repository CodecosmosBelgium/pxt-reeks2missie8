### @hideIteration true
### @flyoutOnly true
# level 3
```blocks
player.onChat("level3", function () {
    CodeCosmos.setup_level3()
    while (CodeCosmos.test_for_block_under_agent(FARMLAND)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        if (CodeCosmos.test_for_block_in_front_of_agent(WATER) && CodeCosmos.test_for_block_left_of_agent(WATER)) {
            agent.turn(RIGHT_TURN)
        }
        if (CodeCosmos.test_for_block_in_front_of_agent(WATER) && CodeCosmos.test_for_block_right_of_agent(WATER)) {
            agent.turn(LEFT_TURN)
        }
    }
})
```

```template
player.onChat("level3", function () {
    CodeCosmos.setup_level3()
})
```

## Level 2

Use the learning platform to solve the exercise.

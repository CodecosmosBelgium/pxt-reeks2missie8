### @hideIteration true
### @flyoutOnly true
# level 2
```blocks
player.onChat("level1", function () {
    CodeCosmos.setup_level1()
    while (CodeCosmos.test_for_block_under_agent(FARMLAND)) {
        agent.move(FORWARD, 1)
        agent.destroy(FORWARD)
        if (CodeCosmos.test_for_block_left_of_agent(WATER)) {
            agent.turn(RIGHT_TURN)
        }
        if (CodeCosmos.test_for_block_right_of_agent(GRASS)) {
            agent.turn(LEFT_TURN)
        }
    }
})
```

```template
player.onChat("level1", function () {
    CodeCosmos.setup_level1()
    while (CodeCosmos.test_for_block_under_agent(FARMLAND)) {
        agent.move(FORWARD, 1)
        agent.destroy(FORWARD)
        if (CodeCosmos.test_for_block_left_of_agent(WATER)) {
            agent.turn(RIGHT_TURN)
        }
        if (CodeCosmos.test_for_block_right_of_agent(GRASS)) {
            agent.turn(LEFT_TURN)
        }
    }
})
```

## Level 2

Use the learning platform to solve the exercise.

let acc_Y = 0
let acc_X = 0
let pos_x = 2
let pos_y = 2
basic.forever(function () {
    acc_X = input.acceleration(Dimension.X)
    acc_Y = input.acceleration(Dimension.Y)
    if (acc_X > 100 && pos_x < 4) {
        pos_x += 1
    }
    if (acc_X < -100 && pos_x > 0) {
        pos_x += -1
    }
    if (acc_Y > 100 && pos_y < 4) {
        pos_y += 1
    }
    if (acc_Y < -100 && pos_y > 0) {
        pos_y += -1
    }
    basic.clearScreen()
    led.plot(pos_x, pos_y)
})

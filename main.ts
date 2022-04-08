input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    basic.showString("GO!")
    variable = randint(5, 10)
    while (variable > 0) {
        variable += -1
        basic.showIcon(IconNames.Asleep)
        basic.pause(1000)
    }
    if (variable == 8) {
        basic.showIcon(IconNames.Chessboard)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Chessboard)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Chessboard)
    } else {
        basic.showIcon(IconNames.Happy)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Happy)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Happy)
    }
})
let variable = 0
basic.showString("Hello!")
basic.forever(function () {
	
})

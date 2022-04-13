input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    range = strip2.range(0, 4)
    range2 = strip2.range(4, 10)
    range3 = strip2.range(10, 15)
    basic.pause(1000)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range3.showColor(neopixel.colors(NeoPixelColors.Green))
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
        strip2.showColor(neopixel.colors(NeoPixelColors.Violet))
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
    basic.pause(1000)
    strip2.showColor(neopixel.colors(NeoPixelColors.Violet))
    basic.pause(1000)
    strip2.showColor(neopixel.colors(NeoPixelColors.Black))
})
let variable = 0
let range3: neopixel.Strip = null
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let strip2: neopixel.Strip = null
basic.showString("Hello!")
strip2 = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip2.showColor(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
for (let index = 0; index < 500; index++) {
    strip2.rotate(1)
    strip2.show()
    basic.pause(100)
}
strip2 = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip2.showColor(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))

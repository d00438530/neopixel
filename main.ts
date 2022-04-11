input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
    for (let index = 0; index < 15; index++) {
        strip.show()
        strip.rotate(1)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.setPixelColor(0, neopixel.rgb(165, 135, 245))
    strip.setPixelColor(1, neopixel.rgb(4, 184, 0))
    strip.setPixelColor(2, neopixel.rgb(49, 0, 184))
    strip.setPixelColor(3, neopixel.rgb(0, 206, 209))
    strip.setPixelColor(4, neopixel.rgb(225, 89, 143))
    strip.setPixelColor(5, neopixel.rgb(32, 64, 31))
    strip.setPixelColor(6, neopixel.rgb(184, 0, 156))
    strip.setPixelColor(7, neopixel.rgb(156, 39, 6))
    strip.setPixelColor(8, neopixel.rgb(225, 225, 0))
    strip.setPixelColor(9, neopixel.rgb(225, 108, 180))
    strip.setPixelColor(10, neopixel.rgb(100, 149, 207))
    strip.setPixelColor(11, neopixel.rgb(243, 188, 6))
    strip.setPixelColor(12, neopixel.rgb(21, 178, 211))
    strip.setPixelColor(13, neopixel.rgb(35, 110, 150))
    strip.setPixelColor(14, neopixel.rgb(225, 160, 16))
    strip.show()
    for (let index = 0; index < 14; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(1000)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)

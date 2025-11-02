let Crash = 0
OLED.init(128, 64)
OLED.clear()
OLED.writeStringNewLine("No Crash Detected ")
pins.digitalWritePin(DigitalPin.P8, 0)
let lastCrash = 0
basic.forever(function () {
    Crash = pins.digitalReadPin(DigitalPin.P0)
    if (Crash != lastCrash) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        OLED.clear()
        OLED.writeStringNewLine("!!!Crash Detected")
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(200)
    } else {
        OLED.clear()
        OLED.writeStringNewLine("No Crash Detected")
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
    }
})

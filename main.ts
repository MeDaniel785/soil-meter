let reading = 0
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
basic.showIcon(IconNames.Happy)
led.setBrightness(64)
basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showString("Temp:")
        basic.showNumber(input.temperature())
        basic.showString("°C")
    }
    if (input.isGesture(Gesture.Shake)) {
        led.setBrightness(64)
    }
    if (input.buttonIsPressed(Button.B)) {
        led.setBrightness(0)
    }
    reading = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    reading,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
        basic.pause(2000)
    }
})

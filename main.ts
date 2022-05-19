radio.onReceivedString(function (receivedString) {
    let receiveNumber = 0
    led.plotBarGraph(
    receiveNumber,
    256
    )
})
basic.showString("E1")
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(input.rotation(Rotation.Pitch))
})

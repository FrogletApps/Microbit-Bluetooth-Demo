input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(2000)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
radio.setGroup(1)
basic.showIcon(IconNames.Yes)

datalogger.setColumnTitles(
"Acceleration",
"light level",
"compass heading",
"magnetism",
"sound level",
"temperature"
)
basic.forever(function () {
    basic.pause(2000)
    datalogger.log(
    datalogger.createCV("Acceleration", input.acceleration(Dimension.X)),
    datalogger.createCV("light level", input.lightLevel()),
    datalogger.createCV("compass heading", input.compassHeading()),
    datalogger.createCV("magnetism", input.magneticForce(Dimension.X)),
    datalogger.createCV("sound level", input.soundLevel()),
    datalogger.createCV("temperature", input.temperature())
    )
})

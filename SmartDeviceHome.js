const commands = [
    { type: "audio", name: "turn down volume", active: true },
    { type: "audio", name: "turn up volume", active: true },
    { type: "music", name: "next song", active: true },
    { type: "music", name: "previous song", active: true },
    { type: "music", name: "purchase song", active: false }, // payment integration still in beta
    { type: "channel", name: "channel up", active: true },
    { type: "channel", name: "channel down", active: true },
    { type: "temperature", name: "raise temperature", active: true },
    { type: "temperature", name: "lower temperature", active: true },
    { type: "shredding", name: "turn on", active: true },
];

const devices = [
    { id: "Television", capabilities: ["audio", "channel"] },
    { id: "Smart thermostat", capabilities: ["temperature"] },
    { id: "Stereo system", capabilities: ["audio", "music"] },
    { id: "Kitchen sink", capabilities: [] },
    { id: "Paper shredder", capabilities: ["shredding"] },
];

function listCommands(deviceId) {
    devices.forEach(device => {
        if (device.id === deviceId) {
            commands.forEach(command => {
                if (device.capabilities.includes(command.type) && command.active === true) {
                    console.log(command.name)
                    return command.name
                }
            })
        }
    })
}

function checkValid(commandName, deviceId) {

    commands.forEach(command => {
        devices.forEach(device => {
            if (command.name.includes(commandName) && device.id === deviceId) {
                return true
            } else {
                return false
            }
        })
    })

}

listCommands('Stereo system')
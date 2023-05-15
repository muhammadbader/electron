const {BrowserWindow} = require('electron')

const func = async () => {
    const response = await window.versions.ping()
    // you won't see the logs as it print in the renderer not the main process
    console.log(response) // prints out 'pong'
}

func()

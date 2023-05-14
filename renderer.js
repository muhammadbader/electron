const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), \nNode.js (v${versions.node()}), \nand Electron (v${versions.electron()})`

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
}

func()
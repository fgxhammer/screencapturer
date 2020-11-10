
// Html elements
const { desktopCapturer, remote } = require('electron')
const { Menu } = remote
const videoElement = document.getElementById('video')
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const videoSelectBtn = document.getElementById('videoSelectBtn')

const selectSource = async (source) => {
  videoSelectBtn.innterText = source.name

  const constraints = {
    audio: false,
    video: {
      mandatory: {
        chromeMediaSource: 'desktop',
        chromeMediaSourceId: source.id
      }
    }
  }

  const stream = await navigator.mediaDevices.getUserMedia(constraints)

  videoElement.srcObject = stream
  videoElement.play
}

const getVideoResources = async () => {
  const inputSources = await desktopCapturer.getSources({
    types: ['window', 'screen']
  })
  
  const videoOptionsMenu = Menu.buildFromTemplate(
    inputSources.map(source => {
      return {
        label: source.name,
        click: () => selectSource(source)
      }
    })
    )

    videoOptionsMenu.popup()
  }

videoSelectBtn.onclick = getVideoResources
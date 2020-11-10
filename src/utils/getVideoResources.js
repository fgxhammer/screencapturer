const { desktopCapturer, remote } = require('electron')
const { Menu } = remote

const getVideoResources = async () => {
  const inputSources = await desktopCapturer.getSources({
    types: ['window', 'screen']
  })
  
  const videoOptionsMenu = Menu.buildFromTemplate(
    inputSources.map(source => {
      return {
        label: source.name,
        click: () => selectSource()
      }
    })
    )

    videoOptionsMenu.popup()
  }

module.exports = {
  getVideoResources
}
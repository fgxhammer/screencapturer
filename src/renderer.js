
// Html elements
const videoElement = document.getElementById('video')
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const videoSelectBtn = document.getElementById('videoSelectBtn')
const { getVideoResources } = require('./utils/getVideoResources')

videoSelectBtn.onclick = getVideoResources
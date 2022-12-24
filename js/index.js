//default import
import Controls from "./controls.js"

//named import, essa opção é usada quando tem mais de uma função de outro módulo a ser importada.
import Timer from "./timer.js"
import Events from "./events.js"
import {  
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay,
 } from "./elements.js"
import Sound from "./sounds.js"


const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()

Events({ controls, timer, sound })



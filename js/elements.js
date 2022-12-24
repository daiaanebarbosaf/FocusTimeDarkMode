//pegando a classe que configura o botão Play
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay =document.querySelector('.seconds')

const buttonForest = document.querySelector('.forest')
const svgIconForest = document.querySelector('.color-forest')

const buttonRain = document.querySelector('.rain')
const svgIconRain = document.querySelector('.color-rain')

const buttonCoffeeShop = document.querySelector('.coffee-shop')
const svgIconCoffeeShop = document.querySelector('.color-coffee-shop')

const buttonFireplace = document.querySelector('.fireplace')
const svgIconFireplace = document.querySelector('.color-fireplace')

const addTime = document.querySelector('.add')
const removeTime = document.querySelector('.remove-minutes')


const volumeForest = document.querySelector("#volume-forest")
const volumeRain = document.querySelector("#volume-rain")
const volumeCoffeeShop = document.querySelector("#volume-coffee-shop")
const volumeFireplace = document.querySelector("#volume-fireplace")

const toggleDefault = document.querySelector("#toggle-default")
const toggleDark = document.querySelector("#toggle-dark")

const body = document.querySelector("body")
const span = document.querySelector(".two-points")

const svgPlay = document.querySelector(".play-svg")
const svgPause = document.querySelector(".pause-svg")
const svgStop = document.querySelector(".stop-svg")
const svgSet = document.querySelector(".set-svg")
const svgButtonAdd = document.querySelector(".button-add-svg")
const svgRemoveMinutes = document.querySelector(".button-remove-minutes-svg")

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")



export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,

  buttonForest,
  svgIconForest,
  buttonRain,
  svgIconRain,
  buttonCoffeeShop,
  svgIconCoffeeShop,
  buttonFireplace,
  svgIconFireplace,

  addTime,
  removeTime,

  volumeForest,
  volumeRain,
  volumeCoffeeShop,
  volumeFireplace,

  toggleDefault,
  toggleDark,
  body,
  span,

  svgPlay,
  svgPause,
  svgStop,
  svgSet,
  svgButtonAdd,
  svgRemoveMinutes,

  html,
  checkbox
 }
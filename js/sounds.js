import {  
  volumeForest,
  volumeRain,
  volumeCoffeeShop,
  volumeFireplace
 } from "./elements.js"

export default function () {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const bgAudioFlorest = new Audio("./soungs-wav/florest.wav")
  const bgAudioRain = new Audio("./soungs-wav/rain.wav")
  const bgAudioCoffeShop = new Audio("./soungs-wav/coffee-shop.wav")
  const bgAudioFireplace = new Audio("./soungs-wav/fireplace.wav")

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function setVolume() {
    bgAudioFlorest.volume = volumeForest.value
    bgAudioRain.volume = volumeRain.value
    bgAudioCoffeShop.volume = volumeCoffeeShop.value
    bgAudioFireplace.volume = volumeFireplace.value
  }

  function controlVolume() {
    volumeForest.value = value / 100
    volumeRain.value = value / 100
    volumeCoffeeShop.value = value / 100
    volumeFireplace.value = value / 100
  }

  bgAudioFlorest.loop = true
  bgAudioRain.loop = true
  bgAudioCoffeShop.loop = true
  bgAudioFireplace.loop = true

  return {
    pressButton,
    timeEnd,
    bgAudioFlorest,
    bgAudioRain,
    bgAudioCoffeShop,
    bgAudioFireplace,

    setVolume, 
    volumeForest, 
    controlVolume
  }
}
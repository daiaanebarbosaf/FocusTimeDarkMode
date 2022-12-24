import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,

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
  minutesDisplay,
  span,
  secondsDisplay,
  svgPlay,
  svgPause,
  svgStop,
  svgSet,
  svgButtonAdd,
  svgRemoveMinutes,

  hoverCards

} from "./elements.js"


export default function ({ controls, timer, sound }){

  addTime.addEventListener('click', function(){
    timer.addMinutes()
  })

  removeTime.addEventListener('click', function(){
    timer.removeMinutes()
  })

  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function(){
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonSet.addEventListener('click', function() {
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    sound.pressButton()
  })

  buttonSet.addEventListener('click', function(){
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return 
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  

  buttonForest.addEventListener('click', function(){
    sound.bgAudioFlorest.play()
    svgIconForest.style.fill = '#E1E1E6'
    buttonForest.style.background = '#0A3442'
    
  })

  buttonForest.addEventListener('dblclick', function(){
    sound.bgAudioFlorest.pause()
    svgIconForest.style.fill = '#FFFFFF'
    buttonForest.style.background = 'rgba(41, 41, 46, 1)'

  })

  buttonRain.addEventListener('click', function(){
    sound.bgAudioRain.play()
    svgIconRain.style.fill = '#E1E1E6'
    buttonRain.style.background = '#0A3442'
  })

  buttonRain.addEventListener('dblclick', function(){
    sound.bgAudioRain.pause()
    svgIconRain.style.fill = '#FFFFFF'
    buttonRain.style.background = 'rgba(41, 41, 46, 1)'
  })

  buttonCoffeeShop.addEventListener('click', function(){
    sound.bgAudioCoffeShop.play()
    svgIconCoffeeShop.style.fill = '#E1E1E6'
    buttonCoffeeShop.style.background = '#0A3442'
  })

  buttonCoffeeShop.addEventListener('dblclick', function(){
    sound.bgAudioCoffeShop.pause()
    svgIconCoffeeShop.style.fill = '#FFFFFF'
    buttonCoffeeShop.style.background = 'rgba(41, 41, 46, 1)'
  })

  buttonFireplace.addEventListener('click', function(){
    sound.bgAudioFireplace.play()
    svgIconFireplace.style.fill = '#E1E1EF'
    buttonFireplace.style.background = '#0A3442'
  })

  buttonFireplace.addEventListener('dblclick', function(){
    sound.bgAudioFireplace.pause()
    svgIconFireplace.style.fill = '#FFFFFF'
    buttonFireplace.style.background = 'rgba(41, 41, 46, 1)'
  })
  
  volumeForest.oninput = () => sound.setVolume(volumeForest.value)
  volumeRain.oninput = () => sound.setVolume(volumeRain.value)
  volumeCoffeeShop.oninput = () => sound.setVolume(volumeCoffeeShop.value)
  volumeFireplace.oninput = () => sound.setVolume(volumeFireplace.value)

  
  toggleDefault.addEventListener('click', function(){

    sound.bgAudioFlorest.pause()
    sound.bgAudioRain.pause()
    sound.bgAudioCoffeShop.pause()
    sound.bgAudioFireplace.pause()

    toggleDark.classList.remove('hide')
    toggleDefault.classList.add('hide')
    body.style.background = 'black'
    minutesDisplay.style.color = 'white'
    span.style.color = 'white'
    secondsDisplay.style.color = 'white'
    buttonPlay.style.color = 'white'
    svgPlay.style.fill = 'white'
    svgPause.style.fill = 'white'
    svgStop.style.fill = 'white'
    svgSet.style.fill = 'white'
    svgButtonAdd.style.fill = 'white'
    svgRemoveMinutes.style.fill = 'white'

    buttonForest.style.background = 'rgba(41, 41, 46, 1)'
    buttonRain.style.background = 'rgba(41, 41, 46, 1)'
    buttonCoffeeShop.style.background = 'rgba(41, 41, 46, 1)'
    buttonFireplace.style.background = 'rgba(41, 41, 46, 1)'

    svgIconForest.style.fill = '#E1E1E6'
    svgIconRain.style.fill = '#E1E1E6'
    svgIconCoffeeShop.style.fill = '#E1E1E6'
    svgIconFireplace.style.fill = '#E1E1E6'

    buttonForest.addEventListener('click', function(){
      svgIconForest.style.fill = '#FFFFFF'
      buttonForest.style.background = '#0A3442'
      
    })
  
    buttonForest.addEventListener('dblclick', function(){
      svgIconForest.style.fill = '#FFFFFF'
      buttonForest.style.background = 'rgba(41, 41, 46, 1)'
  
    })
  
    buttonRain.addEventListener('click', function(){
      svgIconRain.style.fill = '#FFFFFF'
      buttonRain.style.background = '#0A3442'
    })
  
    buttonRain.addEventListener('dblclick', function(){
      svgIconRain.style.fill = '#FFFFFF'
      buttonRain.style.background = 'rgba(41, 41, 46, 1)'
    })
  
    buttonCoffeeShop.addEventListener('click', function(){
      svgIconCoffeeShop.style.fill = '#FFFFFF'
      buttonCoffeeShop.style.background = '#0A3442'
    })
  
    buttonCoffeeShop.addEventListener('dblclick', function(){
      svgIconCoffeeShop.style.fill = '#FFFFFF'
      buttonCoffeeShop.style.background = 'rgba(41, 41, 46, 1)'
    })
  
    buttonFireplace.addEventListener('click', function(){
      svgIconFireplace.style.fill = '#FFFFFF'
      buttonFireplace.style.background = '#0A3442'
    })
  
    buttonFireplace.addEventListener('dblclick', function(){
      svgIconFireplace.style.fill = '#FFFFFF'
      buttonFireplace.style.background = 'rgba(41, 41, 46, 1)'
    })

  })

  toggleDark.addEventListener('click', function(){
    sound.bgAudioFlorest.pause()
    sound.bgAudioRain.pause()
    sound.bgAudioCoffeShop.pause()
    sound.bgAudioFireplace.pause()


    toggleDefault.classList.remove('hide')
    toggleDark.classList.add('hide')
    body.style.background = 'white'
    minutesDisplay.style.color = '#323238'
    span.style.color = '#323238'
    secondsDisplay.style.color = '#323238'
    svgPlay.style.fill = '#323238'
    svgPause.style.fill = '#323238'
    svgStop.style.fill = '#323238'
    svgSet.style.fill = '#323238'
    svgButtonAdd.style.fill = '#323238'
    svgRemoveMinutes.style.fill = '#323238'

    buttonForest.style.background = '#E1E1E6'
    buttonRain.style.background = '#E1E1E6'
    buttonCoffeeShop.style.background = '#E1E1E6'
    buttonFireplace.style.background = '#E1E1E6'

    svgIconForest.style.fill = '#323238'
    svgIconRain.style.fill = '#323238'
    svgIconCoffeeShop.style.fill = '#323238'
    svgIconFireplace.style.fill = '#323238'


    buttonForest.addEventListener('click', function(){
      sound.bgAudioFlorest.play()
      svgIconForest.style.fill = '#FFFFFF'
      buttonForest.style.background = '#02799D'
      
    })
  
    buttonForest.addEventListener('dblclick', function(){
      sound.bgAudioFlorest.pause()
      svgIconForest.style.fill = '#323238'
      buttonForest.style.background = '#E1E1E6'
  
    })

    buttonRain.addEventListener('click', function(){
      sound.bgAudioRain.play()
      svgIconRain.style.fill = '#FFFFFF'
      buttonRain.style.background = '#02799D'
    })
  
    buttonRain.addEventListener('dblclick', function(){
      sound.bgAudioRain.pause()
      svgIconRain.style.fill = '#323238'
      buttonRain.style.background = '#E1E1E6'
    })

    buttonCoffeeShop.addEventListener('click', function(){
      sound.bgAudioCoffeShop.play()
      svgIconCoffeeShop.style.fill = '#FFFFFF'
      buttonCoffeeShop.style.background = '#02799D'
    })
  
    buttonCoffeeShop.addEventListener('dblclick', function(){
      sound.bgAudioCoffeShop.pause()
      svgIconCoffeeShop.style.fill = '#323238'
      buttonCoffeeShop.style.background = '#E1E1E6'
    })

    buttonFireplace.addEventListener('click', function(){
      sound.bgAudioFireplace.play()
      svgIconFireplace.style.fill = '#FFFFFF'
      buttonFireplace.style.background = '#02799D'
    })
  
    buttonFireplace.addEventListener('dblclick', function(){
      sound.bgAudioFireplace.pause()
      svgIconFireplace.style.fill = '#323238'
      buttonFireplace.style.background = '#E1E1E6'
    })
    
  })

}

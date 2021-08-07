// console.log('Tamagotchi');

const name = []
alert('To begin, give your Pikagotchi a name!')

class Tamagotchi {
  constructor(name, age){
  this.name = name
  this.age = 0
  this.hunger = 0
  this.sleepiness = 0
  this.boredom = 0
  this.dead = false
}
feedTama(){
    this.hunger--
  if(this.hunger >= 0){
    this.hunger--
  }else{
    this.hunger = 0
  }
}
playWithTama(){
  // movePet
  this.boredom--
  if(this.boredom >= 0){
    this.boredom--
  }else{
    this.boredom = 0
  }
}
tamaSleep(){
  this.sleepiness--
  if(this.sleepiness >= 0){
    this.sleepiness--
  }else{
    this.sleepiness = 0
  }
}
increaseAge(){
  return setInterval(()=>{
    const timerElement = document.querySelector('#age')
          this.age++
          timerElement.innerHTML = `${this.age}`
  },5000)
}
increaseHunger(){
  return setInterval(()=>{
    const timerElement = document.querySelector('#hunger')
          this.hunger++
          timerElement.innerHTML = `${this.hunger}`
  },3000)
}
increaseSleepiness(){
  return setInterval(()=>{
    const timerElement = document.querySelector('#sleepiness')
          this.sleepiness++
          timerElement.innerHTML = `${this.sleepiness}`
  },4000)
}
increaseBoredom(){
  return setInterval(()=>{
    const timerElement = document.querySelector('#boredom')
          this.boredom++
          timerElement.innerHTML = `${this.boredom}`
  },2000)
}
death(){
    this.dead = true;
    let pikaPik = document.querySelector('#pika')
        pikaPik.setAttribute('src', 'https://ci.memecdn.com/4257541.jpg')
    clearInterval(game.intervalID)
    clearInterval(game.hungerTimer)
    clearInterval(game.ageTimer)
    clearInterval(game.sleepinessTimer)
    clearInterval(game.boredomTimer)
}
morph(){
  document.getElementById('pika').setAttribute('src', 'images/026-01.png')
  }
}
const newTama = new Tamagotchi('tama1')
const moveAround = ()=>{
    setInterval(()=>{
      let l = Math.ceil(Math.random()*30);
      let t = Math.ceil(Math.random()*30);
      document.getElementById('pika').style.left = `${l}%`
      document.getElementById('pika').style.top = `${t}`
    },1000)
}

// game logic
const game = {
  time: 0,
  intervalID: null,
  startTime(){
    if(newTama.hunger === 10){
      newTama.death()
      // clearInterval(game.intervalID)
    }else if(newTama.sleepiness === 10){
      newTama.death()
      // clearInterval(game.intervalID)
    }else if(newTama.boredom === 10){
      newTama.death()
      // clearInterval(game.intervalID)
    }else if(newTama.age === 5){
      newTama.morph()
      // console.log('debug morph');
    }
  }
}
// console.log(newTama);

// event listeners
let form = document.getElementById('name-button')
    form.addEventListener('click', (event)=>{
      event.preventDefault()
let submitName = document.getElementById('add-name').value;
    document.querySelector('h1').innerHTML = `${submitName}`
    game.hungerTimer = newTama.increaseHunger()
    game.ageTimer = newTama.increaseAge()
    game.boredomTimer = newTama.increaseBoredom()
    game.sleepinessTimer = newTama.increaseSleepiness()
    game.intervalID = setInterval(()=>{
      game.startTime()
    },1000)
})

let button = document.getElementById('Feed')
    button.addEventListener('click', (event)=>{
      event.preventDefault()
      newTama.feedTama()
})

let button1 = document.getElementById('Sleep')
    button1.addEventListener('click', (event)=>{
      event.preventDefault()
      newTama.tamaSleep()
      let nightTime = document.querySelector('#screen')
          nightTime.style.backgroundImage = "url('https://cdn.wallpapersafari.com/20/78/o1imlV.jpg')"
      let textColor = document.querySelector('#metrics')
          textColor.style.color = 'white'
})

let button2 = document.getElementById('Play')
    button2.addEventListener('click', (event)=>{
      event.preventDefault()
      newTama.playWithTama()
      moveAround()
})





//

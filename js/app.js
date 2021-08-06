// console.log('Tamagotchi');

const name = []
alert('To begin, give your Tamagotchi a name!')

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
}
playWithTama(){
  this.boredom--
}
tamaSleep(){
  this.sleepiness--
}
increaseAge(){
  setInterval(()=>{
    const timerElement = document.querySelector('#age')
          timerElement.innerHTML = `${this.age}`
          this.age++
  },9000)
}
increaseHunger(){
  setInterval(()=>{
    const timerElement = document.querySelector('#hunger')
          timerElement.innerHTML = `${this.hunger}`
          this.hunger++
  },3000)
}
increaseSleepiness(){
  setInterval(()=>{
    const timerElement = document.querySelector('#sleepiness')
          timerElement.innerHTML = `${this.sleepiness}`
          this.sleepiness++
  },4000)
}
increaseBoredom(){
  setInterval(()=>{
    const timerElement = document.querySelector('#boredom')
          timerElement.innerHTML = `${this.boredom}`
          this.boredom++
  },2000)
}
death(){
  this.alive = false
  clearInterval()
}
morph(){

}
}
const newTama = new Tamagotchi('tama1')

// const moveAround = document.querySelector('#Play')
//       moveAround.addEventListener('click', (event)=>{
//         tamaPet.setAttribute('src', '')
//
//       })

// const nightTime = document.querySelector('#Sleep')
//       nightTime = addEventListener('click', (event)=>{
//         let nightBackground = document.querySelector('screen')
//             document.style.backgroundImage = ''
//       })


// game logic
const game = {
  time: 0,
  startTime(){
    if(this.hunger === 10){
      clearInterval()
      newTama.death()
    }
    if(this.sleepiness === 10){
      newTama.death()
      clearInterval()
    }
    if(this.boredom === 10){
      newTama.death()
      clearInterval()
    }
    if(this.age 2){
      newTama.morph()
    }else{
    newTama.increaseHunger()
    newTama.increaseAge()
    newTama.increaseBoredom()
    newTama.increaseSleepiness()
    }
  }
}

console.log(newTama);

// event listeners
let form = document.getElementById('name-button')
    form.addEventListener('click', (event)=>{
      event.preventDefault()
let submitName = document.getElementById('add-name').value;
    document.querySelector('h1').innerHTML = `${submitName}`
    game.startTime()
})

let button = document.getElementById('Feed')
    button.addEventListener('click', (event)=>{
      event.preventDefault()
      newTama.feedTama()
      // game.updateNum()
})

let button1 = document.getElementById('Sleep')
    button1.addEventListener('click', (event)=>{
      event.preventDefault()
      newTama.tamaSleep()
})

let button2 = document.getElementById('Play')
    button2.addEventListener('click', (event)=>{
      event.preventDefault()
      newTama.playWithTama()
})



















































//

// console.log('Tamagotchi');

const name = []
// alert('To begin, give your Tamagotchi a name!')

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
  setInterval(()=>{
    const timerElement = document.querySelector('#age')
    this.age++
          timerElement.innerHTML = `${this.age}`
  },7000)
}
increaseHunger(){
  setInterval(()=>{
    const timerElement = document.querySelector('#hunger')
          this.hunger++
          timerElement.innerHTML = `${this.hunger}`
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
  this.dead = true
  if(this.dead = true){
    clearInterval()
  }
}
morph(){

}
morph2(){

}
}
const newTama = new Tamagotchi('tama1')

// const char1Move = document.querySelector('#Play')
//       char1Move.addEventListener('click', (event)=>{
//         let charmander1 = document.querySelector('#char1')
//         charmander1.setAttribute('src', 'Tamagotchi-mini-project/images/Charizard.png')
// })

// const nightTime = document.querySelector('#Sleep')
//       nightTime = addEventListener('click', (event)=>{
//         let nightBackground = document.querySelector('screen')
//             document.body.style.backgroundImage = ''
//       })


// game logic
const game = {
  time: 0,
  startTime(){
    if(this.hunger === 10){
      newTama.death()
      // clearInterval()
    }
    if(this.sleepiness === 10){
      newTama.death()
      // clearInterval()
    }
    if(this.boredom === 10){
      newTama.death()
      // clearInterval()
    }
    if(this.age === 2){
      newTama.morph()
    }else if (this.age === 4){
      newTama.morph2()
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












// , 'Tamagotchi-mini-project/images/Charmander.gif', 'Tamagotchi-mini-project/images/Charizard.png'
















//

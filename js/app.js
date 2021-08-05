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
  let feedTime = createElement('div')
      feedTime.setAttribute('id', 'feed-tamagotchi')

  let feedTime1 = document.querySelector('#feed-tamagotchi')
}
playWithTama(){
  this.boredom--

}
tamaSleep(){
  this.sleepiness--

}
increaseAge(){
  this.age++

}
increaseHunger(){
  this.hunger++

}
increaseSleepiness(){
  this.sleepiness++

}
increaseBoredom(){
  this.boredom++

}
// death(){

// }
// morph(){

// {

}

// game logic
// const game = {
//   time: 0,
//   startTimer(){
//     this.intervalId = setInterval(()=>{
//       this.time++
//       const timeInMillisecond = this.time * 1000
//
//
//       let timerElement = document.querySelector('#time')
//           timerElement.innerHTML = ()
//
//     })
//   },
//
//
//   start(name){
//     const myTama1 = new Tamagotchi(name)
//     this.myTama = myTama1
//   }
//
// }



// event listeners
let form = document.getElementById('name-button')
    form.addEventListener('click', (event)=>{
      event.preventDefault();
let submitName = document.getElementById('add-name').value;
    document.querySelector('h1').innerHTML = `${submitName}`
})

let button = document.getElementById('Feed')
    button.addEventListener('click', (event)=>{
      event.preventDefault();
let feeding = document.getElementById('hunger').value;
    document.querySelector('.buttons').innerHTML = `${feeding}`
})

let button = document.getElementById('Sleep')
    button.addEventListener('click', (event)=>{
      event.preventDefault();
let feeding = document.getElementById('hunger').value;
    document.querySelector('.buttons').innerHTML = `${feeding}`
})

let button = document.getElementById('Play')
    button.addEventListener('click', (event)=>{
      event.preventDefault();
let feeding = document.getElementById('hunger').value;
    document.querySelector('.buttons').innerHTML = `${feeding}`
    })





















































//

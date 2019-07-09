// Your code goes here

//******** Mouseover/out:
const navLinks = document.querySelectorAll('.nav-link')
// console.log(navLinks, 'navLinks')

navLinks.forEach(a => {
  // console.log(a)
  a.addEventListener('mouseover', event => {
    console.log(`Navigation changed to white`)
    event.target.style.color = 'white'

    setTimeout( () => {
      event.target.style.color ="";
    }, 5000)
  })
})

navLinks.forEach(a => {
  // console.log(a)
  a.addEventListener('mouseout', event => {
    // console.log(`Navigation changed black`)
    event.target.style.color = '#212529'
  })
})


//******** Mouseenter: 
const header = document.querySelector('.main-navigation')

header.addEventListener('mouseenter',(event) => {
    // console.log(`Header changed to turquoise`)
    header.style.background = '	mediumturquoise'
})

//******** Keydown Select:
const main = document.querySelector('.home')
// console.log(main, 'main')

addEventListener('keydown', (event) => {
    console.log('Background changed back to white!')
     if(event.keycode == 86) {//keycode is the letter v
         main.style.background = 'white'
         console.log('The V key has been pressed')
     }
 })

//******** Wheel :

let background = document.querySelector('body');

background.addEventListener('wheel', (event) => {
    // console.log('Background changed to light peach!')
    background.style.background = '#FDDED7'
 
})

//******** Focus:

const newForm = document.querySelector('.home')

const form = document.createElement('input')
form.style.margin = "20px"

newForm.appendChild(form)

 
form.addEventListener('focus', () => {
    console.log(`form has been selected`)
    form.style.background = '#FFEBCD'
})

//******** Load: 
window.addEventListener('load', () => {
  alert(`The page has loaded`)
})

//******** Scroll: 
 const navBar = document.querySelector('.main-navigation')

 window.addEventListener('scroll', event => {
   const knownPosition = window.scrollY

   if(knownPosition > 50) {
     navBar.style.background = '#17A2B8'
   } else if( knownPosition < 50) {
    navBar.style.background = 'white'
   }
 })
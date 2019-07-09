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
    console.log(`Navigation changed black`)
    event.target.style.color = '#212529'
  })
})


//******** Mouseenter: 
const header = document.querySelector('.main-navigation')

header.addEventListener('mouseenter',(event) => {
    console.log(`Header changed to turquoise`)
    header.style.background = '	mediumturquoise'
})

//******** scroll: 
 const navBar = document.querySelector('.main-navigation')

 window.addEventListener('scroll', event => {
   const knownPosition = window.scrollY

   if(knownPosition > 50) {
     navBar.style.backgroundColor = '#17A2B8'
     console.log('window scrolled')
   } else if( knownPosition < 50) {
    navBar.style.backgroundColor = 'white'
   }
 })
// Your code goes here
//******** Mouseover/out:
let navLinks = document.querySelectorAll('.nav-link')
// console.log(navLinks, 'navLinks')

navLinks.forEach(a => {
  // console.log(a)
  a.addEventListener('mouseover', event => {
    console.log(`Navigation changed to white`)
    event.target.style.color = 'white'

    setTimeout( () => {
      event.target.style.color ="";
    }, 800)
  })
})



// //******** Mouseenter/leave: 
const header = document.querySelector('.main-navigation')

header.addEventListener('mouseenter',(event) => {
    console.log(`Header changed to turquoise`)
    header.style.background = '	mediumturquoise'
})

header.addEventListener('mouseleave',(event) => {
    console.log(`Header changed to white`)
    header.style.background = 'white'
})

//******** Mouseover/out:

// let navLinks = document.querySelectorAll('.nav a')
// let turnWhite = (color => {
//     color.style.fontColor = 'white'
// })

// navLinks.forEach(anchor => {
//     anchor.addEventListener('mouseover', event=> {
//         event.target.classList.toggle(turnWhite)
//     })
// })

let navLinks = document.querySelector('.nav-link')

navLinks.addEventListener('mouseover',(event) => {
    console.log(`Navigation changed color`)
    event.target.style.color = 'white'
    // navLinks.forEach(color => color.style.color = 'white')
}) //only home is working


navLinks.addEventListener('mouseout',(event) => {
    console.log(`Navigation changed color`)
    event.target.style.color = 'black'
    // navLinks.forEach(color => color.style.color = 'white')
}) //only home is working

//******** Mouseenter/leave: DONE
const header = document.querySelector('.main-navigation')

header.addEventListener('mouseenter',(event) => {
    console.log(`Header changed color`)
    header.style.background = '	mediumturquoise'
})

header.addEventListener('mouseleave',(event) => {
    console.log(`Header changed color`)
    header.style.background = 'white'
})



//******** Keydown Events:


//******** Wheel Events: DONE
let background = document.querySelector('.home');

background.addEventListener('wheel', (event) => {
    background.style.background = '#FDDED7'
 
})

//******** Drag/Drop Events:

//******** Load Events:

//******** Focus Events:

//******** Resize Events:

//******** Scroll Events:
 window.addEventListener('scroll', (event) => {
    document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
 })

//******** Select Events:

//******** dblClick Events: DONE
const show = document.querySelector('.home')

const hello = document.createElement('h1')
hello.style.fontColor = 'black'
hello.style.padding = '120px 0 0'
hello.textContent ='Hello Travlers!'

show.addEventListener('click', (event) => { 
    console.log(`Hello has been clicked`)
    show.prepend(hello);
})



show.addEventListener('dbclick', () => {
    console.log(`Hello has been removed`)
    hello.style.display = 'none'
})


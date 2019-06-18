
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

//******** Load Events: DONE!
window.addEventListener('load', () => {
    alert(`The page is loading`)
})


//******** Focus Events:
let focus = document.querySelectorAll('.btn')

focus.addEventListener('focus', () => {
    focus.style.borderStyle = 'dotted'
    focus.style.borderWidth = '2px'
    focus.style.borderColor = 'green'
}) 


//******** Resize Events:



//******** Scroll Events: Done!!
 window.addEventListener('scroll', () => {
    console.log('Scrolled!')
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = window.scrollY

    if(Math.ceil(scrolled) === scrollable) {
        alert('You have reached the bottom')
    }
 })

//******** Select Events:


//******** dblClick Events: DONE
const show = document.querySelector('.home')

const hello = document.createElement('h1')
hello.style.fontColor = 'black'
hello.style.padding = '120px 0 0'
hello.textContent ='Hello Travlers!'

show.addEventListener('dblclick', () => { 
    console.log(`Hello has been clicked`)
    show.prepend(hello);
    // show.classList.toggle(show.prepend(hello))

})


// want to remove



// show.addEventListener('dbclick', () => {
//     console.log(`Hello has been removed`)
//     hello.style.display = 'none'
// })


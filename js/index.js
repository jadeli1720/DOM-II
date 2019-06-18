
//******** Mouseover Events:
const header = document.querySelector('.main-navigation')
const navs = document.querySelector('.nav-link')


// Mouse Enter/Hover over events
header.addEventListener('mouseenter',(event) => {
    console.log(`Header changed color`)
    header.style.background = '	mediumturquoise'
})

navs.addEventListener('mouseover',(event) => {
    console.log(`Navigation changed color`)
    navs.style.color = 'white'
})

//Mouse leave/out events 
header.addEventListener('mouseleave',(event) => {
    console.log(`Header changed color`)
    header.style.background = 'white'
})

navs.addEventListener('mouseout',(event) => {
    console.log(`Navigation changed color`)
    navs.style.color = 'black'
})


//******** Keydown Events:


//******** Wheel Events:
let reSize = document.querySelector('body');

reSize.addEventListener('wheel', (event) => {
    reSize.style.background = 'papayawhip'
    event.preventDefault()
})
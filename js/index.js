
//******** Mouseover/out: 1/2

// let navLinks = document.querySelectorAll('.nav a')
// let turnWhite = (color => {
//     color.style.fontColor = 'white'
// })

// navLinks.forEach(anchor => {
//     anchor.addEventListener('mouseover', event=> {
//         event.target.classList.toggle(turnWhite)
//     })
// })

let navLinks = document.querySelector(".nav-link");

navLinks.addEventListener("mouseover", event => {
  console.log(`Navigation changed color`);
  event.target.style.color = "white";
  // navLinks.forEach(color => color.style.color = 'white')
}); //only home is working

navLinks.addEventListener("mouseout", event => {
  console.log(`Navigation changed color`);
  event.target.style.color = "black";
  // navLinks.forEach(color => color.style.color = 'white')
}); //only home is working

//******** Mouseenter/leave:3/4
const header = document.querySelector(".main-navigation");

header.addEventListener("mouseenter", event => {
  console.log(`Header changed color`);
  header.style.background = "	mediumturquoise";
});

header.addEventListener("mouseleave", event => {
  console.log(`Header changed color`);
  header.style.background = "white";
});

//******** Wheel Events: 5
let background = document.querySelector(".home");

background.addEventListener("wheel", event => {
  console.log("Background changed to light peach!");
  background.style.background = "#FDDED7";
});

// ******** Load Events: 6
window.addEventListener("load", () => {
  alert(`The page is loading`);
});

// ******** Scroll Events: 7
window.addEventListener("scroll", () => {
  console.log("Scrolled!");
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (Math.ceil(scrolled) === scrollable) {
    alert("You have reached the bottom");
  }
});

//******** dblClick Events: 8
const show = document.querySelector(".home");

const hello = document.createElement("h1");
hello.style.fontColor = "black";
hello.style.padding = "120px 0 0";
hello.textContent = "Hello Travlers!";

show.addEventListener("click", () => {
  console.log("Hello has been clicked");
  // show.prepend(hello);
  show.classList.toggle(show.prepend(hello));
});

// want to remove

// show.addEventListener('dbclick', () => {
//     console.log(`Hello has been removed`)
//     hello.style.display = 'none'
// })

// input

//******** focus Events: 9

const newForm = document.querySelector(".home");

const form = document.createElement("input");
form.style.margin = "20px";

newForm.appendChild(form);

form.addEventListener("focus", () => {
  console.log(`form has been selected`);
  form.style.background = "cyan";
});

//******** keydown Select: DONE
const main = document.querySelector(".destination");

addEventListener("keydown", event => {
  console.log("Background changed back to white!");
  if (event.keycode == 86) {
    //keycode is the letter v
    main.style.background = "white";
  }
});

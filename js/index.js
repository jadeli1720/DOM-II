// debug box:
//way to find values of html elements by using the rapid-fire mouse event to locate them.
function showMouseEvent(event) {
    const debugClientX = document.querySelector('.clientX')
    const debugClientY = document.querySelector('.clientY')
    const debugTarget = document.querySelector('.target')
    debugClientX.textContent = event.clientX
    debugClientY.textContent = event.clientY
    debugTarget.textContent = `${event.target.tagName} #${event.target.id}`
  }
  
  document.body.addEventListener('mousemove', event => {
    // console.log('mousemove', event)
    showMouseEvent(event)//This allows for the debug box to work
  if (event.target.tagName === 'IMG') {
      const {clientX, clientY, x, y, target} = event
      console.log(clientX, clientY, x, y, target.tagName)
      
    }  
  })

// Your code goes here

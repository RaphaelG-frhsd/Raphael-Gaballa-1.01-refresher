
 // Helper function: writes any HTML into the #out div
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet () {
  // TODO: Write your code here
  const userName = prompt('What is your name?')
  if (!userName || userName.trim() === '') {
    render(`<p>Hello there!</p>`)
    return
  }
  render(`<p>Hello ${userName}!</p>`)
}

/* 
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers () {
  // TODO: Write your code here
  const nums = prompt('Enter a list of numbers, separated by commas:')

  if (!nums || nums.trim() === '') {
    render("<p class='text-muted'>No numbers entered.</p>")
    return``
  }

  const numArray = nums
    .split(',')
    .map(num => num.trim())
    .filter(num => num !== '')
    .map(num => Number(num))
    .filter(num => Number.isFinite(num))

  if (numArray.length === 0) {
    render("<p class='text-muted'>No valid numbers entered.</p>")
    return
  }

  const sum = numArray.reduce((acc, curr) => acc + curr, 0)
  const average = sum / numArray.length

  render(`
    <p>The average of [${numArray.join(', ')}] is ${average}.</p>
    <p>Average: <strong>${average}</strong></p>
    <ul class="list-group">
      ${numArray.map(num => `<li class="list-group-item">${num}</li>`).join('')}
    </ul>
  `)
}

/* 
  Function 3 — timeOfDay()
  ------------------------- 
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay () {
  const now = new Date()
  const hour = now.getHours()

  let msg = ''

  if (hour < 12) {
    msg = 'Good morning!'
  } else if (hour < 15) {
    msg = 'Good afternoon!'
  } else if (hour < 18) {
    msg = 'Good evening!'
  } else {
    msg = 'Good night!'
  }

  render(`<p>${msg}</p>`)
}

/* 
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween () {
  // TODO: Write your code here
  const minInput = prompt('Enter the minimum number:')
  const maxInput = prompt('Enter the maximum number:')

  if (
    minInput === null ||
    maxInput === null ||
    minInput.trim() === '' ||
    maxInput.trim() === ''
  ) {
    render("<p class='text-muted'>Please enter both numbers.</p>")
    return
  }

  const min = Number(minInput)
  const max = Number(maxInput)

  if (!Number.isFinite(min) || !Number.isFinite(max) || min >= max) {
    render('<p>Please enter valid numbers, with the minimum less than the maximum.</p>')
    return
  }

  const random = Math.floor(Math.random() * (max - min + 1)) + min

  render(`<p>Random number: <strong>${random}</strong></p>`)
}

/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput () {
  // TODO: Write your code here
  render("<p class='text-muted'>Output cleared.</p>")
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)

/* 
  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Each time you press the button, the output text color cycles through a few choices (red, green, orange, etc.).
  3) Press the button to change the background color of the output box to a random color.
  4) Ask the user for a number and display that number doubled.
  
  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/

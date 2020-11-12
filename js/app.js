// ------------------------------------------------------------------------ ELEMENT SELECTORS
/**
 * @type {HTMLHeadingElement} Counter header
 */
const $counterHeader = document.querySelector('.counter')
/**
 * @type {HTMLButtonElement} '+' Button
 */
const $incrementButton = document.querySelector('.increment')
/**
 * @type {HTMLButtonElement} '-' Button
 */
const $decrementButton = document.querySelector('.decrement')
/**
 * @type {HTMLInputElement} Number Iput
 */
const $addToCounterInput = document.querySelector('.add-to-counter')



// ------------------------------------------------------------------------ EVENT HANDLERS
/**
 * 
 * @param {Event} e Click event
 */
const handleClick = (e) => {
  const incrementBy = +$addToCounterInput.value
  const currentValue = +$counterHeader.textContent

  const isAddition = [...e.target.classList].indexOf('increment') > -1

  $counterHeader.textContent = isAddition ?
    currentValue + incrementBy :
    currentValue - incrementBy

  $counterHeader.textContent < 0 ?
    $counterHeader.classList.add('negative') :
    $counterHeader.classList.remove('negative')
}



// ------------------------------------------------------------------------ EVENT LISTENERS
[$incrementButton, $decrementButton].forEach(element => {
  element.addEventListener('click', handleClick)
})

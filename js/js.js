const counterText = document.getElementById("counter");
const decreButton = document.getElementsByClassName("decrement");
const increButton = document.getElementsByClassName("increment");

let count = parseInt(counterText.textContent); //Parsing the string text into int

/* Increments the counter text by 1 */
function increment(e) {
  count += 1;
  counterText.textContent = count;
}

/* Decrements the counter text by 1 */
function decrement(e) {
  count -= 1;
  counterText.textContent = count;
}

/* Resets the counter text to 0 */
function resetCounter() {
  count = 0;
  counterText.textContent = 0;
}

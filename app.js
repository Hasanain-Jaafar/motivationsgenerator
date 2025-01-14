const paragraphOutput = document.getElementById("output");
const adviceID = document.getElementById("adviceID");
const fetchNextQuoteBtn = document.getElementById("fetchButton");
//!
// when the page loaded the default quote that will be shown
window.onload = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) throw new Error("couldn't fetch the data ");
    const data = await response.json();
    adviceID.textContent = `#${JSON.stringify(data.slip.id)}`;
    paragraphOutput.textContent = JSON.stringify(data.slip.advice);
  } catch (error) {
    paragraphOutput.textContent = "Error: " + error.message;
  }
};
// function to fetch data from API when Quote Btn clicked 
fetchNextQuoteBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) throw new Error("couldn't fetch the data ");
    const data = await response.json();
    adviceID.textContent = `#${JSON.stringify(data.slip.id)}`;
    paragraphOutput.textContent = JSON.stringify(data.slip.advice);
  } catch (error) {
    paragraphOutput.textContent = "Error: " + error.message;
  }
});
//!

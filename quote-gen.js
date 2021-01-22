const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
const inputBox = document.getElementById("quoteInput");
const dropDown = document.querySelector(".dropdown-content");

let apiQuotes = [];
let apiCategories = [];

let listOfCat = categories.sort();
let currentFocus = -1;
let quoteBtn = false;
let selection = null;

// Get filtered array from selected option from
// Used to filter array from array of quotes on local storage
const getFilteredQuote = (category) => {
  let resultFilter = quotes.filter(
    (el) => el.tag.toLowerCase() === category.toLowerCase()
  );

  if (resultFilter.length === 0) {
    apiQuotes = quotes;
  } else {
    apiQuotes = resultFilter;
  }
  newQuote();
};

// Show loading
const loading = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

// Hide loading
const complete = () => {
  loader.hidden = true;
  quoteContainer.hidden = false;
};

// Show new quote
async function newQuote() {
  loading();

  let quote;

  if (quoteBtn) {
    inputBox.value = "";
    quoteBtn = false;
    removeBackgroundColors();
  }

  if (selection) {
    const apiUrlQuotes = `https://goquotes-api.herokuapp.com/api/v1/all?type=tag&val=${selection}`;

    try {
      const response = await fetch(apiUrlQuotes);
      let apiResponse = await response.json();
      apiQuotes = apiResponse.quotes;
      // Pick a random quote from apiQuotes array
      quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    } catch (error) {
      // If an error in connection occurs, default quotes hardcoded file and print error
      apiQuotes = quotes;
      console.log(error);
    }
  } else {
    quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  }

  // Check if author field is blank and replace it with Anonymous
  if (quote && !quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  // Check quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  // Set Quote, Hide Loader
  quoteText.textContent = quote.text;
  complete();
}

const removeBackgroundColors = () => {
  document
    .querySelectorAll(".autocomplete-items")
    .forEach((item) => (item.style.background = "none"));
};

// Get categories
async function getCategories() {
  loading();
  const apiCatUrl = `https://goquotes-api.herokuapp.com/api/v1/all/tags`;
  try {
    const response = await fetch(apiCatUrl);
    apiCategories = await response.json();

    let tags = [];
    apiCategories.tags.forEach((e) => tags.push(e.name));
    listOfCat = tags.length === 0 ? categories.sort() : tags.sort();

    newQuote();
  } catch (error) {
    if (apiCategories.length === 0) {
      listOfCat = apiCategories;
    }
  }
}

// Get Quotes from API
async function getQuotes() {
  loading();

  let apiUrl = `https://goquotes-api.herokuapp.com/api/v1/random?count=10`;

  try {
    const response = await fetch(apiUrl);
    let apiResponse = await response.json();
    apiQuotes = apiResponse.quotes;

    newQuote();
  } catch (error) {
    // If an error in connection occurs, default quotes hardcoded file and print error
    apiQuotes = quotes;
    console.log(error);
    // get new quote
    newQuote();
  }
}

// Tweet Quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "_blank");
}

function addActive(x) {
  if (!x) return false;
  // remove the "active" class on all items
  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = x.length - 1;

  /*add class "autocomplete-active":*/
  x[currentFocus].classList.add("autocomplete-active");
}

function removeActive(x) {
  /*a function to remove the "active" class from all autocomplete items:*/
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove("autocomplete-active");
  }
}

// add categories to dropdown element
listOfCat.map((el) => {
  dropDown.insertAdjacentHTML(
    "beforeend",
    `<div class='autocomplete-items ${el}'>${el}</div>`
  );
});

inputBox.addEventListener("keyup", () => {
  let input, filter, a, i;
  input = document.getElementById("quoteInput");
  filter = input.value.toUpperCase();
  dropDown.style.display = "block";
  a = dropDown.getElementsByTagName("div");
  for (i = 0; i < a.length; i++) {
    let txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
});

document.addEventListener("click", (e) => {
  /* close dropdown list when clicked anywhere other than dropdown list */
  if (!e.target.classList.contains("autocomplete-items")) {
    dropDown.style.display = "none";
  }

  // show dropdown list when input is clicked
  if (e.target.classList.contains("quoteInput")) {
    dropDown.style.display = "block";
  }

  if (e.target.classList.contains("autocomplete-items")) {
    inputBox.value = e.target.innerText;
    selection = e.target.innerText;
    //localStorage.setItem("selected", e.target.innerText);

    // Clear all background colors in dropdown
    removeBackgroundColors();
    e.target.style.background = "#add8e6";

    // filter tag selected
    getFilteredQuote(e.target.innerText);
    dropDown.style.display = "none";
  }
});

// Event Listeners
newQuoteBtn.addEventListener("click", () => {
  quoteBtn = true;
  selection = null;
  newQuote();
});
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getCategories();
getQuotes();

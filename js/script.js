//    event listener to respond to "Show another quote" button clicks
//    when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.body.style.backgroundImage = "url('http://wallpapercave.com/wp/ItmVuT6.jpg')";
window.onload = autoChange();

/*  Global scope variables:
    colorArray contains an array of preset colors;
    randIndex sets the randomQuote index to be available for the global scope;
    drawnArray stores objects from the quotes array;
    intervalID stores the setTimeout function to be called in the HTML doc  */
var colorArray = ['3B0F05','2B4605','000000','03163D',
  '3C5643','211259','6F6002','0C452C'];
var randIndex;
var drawnArray = [];
var intervalID;

//  Auto loads another random quote if idle for 15 seconds.
function autoChange() {
  intervalID = window.setTimeout(printQuote, 15000);
}

//  Returns quote by index# at random.
function getRandomQuote() {
  randIndex = Math.floor( Math.random() * quotes.length);
  var splicedQuote = quotes.splice(randIndex, 1)[0];
  drawnArray.push(splicedQuote);
  console.log(splicedQuote);
  if (quotes.length === 0) {
    console.log('reset');
    quotes = drawnArray;
    drawnArray = [];
  }
  return splicedQuote;
}

/*  Calls 2 functions: to randomize BG color, and auto reload quote if idle.
    Also calls getRandomQuote function and stores returned value in a variable.
    Then constructs a string to print to the document. Does not try to print
    'citation' and 'year' properties if they do not exist.  */
function printQuote() {
  randomColor();
  autoChange();
  var grq = getRandomQuote();
  var write1 = document.getElementById('quote-box')
  write1.innerHTML = '<p class="quote">' + grq.quote + '</p>';
  write1.innerHTML += '<p class="source">' + grq.source;
  if (grq['citation'] !== undefined) {
    write1.innerHTML += '<span class="citation">' + grq.citation + '</span>'
  } else {
    write1.innerHTML += '</p>';
  }
  if (grq['year'] !== undefined) {
    write1.innerHTML += '<span class="year">' + grq.year + '</span></p>';
  } else {
    write1.innerHTML += '</p>';
  }
}

//Randomized backdrop color
function randomColor() {
  var color = '#';
  color += colorArray[Math.floor(Math.random() * colorArray.length)];
  document.getElementById('quote-box').style.background = color;
}

//Quotes array
var quotes = [
  {
    quote : "I can fix this.",
    source : "Poe Dameron",
    citation : "Star Wars: The Force Awakens",
    year : "2015",
    category : "Refining",
    index : 0
  },
  {
    quote : "We shall double our efforts!",
    source : "Moff JerJerrod",
    citation : "Star Wars: Return of the Jedi",
    year : "1983",
    category : "New Projects",
    index : 1
  },
  {
    quote : "These are your first steps...",
    source : "Obi-Wan Kenobi",
    citation : "Star Wars: The Force Awakens",
    year : "2015",
    category : "Learning",
    index : 2
  },
  {
    quote : "Train yourself to let go of everything you fear to lose.",
    source : "Yoda",
    citation : "Star Wars: Revenge of the Sith",
    year : "2005",
    category : "Inspiring",
    index : 3
  },
  {
    quote : "Do. Or do not. There is no try.",
    source : "Yoda",
    citation : "Star Wars: The Empire Strikes Back",
    year : "1980",
    category : "Motivational",
    index : 4
  }
];

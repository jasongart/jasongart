var randomFunFact = document.getElementById("randomFF");
var randomFFHead = document.getElementById("ffHead");
var resetFunFact = document.getElementById("resetFF");

// An array to hold the fun facts
var funFacts = [

    "While I'm a full-time designer, I hold a BFA in Illustration.",

    "I'm pretty much entirely self-taught in my skills with design apps and front-end web design and development.",

    "I have an excellent attention to detial, and an even greater sense of irony.",

    "I'm the one on the left.",

    "My sense of humor consists mostly of dry wit and sarcasm. My greatest weakness is not knowing when to suppress it, which is probably most of the time...I wouldn't know since people are too polite (slash rude) and won't tell me.",

    "My youngest child is a complete attention hog. The first time I noticed this was when he stole my thunder by being born on Father's Day.",

    "My first memory of being obsessed with drawing came in first grade thanks to the movie Top Gun, causing me to incessantly draw \"jets\" in what can charitably be described as my abstract expressionist phase.",

    "Because I have two small children and hard flooring the most indispensable item in my house is a broom."
];

var dupePrevent = [];



//fun fact function
function setFunFact(){
  var randomIdx = Math.trunc(Math.random() * funFacts.length);
  randomFFHead.innerHTML = "Random Fact: #" + (randomIdx + 1) + " (of " + (funFacts.length) + ")";
  randomFunFact.innerHTML = funFacts[randomIdx];
  // console.log("set FF")
  dupePrevent.push(randomIdx);
  // console.log(dupePrevent);
  console.log(typeof(randomIdx));
};

//set the fun fact when the page loads
window.onload = setFunFact();

//reset the fun fact...find way to prevent duplicates
resetFunFact.addEventListener("click", function(){
    randomFunFact.classList.remove("ffInit");
    randomFunFact.classList.add("randomFFout");
    setTimeout(function(){
      randomFunFact.classList.remove("randomFFout");
      randomFunFact.classList.add("randomFFin");
      setFunFact();
    },500);
    //removes .randomFFin so it can be used each time reset is clicked
    setTimeout(function(){
      randomFunFact.classList.remove("randomFFin");
    },1000);

    dupePrevent.push(randomIdx);
    // console.log(dupePrevent);
  }


);

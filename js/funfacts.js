var randomFunFact = document.getElementById("randomFF");
var randomFFHead = document.getElementById("ffHead");
var resetFFBut = document.getElementById("resetFF");

// An array to hold the fun facts
    var funFacts = [

        "While I'm a full-time designer, I hold a BFA in Illustration.",

        "I'm almost entirely self-taught in my skills with design apps, as well as front-end web design and development.",

        "I love to draw/paint on my iPad, I don't get to do it as often as I'd like.",

        "I like to colorize old black and white photos. It's amazing to me how the past comes to life when it's in color.",

        "I have an excellent attention to detial, and an even greater sense of irony.",

        "I'm the one on the right.",

        "One of my all-time favorite songs is Weezer's \"Say It Ain\'t So.\"",

        "In my opinion, the four food groups should be prime rib, beer, hummus, and chocolate chip pancakes.",

        "My sense of humor consists mostly of dry wit and sarcasm. My greatest weakness is not knowing when to put a lid on it. (Which is probably most of the time)",

        "The first concert I ever went to was for Weird Al Yankovic.",

        "One of my all-time favorite movies is the \"Back to the Future\" trilogy. I consider it one movie.",

        "My first car was a 1989 Ford Probe, having it forced me to learn to drive stick.",

        "My youngest child is a complete attention hog. The first time I noticed this was when he stole my thunder by being born on Father's Day.",

        "Once, I accidentally brushed against Gene Simmons on the convention floor of San Diego Comic-Con. When I said \"excuse me\" he replied \"I enjoyed it.\"",

        "My first memory of being obsessed with drawing came in first grade thanks to the movie Top Gun, causing me to incessantly draw \"jets\" in what can charitably be described as my abstract impressionist phase.",

        "My path to a design career really got started reading comics. I had no formal art training at the time, but all I wanted to do draw superheroes. Then, one thing lead to another...",

        "Because I have two small children and hard flooring the most indispensable item in my house is a broom.",

        "I've always had an this thing about ants creeping me out that I never understood, then my mom told me that when I was a toddler I sat on an ant hill and got attacked. Mystery solved.",

        "If I had to pick a favorite color I would probably say blue, despite its minimal presence on this website.",

        "I can do this really loud popping sound with my fingers against my chin. People think it's my knuckles, or some crazy tongue click, but it's not.",

        "When I was a teenager I taught myself how to juggle using balled up socks.",

        "Despite enjoying the highly collaborative nature of my work, I can be quite the introvert too.",

        "I don't have any tattoos because I have commitment issues.",

        "I've never had a cavity, broken bone, or bee sting...but I do knock on wood a lot.",

        "I love stand up comedy, one of my all-time favorite jokes (paraphrased) is: \"I believe in Karma. Sometimes I punch a random person in the face and say what did you do to deserve that?\"",

        "I don't hate Jar Jar Binks. Sorry."
    ];

    //Random number to start with
    var randomIndex = null;


    //An array to record randomly generated funFacts index #s to help prevent duplication
    var dupePrevent = [];

    //Random number generator
    function genRandNum(){
      var randomIdx = Math.trunc(Math.random() * this.funFacts.length);
      randomIndex = randomIdx;
      // console.log(randomIndex);
      setFunFact();
    }

    //fun fact function
    function setFunFact(){
      if (dupePrevent.includes(randomIndex)){
        console.log("dupe with " + randomIndex);
        genRandNum();
      }
      else{
        randomFFHead.innerHTML = "Random Fact: #" + (randomIndex + 1);
        randomFunFact.innerHTML = funFacts[randomIndex];
        dupePrevent.push(randomIndex);
        console.log(dupePrevent);
      }
      if(dupePrevent.length == funFacts.length){
        dupePrevent = [];
        // genRandNum();
      }
    };





//reset the fun fact and add and remove the css classes that animate the transitions
function resetFunFact(){
    randomFunFact.classList.remove("ffInit");
    randomFunFact.classList.add("randomFFout");
    setTimeout(function(){
      randomFunFact.classList.remove("randomFFout");
      randomFunFact.classList.add("randomFFin");
      genRandNum();
    },500);
    //removes .randomFFin so it can be used each time reset is clicked
    setTimeout(function(){
      randomFunFact.classList.remove("randomFFin");
    },1000);
};


//set the random number (which fires the fun fact function) when the page loads
window.onload = genRandNum();

//reset "button"
resetFFBut.addEventListener("click", resetFunFact);

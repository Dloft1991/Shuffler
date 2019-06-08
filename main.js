 const users = 
[
  {
        name: "Derek",
        fact: "Collects Iron Man Merch." ,
        head: "../"
    }, 
    {
        name: "Frank",
        fact: "Has a Razer scooter.",
        head: "scooter.png"
    }, 
     {
        name: "Mary",
        fact: "Never climbed a ladder.",
        head: "ladder.png"
    }
];

function getUser() {
    for (i = 0; i < users.length; i++) {
        const randomizer = (users[Math.floor(Math.random() * users.length)]);

        myName = randomizer.name;
        myFact = randomizer.fact;
        myHead = randomizer.head;
    console.log(randomizer);
        $("#name").text(myName);
        $("#fact").text(myFact); 
        $("#head").text(myHead); 
    }
   
}


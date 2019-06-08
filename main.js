 const users = 
[
  {
        name: "Derek",
        fact: "Collects Iron Man Merch."
    }, 
    {
        name: "Frank",
        fact: "Has a Razer scooter."
    }
    , 
     {
        name: "Mary",
        fact: "Never climbed a ladder."
    }
];


function getUser() {
    for (i = 0; i < users.length; i++) {
        const randomizer = (users[Math.floor(Math.random() * users.length)]);

        myName = randomizer.name;
        myFact = randomizer.fact;
    console.log(randomizer);
        $("#name").text(myName);
        $("#fact").text(myFact); 
    }
   
}


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
        fact: "Never clibed a ladder."
    }
];


function getUser() {
    const randomizer = JSON.stringify(users[Math.floor(Math.random() * users.length)]);

    console.log(randomizer);
    $("#name").text(randomizer);
        // $("#name").text(users.one.name);
        // $("#fact").text(users.one.fact);
}


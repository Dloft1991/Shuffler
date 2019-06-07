 const users = 
{
   one: {
        name: "Derek",
        head: "this",
        fact: "Collects Iron Man Merch."
    }, 
    two: {
        name: "Frank",
        head: src="https://tenor.com/sO2r.gif",
        fact: "Has a Razer scooter."
    }
    , 
    three: {
        name: "Mary",
        head: src="https://tenor.com/1W67.gif",
        fact: "Never clibed a ladder."
    }
};
// var users = ["Iron Man", "Thor", "Spider Man", "Scarlet Witch", "Hulk", "Vision", "Black Widow", "Hawk Eye"];

function getUser() {
    console.log(users.one.fact);
  $("#head").text(users.one.head);
  $("#name").text(users.one.name);
  $("#fact").text(users.one.fact);
}
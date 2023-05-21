let table = document.getElementById("table");
let bouton = document.createElement("button");
let newContent = document.createTextNode("MORE INFO");
let finalButton = bouton.appendChild(newContent);

class Client {
  constructor(name, surname, birthday, balance, account_number, butt) {
    (this.name = name),
      (this.surname = surname),
      (this.birthday = birthday),
      (this.balance = balance),
      (this.account_number = account_number),
      (this.butt = butt);
  }
}

let client1 = new Client(
  "Efosa",
  "Omorodion",
  1998,
  50,
  150150255,
  finalButton
);
let client2 = new Client("Samir", "Santana", 1990, 60, 10015011, finalButton);
let client3 = new Client("Nina", "Simone", 1940, 70, 15015444, finalButton);
let client4 = new Client("Tina", "Timon", 1950, 80, 1500044, finalButton);
let client5 = new Client("Pumba", "Mufasa", 1960, 80, 800514, finalButton);
let client6 = new Client("Patrick", "Star", 1970, 90, 8577599, finalButton);
let client7 = new Client(
  "Spongebob",
  "Bikini",
  2001,
  100,
  1587466,
  finalButton
);
let client8 = new Client("Naruto", "Uzumaki", 1998, 258, 1507789, finalButton);
let client9 = new Client("Sasuke", "Uchiha", 2004, 211, 874669, finalButton);
let client10 = new Client("Aang", "Katara", 2000, 100, 5000004, finalButton);

console.log(
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10
);

let clients = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
];

for (let i = 0; i < clients.length; i++) {
  table.innerHTML +=
    "<td>" +
    clients[i].name +
    "</td>" +
    "<td>" +
    clients[i].surname +
    "<td>" +
    clients[i].butt +
    "</td>";
}

/* 
+ '</td>' + '<tr>' + clients[i].birthday + '</tr>'
   +  clients[i].balance + '</tr>' + '<tr>' + clients[i].account_number + '</tr>' ;
*/

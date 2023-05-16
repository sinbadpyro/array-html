class Client {
  constructor(name, surname, birthday, balance, account_number) {
    (this.name = name),
      (this.surname = surname),
      (this.birthday = birthday),
      (this.balance = balance),
      (this.account_number = account_number);
  }
}

let client1 = new Client("Efosa", "Omorodion", 1998, 50, 150150255);
let client2 = new Client("Samir", "Santana", 1990, 60, 10015011);
let client3 = new Client("Nina", "Simone", 1940, 70, 15015444);
let client4 = new Client("Tina", "Timon", 1950, 80, 1500044);
let client5 = new Client("Pumba", "Mufasa", 1960, 80, 800514);
let client6 = new Client("Patrick", "Star", 1970, 90, 8577599);
let client7 = new Client("Spongebob", "Bikini", 2001, 100, 1587466);
let client8 = new Client("Naruto", "Uzumaki", 1998, 258, 1507789);
let client9 = new Client("Sasuke", "Uchiha", 2004, 211, 874669);
let client10 = new Client("Aang", "Katara", 2000, 100, 5000004);

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

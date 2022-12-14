console.log("JS OK");

// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

/* 
1. Prendo l'elemento dal dom
(1.b preparo una variabile con la string '21')
2. chiedo all'utente il suo nome con prompt e lo salvo nella variabile firstName
3. chiedo all'utente il suo cognome con prompt e lo salvo nella variabile lastName
4. chiedo all'utente il suo colore preferito con prompt e lo salvo nella variabile favouriteColor
5. creo la password 
6. inserisco la password in html
*/

// 1. Prendo l'elemento dal dom
const passwordElement = document.getElementById("password");
// console.log(passwordElement);

// (1.b preparo una variabile con la string '21')
const number = "21";

// 2. chiedo all'utente il suo nome con prompt e lo salvo nella variabile firstName
const firstName = prompt("Qual'è il tuo nome?", "Andrea");
// console.log(firstName);

// 3. chiedo all'utente il suo cognome con prompt e lo salvo nella variabile lastName
const lastName = prompt("Qual'è il tuo cognome?", "Garofalo");
// console.log(lastName);

// 4. chiedo all'utente il suo colore preferito con prompt e lo salvo nella variabile favouriteColor
const favouriteColor = prompt("Qual'è il tuo colore preferito?", "Rosso");
// console.log(favouriteColor);

// 5. creo la password
const newPassword = firstName + lastName + favouriteColor + number;
// console.log(favouriteColor);

// 6. inserisco la password in html
// passwordElement.innerText = "La tua nuova password è" + " " + newPassword;

// 6-bonus. inserisco la password in html in un altro modo
passwordElement.innerText = `La tua nuova password è ${firstName}${lastName}${favouriteColor}21`;

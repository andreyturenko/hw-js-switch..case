// // // Tasks: Switch case

// // 1. Запитати у користувача номер дня тижня та вивести відповідну повну рядкову назву
// //    (наприклад, якщо користувач вводить 7 – виводиться повідомлення "неділя").
// //    Передбачити обробку помилкового введення номера дня тижня (в гілка default,
// //    з повідомленням "дня з таким номером не існує").

const weekDayNumber = +prompt("What is the day number of the week?");

switch (weekDayNumber) {
  case 1:
    alert("Monday");
    break;
  case 2:
    alert("Tuesday");
    break;
  case 3:
    alert("Wednesday");
    break;
  case 4:
    alert("Thursday");
    break;
  case 5:
    alert("Friday");
    break;
  case 6:
    alert("Saturday");
    break;
  case 7:
    alert("Sunday");
    break;
  default:
    alert("There is no day with this number!");
}

// // 2. У змінній day лежить якесь число з інтервалу від 1 до 31. Визначте, до якої декади місяця
// //    потрапляє це число (до першої, другої чи третьої). Наприклад, число 1 - це перша декада,
// //    20 - друга, 25 - третя.

const day = +prompt("Enter the day of the month: 1 - 31");

switch (true) {
  case day >= 1 && day <= 10:
    console.log("First decade of the month");
    break;
  case day >= 11 && day <= 20:
    console.log("Second decade of the month");
    break;
  case day >= 21 && day <= 31:
    console.log("Third decade of the month");
    break;
  default:
    console.log("Incorrect day of the month!!!");
}

// Alternatively the 'if else' operator: (task 1)

const weekDay = prompt("What is the day number of the week?");

if (weekDay === "1") {
  console.log("Monday");
} else if (weekDay === "2") {
  console.log("Tuesday");
} else if (weekDay === "3") {
  console.log("Wednesday");
} else if (weekDay === "4") {
  console.log("Thursday");
} else if (weekDay === "5") {
  console.log("Friday");
} else if (weekDay === "6") {
  console.log("Saturday");
} else if (weekDay === "7") {
  console.log("Sunday");
} else {
  console.log("There is no day with this number!");
}

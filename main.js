// let userData = {};
// let userId = prompt("Введите ваш ID:");
// let userName = prompt("Введите ваше имя:");
// let userSurname = prompt("Введите вашу фамилию:");

// userData.id = userId;
// userData.name = userName;
// userData.surname = userSurname;

// let delate = prompt("Какую из этих информаций вы хотите удалить?");
// userData.delate = delate;

// console.log(userData);

let person = {};
person.id = prompt("Введите ваш ID:");
person.firstName = prompt("Введите ваше имя:");
person.lastName = prompt("Введите вашу фамилию:");
console.log("Созданный объект:", person);

let fieldToDelete = prompt("Что вы хотите удалить? (id, firstName, lastName)");

if (fieldToDelete in person) {
  delete person[fieldToDelete];
  console.log(`${fieldToDelete} успешно удалено.`);
} else {
  console.log("Такого поля нет в объекте.");
}

console.log("Обновленный объект:", person);

// const sirjidin = {
//     names: 'Sirjiddin',
//     age: 16,
//     gender: false,
//     adess: 'Chilonzor',
//     jonka: true,
// }

// sirjidin.nechiSM = 1.65

// console.log(sirjidin);

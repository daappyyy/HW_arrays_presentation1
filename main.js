// Створити масив. довжину та елементи якого задає користувач. Відсортуваи масив за зростанням. Після цього видалити елменти масиву з 2 по 4 позицію включно. 
// У міру змін виводити вміст масиву на сторінку.
let arrLength = parseInt(prompt(`Hi!;) Enter the length of the array, please: `))
const arrayNumbers = [];
for(let i = 0; i < arrLength; i++){
    let number = parseInt(prompt(`Now enter the value of an element ${i+1}`));
    arrayNumbers.push(number);
}
document.write(`Your array is: ${arrayNumbers}<br>`);

arrayNumbers.sort(function(a, b){return a - b});

document.write(`Sorted array is: ${arrayNumbers}<br>`);

arrayNumbers.splice(1, 4); //Тут елементи видаляються не з другого індексу, а саме з 2 місця як це бачить користувач на сторінці

document.write(`New array is: ${arrayNumbers}`);
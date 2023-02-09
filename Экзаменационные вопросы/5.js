// Написать функцию, которая проверяет, является ли строка палиндромом

function palindrome(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}

console.log(palindrome("Не гни папин ген")); // true
console.log(palindrome("123")); // false
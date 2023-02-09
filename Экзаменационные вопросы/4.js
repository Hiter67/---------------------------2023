// Написать функцию, которая проверяет, являются ли две строки анаграммой

function anagram(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(anagram("Лунь", "нуль")); // true
console.log(anagram("Лунь", "ноль")); // false
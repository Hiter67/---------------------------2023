// Написать функцию intersect(arrA, arrB), 
// принимающую на вход два массива
// и возвращающую пересечение значений этих массивов.

function intersect(arrA, arrB) {
  return arrA.filter(value => arrB.includes(value));
}
// Array Methods
// TypeScript supports standard array methods, and you can leverage type annotations for these methods.
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numbers.forEach((num) => {
//     console.log(num*2)
// })
// Using map
var numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var doubled = numbers2.map(function (num) {
    return num * 2;
});
console.log(doubled);

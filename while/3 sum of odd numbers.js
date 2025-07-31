/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let i = 81;
let sum = 0;
while (i <= 131) {
  if (i % 2 != 0) {
    sum += i;
  }
  i++;
}
console.log(sum);
/*programming hero*/

let j = 206;
let sum1 = 0;
while (j <= 311) {
  if (j % 2 == 0) {
    sum1 += j;
  }
  j++;
}
console.log(sum1);

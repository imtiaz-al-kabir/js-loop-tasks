/***

Subtask-1:
Display sum of all the odd numbers from 91 to 129.

/***
dd
/***
Subtask-2:
s
Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/
let i;
let sum = 0;
for (i = 91; i <= 129; i++) {
  if (i % 2 != 0) {
    sum += i;
  }
}
console.log(sum);

let j;
let sum1 = 0;
for (j = 51; j <= 85; j++) {
  if (j % 2 === 0) {
    sum1 += j;
  }
}
console.log(sum1);

/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

let i;
for (i = 1; i <= 40; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

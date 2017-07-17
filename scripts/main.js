/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A']
// test

console.log('loaded JS');

                      //array
function handValue(hand) {
  var sum = 0
    for (var i = 0; i < hand.length; i++) {
      if (hand[i] === 'J' || hand[i] === 'K' || hand[i] === 'Q' || hand[i] === '10') {
        sum += 10
      } else if (hand[i] === '2' || hand[i] === '3' || hand[i] === '4' || hand[i] === '5' ||
       hand[i] === '6' || hand[i] === '7' || hand[i] === '8' || hand[i] === '9') {
        sum += Number(hand[i])
        //     ^ same as parseInt
      } else if (hand[i] === 'A' && sum > 10) {
        sum += 1
      } else if (hand[i] === 'A' && sum < 11) {
        sum += 11
      }

  }
  return sum
}
// iterate through array



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

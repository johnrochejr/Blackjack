/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

const cards = {
	details: [
		{
			card: '2', // [0]
			value: 2
		},
		{
			card: '3', // [1]
			value: 3
		},
		{
			card: '4', // [2]
			value: 4
		},
		{
			card: '5', // [3]
			value: 5
		},
		{
			card: '6', // [4]
			value: 6
		},
		{
			card: '7', // [5]
			value: 7
		},
		{
			card: '8', // [6]
			value: 8
		},
		{
			card: '9', // [7]
			value: 9
		},
		{
			card: '10', // [9]
			value: 10
		},
		{
			card: 'J', // [9]
			value: 10
		},
		{
			card: 'Q', // [10]
			value: 10
		},
		{
			card: 'K', // [11]
			value: 10
		},
		{
			card: 'A', // [12]
			value: [1, 11]
		}
	]
};

// test

console.log('loaded JS');
const hand = cards.details;
console.log(`I have ${hand.length} cards`);

// create function

function handValue(blackJackHand) {

// iterate through array

  for (let i = 0; i < hand.length; i++) {
    
  }

}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

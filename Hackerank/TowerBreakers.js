// Two players are playing a game of Tower Breakers! Player  always moves first, and both players always play optimally.The rules of the game are as follows:

// Initially there are n towers.
// Each tower is of height m.
// The players move in alternating turns.
// In each turn, a player can choose a tower of height x and reduce its height to y, where y < x and y evenly divides x.
// If the current player is unable to make a move, they lose the game.
// Given the values of n and m, determine which player will win. If the first player wins, return 1. Otherwise, return 2.

// Example. n = 2, m = 6

// There are 2 towers, each 6 units tall. Player 1 has a choice of two moves:
// - remove 3 pieces from a tower to leave 3 as 6 is divisible by 3.
// - remove 2 pieces from a tower to leave 4 as 6 is divisible by 2.
// - remove 1 piece from a tower to leave 5 as 6 is divisible by 1.

// Let Player 1 remove 3. Now the towers are 3 and 6 units tall.

// Player 2 matches the move. Now the towers are both 3 units tall.

// Now Player 1 has only one move.

// Player 1 removes 1 piece leaving 2. Towers are 2 and 3 units tall.
// Player 2 matches again. Towers are both 2 units tall.

// Player 1 has no move and loses. Return 2.

// Function Description

// Complete the towerBreakers function in the editor below.

// towerBreakers has the following paramter(s):

// int n: the number of towers
// int m: the height of each tower
// Returns

// int: the winner of the game
// Input Format

// The first line contains a single integer , the number of test cases.
// Each of the next  lines describes a test case in the form of  space-separated integers,  and .

function towerBreakers(n, m) {
    // Write your code here
    // If m is 1, Player 2 wins because Player 1 cannot make a move.
    if (m === 1) {
        return 2;
    }
    // If n is even and m > 1, Player 2 can always mirror Player 1's moves, leading to a win for Player 2.
    if (n % 2 === 0 && m > 1) {
        return 2;
    }
    // If n is odd and m > 1, Player 1 can always win by making the first move.
    return 1;
}
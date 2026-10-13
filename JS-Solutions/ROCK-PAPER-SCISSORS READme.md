Rules of the "Rock, Paper, Scissors" game are:

Rock beats Scissors,
Scissors beat Paper,
Paper beats Rock,
Two identical moves are a draw.
Let's play! You will be given valid moves of two Rock, Paper, Scissors players, and have to return which player won: "Player 1 won!" for player 1, and "Player 2 won!" for player 2. In case of a draw return Draw!.

Examples:
"scissors",     "paper"     --> "Player 1 won!"
"scissors",     "rock"      --> "Player 2 won!"
"paper",        "paper"     --> "Draw!"
rockpaperscissors

Fundamentals



if p1 === p2 in both value and type then return draw
otherwise, if p1 === rock,paper,scissors and p2 === scissors,rock,paper then return p1 wins, 
and if not both these cases then return p2 wins
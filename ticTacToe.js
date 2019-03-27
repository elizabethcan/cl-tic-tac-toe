let spaces = [1,2,3,4,5,6,7,8,9];

var startGame = () => {
  // create the board

  // function to make a move, X goes first
    // place piece
    // check if won
      // yes: display who won
      // no: O play piece; repeat


  printBoard() // prints the original board
  markSpace('X') // gives x first turn

}


var printBoard = () => {
  let board = ''
  for (let i = 1; i <= spaces.length; i++) {
    board += ` ${i} `;
    if (i % 3 === 0) {
      if (i != spaces.length) {
        board += `\n-----------\n`
      }
    } else {
      board += `|`
    }
  }
  console.log(board)
}


var markSpace = (player) => {
  // on keypress, if key is available spot
    // replace that digit in spaces with the player's symbol
  // else
    // tell them to select a valid spot
}

var checkWin = (board) => {
  let wins = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
}

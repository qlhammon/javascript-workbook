function horizontalWin() {
  // Your code here
  if(board[0][0] && board[0][1] && board[0][2]=='X'){
    return 'You Win!'
  }
  if(board[1][0] && board[1][1] && board[1][2]=='X'){
    return 'You Win!'
  }
  if(board[2][0] && board[2][1] && board[2][2]=='X'){
    return 'You Win!'
  }
  if(board[0][0] && board[0][1] && board[0][2]=='O'){
    return 'Computer Wins!'
  }
  if(board[1][0] && board[1][1] && board[1][2]=='O'){
    return 'Computer Wins!'
  }
  if(board[2][0] && board[2][1] && board[2][2]=='O'){
    return 'Computer Wins!'
  }
}
 // Make an if/else statement that makes for a player win if 'X', or 'O' is covering 3 horizontally adjacent boxes.
function verticalWin() {
  // Your code here
  if(board[0][0] && board[1][0] && board[2][0]=='X'){
    return 'You Win!'
  }
  if(board[0][1] && board[1][1] && board[2][1]=='X'){
    return 'You Win!'
  }
  if(board[0][2] && board[1][2] && board[2][2]=='X'){
    return 'You Win!'
  }
  if(board[0][0] && board[1][0] && board[2][0]=='O'){
    return 'Computer Wins!'
  }
  if(board[0][1] && board[1][1] && board[2][1]=='O'){
    return 'Computer Wins!'
  }
  if(board[0][2] && board[1][2] && board[2][2]=='O'){
    return 'Computer Wins!'
}
// Make an if/else statement that makes for a player win if 'X',or 'O' is covering 3 vertically adjacent boxes.
}
 function diagonalWin() {
  // Your code here
  if(board[0][0] && board[1][1] && board[2][2]=='X'){
    return 'You Win!'
  }
  if(board[0][2] && board[1][1] && board[2][0]=='X'){
    return 'You Win!'
  }
  if(board[0][0] && board[1][1] && board[2][2]=='O'){
    return 'Computer Wins!'
  }
  if(board[0][2] && board[1][1] && board[2][0]=='O'){
    return 'Computer Wins!'
  }
}
// Make an if/else statement that makes for a player win if 'X',or 'O' is covering 3 diagonal boxes.
 function checkForWin() {
  // Your code here
  return horizontalWin() || verticalWin() || diagonalWin();
  // Create a function that calls the prompts from horizontalWin, verticalWin, and diagonalWin functions.
}
 function ticTacToe(row, column) {
  // Your code here

  // Create a function that reacts to the player's click(move)? May need to call turn alternations.
}
 function getPrompt() {
}

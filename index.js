// using prompt to get userinput
const prompt = require('prompt');

var board = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: ''
}

const printBoard = () => {
  console.log('\n' + ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' + ' ------\n' + ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' + ' ------\n' + ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
}

const markBoard = (location, turn) => {
  board[location] = turn.toUpperCase();
}

const winCombinations = [[1,4,7], [2,5,8], [3,6,9], [1,2,3], [4,5,6], [7,8,9], [1,5,9], [3,5,7]];

const checkWin = (turn) => {
  let result = false;
  turn = turn.toUpperCase();
  winCombinations.forEach(item => {
    if(item[0] === turn && item[1] === turn && item[2] === turn) {
      result = true;
    }
  })
  return result;
}

const checkTie = () => {
  let result = true;
  for (var key in board) {
    if (board[key] === "") {
      result = false
    }
  }
  return result;
}

// check input
const isNumber = (position) => {
  if(isNaN(position) || position === 0) {
    return false 
  }
  return true;
}


const validMove = (position) => {
  return board[position] === "" && isNumber(position)
}

const play = (player) => {
  console.log("it's your turn" + " " + player);
  prompt.start();
  prompt.get(["position"], (err,result) => {
    if(validMove(result.position) === true) {
      markBoard(result.position, player)
      printBoard();
      if(checkTie()) {
        console.log('tie game!!')
        return;
      }
      if(checkWin(player)) {
        console.log(player, " wins!!")
        return;
      }
      
      if(player.toUpperCase() === "X") {
        play("o")
      } else if (player.toUpperCase() === "O") {
        play('x')
      }

    } else {
      console.log('please enter a valid move! number 1 - 9 for locatoins on the board');
      if(player.toUpperCase() === "X") {
        play("x")
      } else if (player.toUpperCase() === "O") {
        play('o')
      }
    }
  });
}



play("x");
import React, { useState } from 'react';
import Board from './components/board';
import './App.css';

function App() {
   const [board, setBoard] = useState([
      '', '', '',
      '', '', '',
      '', '', ''
   ]);

   const [turn, setTurn] = useState('X');

   const reset = () => {
      setBoard([
         '', '', '',
         '', '', '',
         '', '', ''
      ]);
      setClickCount(0)
   };

   const getWinner = (boardCopy) => {
      const winningCombo = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6]
      ];

      for (let i = 0; i < winningCombo.length; i++) {
         const [x, y, z] = winningCombo[i];
         if (boardCopy[x] && boardCopy[x] === boardCopy[y] && boardCopy[y] === boardCopy[z]) {
            return boardCopy[x];
         }
      }
      return null;
   };


   // const checkWin = (board) => {
   //    const winningCombo = [
   //       [0, 1, 2],
   //       [3, 4, 5],
   //       [6, 7, 8],
   //       [0, 3, 6],
   //       [1, 4, 7],
   //       [2, 5, 8],
   //       [0, 4, 8],
   //       [2, 4, 6]
   //    ];

   //    for (let i = 0; i < winningCombo.length; i++) {
   //       let winner = winningCombo[i].map((index) => board[index]).join("");

   //       if (winner === 'XXX' || winner === 'OOO') {
   //          console.log('hello');
   //       }
   //    }
   // };

   const [clickCount, setClickCount] = useState(0)
   const handleClick = (e) => {
      const boardCopy = [...board];
      if (getWinner(board) == null) {
         if (boardCopy[e.target.id] === '') {
            console.log(e.target.id);
            setTurn(turn === 'X' ? 'O' : 'X');
            boardCopy[e.target.id] = turn;
            setBoard(boardCopy);
            console.log(boardCopy[e.target.id]);
            setClickCount(clickCount + 1);
         } else { alert('pick another box!') }
      } else { alert('game ended, please restart!') }
   }
   console.log(clickCount);



   // let winner = ''
   // if (getWinner(board) != null) {
   //    winner = `Winner is ${getWinner(board)}!`
   //    return winner
   // }

   const isDraw = (clickCount) => {
      let draw = '';
      if (clickCount === 9) {
         draw = `draw game, please restart!`;
         return draw
      }
   };
   const draw = isDraw(clickCount)


   const hasWinner = (board) => {
      let winner = '';
      if (getWinner(board) != null) {
         winner = `Winner is ${getWinner(board)}!`;
         return winner
      }
   };
   const winner = hasWinner(board)


   return (
      <div className='App'>
         <h1 className='Title'>Tic Tac Toe</h1>
         <h1>{winner}</h1>    
         <h1>{draw}</h1>
         <Board board={board} handleClick={handleClick} />
         <button onClick={reset}>RESET</button>
      </div>
   );
}

export default App;

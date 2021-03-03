import React from 'react';
import './Board.css';

let isRowValid = (row: Array<number>) => {

}

let isColumnValid = (column: Array<number>) => {
  
}

let isSquareValid = (square: Array<number>) => {
  
}

let renderTable = (board: Array<Array<number>>) => {
  return [
    <table>
      {
        board.map((row, index) => {
          return [
            renderRow(row)
          ]
        })
      }
    </table>
  ]
}

let renderRow = (row: Array<number>) => {
  return [
    <tr className="border-bottom">
      {
        row.map((data, index) => {
          return [
            renderData(data, index)
          ]
        })
      }
    </tr>
  ]
}

let renderData = (data: number, index: number) => {
  return [
    <td>
      <input type="text" value={data} />
    </td>
  ]
}

const Board: React.FC<any> = (props) => (
  <div className="Board">
    Board Component
      {renderTable(props.table)}
  </div>
);

export default Board;

import React from 'react';
import './Board.css';

let isRowValid = (row: Array<number>) => {

}

let isColumnValid = (column: Array<number>) => {
  
}

let isSquareValid = (square: Array<number>) => {
  
}

let isBoardvalid = () => {
  
}

let handleChange = (event: any) => {

}

let renderTable = (board: Array<Array<number>>) => {
  return [
    <table key="table">
      <tbody>
      {
        board.map((row, index) => {
          return [
            renderRow(row, index)
          ]
        })
      }
      </tbody>
    </table>
  ]
}

let renderRow = (row: Array<number>, index: number) => {
  return [
    <tr key={index}>
      {
        row.map((data, i) => {
          i += (index * 8) + index;
          return [
            renderData(data, i)
          ]
        })
      }
    </tr>
  ]
}

let renderData = (data: number, index: number) => {
  return [
    <td key="td_{index}">
      <input key="input_{index}" type="text" value={data} onChange={(event) => {handleChange(event.target.value)}} />
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

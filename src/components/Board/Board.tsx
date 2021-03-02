import React from 'react';
import './Board.css';

let tableData = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let renderTable = (table: Array<Array<number>>) => {
  return [
    <table>
      {
        table.map((row, index) => {
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
    <tr>
      {
        row.map((data) => {
          return [
            renderData(data)
          ]
        })
      }
    </tr>
  ]
}

let renderData = (data: number) => {
  return [
    <td>{data}</td>
  ]
}

const Board: React.FC = () => (
  <div className="Board">
    Board Component
      {renderTable(tableData)}
  </div>
);

export default Board;

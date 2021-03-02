import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import React from 'react';
import './Board.css';

let boardData = [
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

let renderTable = () => {
  return [
    <table>
      {
        boardData.map((row, index) => {
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

let renderData = (data: any) => {
  return [
    <td>{data}</td>
  ]
}

const Board: React.FC = () => (
  <div className="Board">
    Board Component
    <table>
      {renderTable()}
    </table>
  </div>
);

export default Board;

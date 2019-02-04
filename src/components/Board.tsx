import * as React from 'react';
import renderSquare from "./Square";

export interface IBoardProps {
    squares: any[][]
    squareClickHandler: (x: any, y: any) => void
}

const Board: React.FC<IBoardProps> = (props) => {
    const grid =
        props.squares.map((xval, xindex) => {
            return renderGridRow(props.squares, props.squareClickHandler, xindex)
        })
    return <div> {grid} </div>
}


const renderGridRow = (squares, clickHandler, xindex) => {
    const row =
        squares[xindex].map((yval, yindex) => {
            return renderSquare({
                content: squares[xindex][yindex] ? "X" : "",
                handleClick: () => clickHandler(xindex, yindex), 
                key: `${xindex}_${yindex}`});
        })
    return <div className="board-row" key={`${xindex}`}>{row}</div>
}

export default Board;
import * as React from 'react';
import renderSquare from "./Square";

export interface IBoardProps {
    squares: any[][]
    squareClickHandler: (x: any, y: any) => void
}

const Board: React.FC<IBoardProps> = (props) => {
    const grid =
        props.squares.map((yval, yindex) => {
            return renderGridColumn(props.squares, props.squareClickHandler, yindex)
        })
    return <div> {grid} </div>
}


const renderGridColumn = (squares, clickHandler, yindex) => {
    const row =
        squares[yindex].map((xval, xindex) => {
            return renderSquare({
                content: squares[yindex][xindex],
                handleClick: () => clickHandler(xindex, yindex), 
                key: `${xindex}_${yindex}`});
        })
    return <div className="board-row" key={`${yindex}`}>{row}</div>
}

export default Board;
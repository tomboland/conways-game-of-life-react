import React from 'react';
import Square from "./Square";
import PropTypes from 'prop-types';


const Board = ({squares, squareClickHandler}) => {
    let grid =
        squares.map((xval, xindex) => {
            return renderGridRow(squares, squareClickHandler, xindex)
        })
    return <div> {grid} </div>
}


const renderSquare = (content, clickHandler, key) => {
    return <Square
        content={content}
        handleClick={clickHandler}
        key={key}
    />;
}


const renderGridRow = (squares, clickHandler, xindex) => {
    let row =
        squares[xindex].map((yval, yindex) => {
            return <Square
                content={squares[xindex][yindex] ? "X" : ""}
                handleClick={() => clickHandler(xindex, yindex)}
                key={`${xindex}_${yindex}`}
            />
            //return renderSquare(squares[xindex][yindex] ? "X" : "", () => clickHandler(xindex, yindex), `${xindex}_${yindex}`);
        })
    return <div className="board-row" key={`${xindex}`}>{row}</div>
}


Board.propTypes = {
    squares: PropTypes.arrayOf(PropTypes.array).isRequired,
    squareClickHandler: PropTypes.func.isRequired,
}

export default Board;
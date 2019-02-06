import * as React from 'react';
import './square.css';

export interface ISquareProps {
    content: string;
    handleClick: ({}) => void;
    key: string;
}

export const renderSquare: React.FC<ISquareProps> = (props) => {
    return <Square
        content={props.content}
        handleClick={props.handleClick}
        key={props.key}
    />;
}

const Square: React.FC<ISquareProps> = (props) => (
    <button className="square" onClick={props.handleClick} key={props.key}>
        {props.content}
    </button>
)
 
export default Square;
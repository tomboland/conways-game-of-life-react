import * as React from 'react';
import Board from "./Board";
import InputButton from "./InputButton";
import './conways-game-of-life.css';

export interface IConwaysGameOfLifeProps {
    gridSizeX: number
    gridSizeY: number
}

export interface IConwaysGameOfLifeState {
    running: boolean
    squares: any[][]
}

class ConwaysGameOfLife extends React.Component<IConwaysGameOfLifeProps, IConwaysGameOfLifeState> {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            squares: Array(this.props.gridSizeX).fill(false).map(() => {
                return Array(this.props.gridSizeX).fill(false)
            }),
        };
    }

    toggleRunningState() {
        return () => (
            this.setState({
                running: !this.state.running
            })
        )
    }

    gridUpdateHandler = (x, y) => {
        const squares = [...this.state.squares]
        squares[x][y] = !squares[x][y]
        this.setState({
            squares,
        })
    }

    gameOfLifeTurn = () => {
        const squares = gameOfLifeTransform(this.state.squares)
        this.setState({
            squares,
        })
    }
    
    render() {
      return (
        <div className="conways-game-of-life">
          <div className="game-board">
            <Board squares={this.state.squares} squareClickHandler={this.gridUpdateHandler} />
          </div>
          <div className="conways-game-of-life-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
          <div className="input-button">
            <InputButton
                content={this.state.running ? "STOP" : "GO!"}
                handleClick={this.toggleRunningState()}/>
          </div>
          <div className="input-button">
            <InputButton
                content={"NEXT"}
                handleClick={this.gameOfLifeTurn}/>
          </div>
        </div>
      );
    }
  }

export const gameOfLifeTransform = (board: boolean[][]) => {
    const newBoard = Array(board.length).fill(false).map(() => {
        return Array(board[0].length).fill(false)
    })
    board.map((column, x) => {
        column.map((cellState, y) => {
            const minx = x - 1 < 0 ? 0 : x - 1
            const miny = y - 1 < 0 ? 0 : y - 1
            const maxx = x + 1 >= board.length ? board.length - 1 : x + 1
            const maxy = y + 1 >= column.length ? column.length - 1 : y + 1
            const populated: boolean[][] = board.slice(minx, maxx + 1).map((col) => col.slice(miny, maxy + 1))
            const neighbours = populatedNeighbours(board[x][y], Array.prototype.concat(...populated))
            newBoard[x][y] = newCellState(board[x][y], neighbours)
        })
    })
    return newBoard
}


export const populatedNeighbours = (originalCellState: boolean, cells: boolean[]) => {
    const removeOriginal = (original: boolean, subCells: boolean[]) : boolean[] => {
        const [head, ...tail] = subCells
        if (head === original) return tail
        const toReturn = [ head ].concat(removeOriginal(original, tail))
        return toReturn
    }
    return removeOriginal(originalCellState, cells).filter((c) => c === true).length
}


const newCellState = (currentCellState: boolean, populated: number) => {
    if (currentCellState && populated < 2) { return false }
    if (currentCellState && (populated === 2 || populated === 3)) { return true }
    if (currentCellState && populated > 3) { return false }
    if (!currentCellState && populated === 3) { return true }
    return currentCellState
}

export default ConwaysGameOfLife;
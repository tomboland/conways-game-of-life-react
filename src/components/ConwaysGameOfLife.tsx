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
            squares: Array(this.props.gridSizeY).fill(false).map(() => {
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
        </div>
      );
    }
  }

export default ConwaysGameOfLife;
import React from 'react';
import './conways-game-of-life.css';
import InputButton from "./InputButton";
import Board from "./Board";
import PropTypes from 'prop-types';


class ConwaysGameOfLife extends React.Component {
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
            squares: squares,
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

  
ConwaysGameOfLife.propTypes = {
    gridSizeX: PropTypes.number.isRequired,
    gridSizeY: PropTypes.number.isRequired,
}

ConwaysGameOfLife.defaultProps = {
    gridSizeX: 16,
    gridSizeY: 16,
}

export default ConwaysGameOfLife;
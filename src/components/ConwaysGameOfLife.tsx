import * as React from "react";
import Board from "./Board";
import InputButton from "./InputButton"
import "./conways-game-of-life.css"
import { connect } from "react-redux"

import { toggleCell, toggleRunning, advanceBoard } from '../actions'

const header = () => {
    return ( 
      <div className='row'>  
        <div className='column'>
          <h1>Conways Game of Life</h1>
        </div>
        <div className='column'>
          <a href={"https://github.com/tomboland/conways-game-of-life-react"}>
            Source Code on Github.com
          </a>
        </div>
      </div>
    )
}

interface IConwaysGameOfLifeProps {
  board: any,
  running: any,
  toggleCell: any,
  advanceBoard: any,
  toggleRunning: any
}

const ConwaysGameOfLife: React.FC<IConwaysGameOfLifeProps> = ({board, running, toggleCell, advanceBoard, toggleRunning}) => {
  return (
    <div>
      {header()}  
      <div className="row">
          <Board squares={board} squareClickHandler={toggleCell} />
      </div>
      <div className="row">
        <div className="column">
          <div className="conways-game-of-life-info">
            <div className="column">
              <div>{/* status */}</div>
            <div>{/* TODO */}</div>
          </div>
        </div>
        <div className="column">
          <div className="input-button">
            <InputButton
                content={running ? "STOP" : "GO!"}
                handleClick={toggleRunning}/>
          </div>
        </div>
        <div className="column">
          <div className="input-button">
            <InputButton
                content={"NEXT"}
                handleClick={advanceBoard}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  board: state.board,
  running: state.running
})

export default connect(mapStateToProps,
                       {toggleCell, advanceBoard, toggleRunning})(ConwaysGameOfLife)
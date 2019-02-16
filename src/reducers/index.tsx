import { RESIZE_BOARD, TOGGLE_CELL, WIPE_BOARD, TOGGLE_RUNNING, ADVANCE_BOARD } from '../actions'


function createBoard (xSize: number, ySize: number): boolean[][] {
    return Array(ySize).fill(false).map(() => { return Array(xSize).fill(false) })
}

const initialState = {
    running: false,
    board: createBoard(24, 16)
}

export const transformBoard = (board: boolean[][]) => {
    const newBoard = createBoard(board[0].length, board.length)
    board.map((row, y) => {
        row.map((cellState, x) => {
            const minx = x - 1 < 0 ? 0 : x - 1
            const miny = y - 1 < 0 ? 0 : y - 1
            const maxx = x + 1 >= row.length ? row.length - 1 : x + 1
            const maxy = y + 1 >= board.length ? board.length - 1 : y + 1
            const populated: boolean[][] = board.slice(miny, maxy + 1).map((r) => r.slice(minx, maxx + 1))
            const neighbours = populatedNeighbours(board[y][x], Array.prototype.concat(...populated))
            newBoard[y][x] = newCellState(board[y][x], neighbours)
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


export const newCellState = (currentCellState: boolean, populated: number) => {
    if (currentCellState && populated < 2) { return false }
    if (currentCellState && (populated === 2 || populated === 3)) { return true }
    if (currentCellState && populated > 3) { return false }
    if (!currentCellState && populated === 3) { return true }
    return currentCellState
}

export function gameOfLifeReducer (state = initialState, action) {
    switch (action.type) {
        case RESIZE_BOARD:
            const {xSize, ySize} = action
            return {...state, board: createBoard(xSize, ySize)}

        case TOGGLE_CELL:
            const {xPos, yPos} = action
            const board = [...state.board]
            board[yPos][xPos] = !board[yPos][xPos]
            return {...state, board: board}

        case WIPE_BOARD:
            return {...state, board: createBoard(state.board.length[0], state.board.length)}

        case TOGGLE_RUNNING:
            return {...state, running: !state.running}

        case ADVANCE_BOARD:
            return {...state, board: transformBoard(state.board)}

        default:
            return state
    }
}
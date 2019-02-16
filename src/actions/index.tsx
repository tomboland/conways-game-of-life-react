export const RESIZE_BOARD = 'RESIZE_BOARD'
export const TOGGLE_CELL = 'TOGGLE_CELL'
export const WIPE_BOARD = 'WIPE_BOARD'
export const TOGGLE_RUNNING = 'TOGGLE_RUNNING'
export const ADVANCE_BOARD = 'ADVANCE_BOARD'

export const resizeBoard = (xSize, ySize) => ({
    type: RESIZE_BOARD,
    xSize,
    ySize
})

export const toggleCell = (xPos: number, yPos: number) => ({
    type: TOGGLE_CELL,
    xPos,
    yPos
})

export const wipeBoard = () => ({
    type: WIPE_BOARD
})

export const toggleRunning = () => ({
    type: TOGGLE_RUNNING
}) 

export const advanceBoard = () => ({
    type: ADVANCE_BOARD
})
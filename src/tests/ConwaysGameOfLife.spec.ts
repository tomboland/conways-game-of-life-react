import { gameOfLifeTransform, populatedNeighbours } from '../components/ConwaysGameOfLife';


test('should look like a horizontal bar', () => {
    const testGrid = [[false, true, false],[false, true, false],[false, true, false]]
    const expectedTestGrid = [[false, false, false],[true, true, true],[false, false, false]]
    const result = gameOfLifeTransform(testGrid)
    expect(result).toBe(expectedTestGrid);
});


test('populated neighbours should be correct', () => {
    const testCells = [false, false, true, true, true, false, false]
    const result = populatedNeighbours(false, testCells)
    expect(result).toBe(3)
});
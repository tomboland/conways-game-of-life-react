import { gameOfLifeTransform, populatedNeighbours } from '../components/ConwaysGameOfLife';


test('vertical bar should turn in to horizontal bar, and back again', () => {
    const testGrid = [[false, true, false],[false, true, false],[false, true, false]]
    const expectedTestGrid = [[false, false, false],[true, true, true],[false, false, false]]
    let result = gameOfLifeTransform(testGrid)
    expect(result).toEqual(expectedTestGrid);
    result = gameOfLifeTransform(expectedTestGrid)
    expect(result).toEqual(testGrid);
});


test('populated neighbours should be correct', () => {
    const testCells = [false, false, true, true, true, false, false]
    const result = populatedNeighbours(false, testCells)
    expect(result).toEqual(3)
});
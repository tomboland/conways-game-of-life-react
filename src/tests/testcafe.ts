import { waitForReact } from 'testcafe-react-selectors'
import { Selector } from 'testcafe'


fixture `conways game of life`
    .page('http://localhost:3000')
    .beforeEach(async () => {
        await waitForReact()
    })

test('Activate a square', async t => {
    const cell = await Selector('div.board-row').nth(2).find('button').nth(2)
    
    await t
        .click(cell)
        .expect(cell.getAttribute('class')).eql('square-on')
})
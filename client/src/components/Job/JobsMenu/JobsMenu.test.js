import { BrowserRouter } from 'react-router-dom'
import { render,screen } from '@testing-library/react';

import JobsMenu from './JobsMenu'

describe('JobsMenu',() => {
    it('Should have two buttons',async () => {
        render(
            <BrowserRouter>
                <JobsMenu />
            </BrowserRouter>);

        const buttons = await screen.findAllByRole('button')
        expect(buttons).toHaveLength(2)
    })

    it('First Button should be "add new job"',async () => {
        render(
            <BrowserRouter>
                <JobsMenu />
            </BrowserRouter>);

        const buttons = await screen.findAllByRole('button')
        expect(buttons[0]).toHaveTextContent('add new job');
    })

    it('Second Button should be "view all"',async () => {
        render(
            <BrowserRouter>
                <JobsMenu />
            </BrowserRouter>);

        const buttons = await screen.findAllByRole('button')
        expect(buttons[1]).toHaveTextContent('view all');
    })
})
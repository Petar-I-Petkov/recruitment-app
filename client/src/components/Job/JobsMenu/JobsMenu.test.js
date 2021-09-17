import { BrowserRouter } from 'react-router-dom';
import { render,screen } from '@testing-library/react';

import JobsMenu from './JobsMenu';

describe('JobsMenu component tests',() => {

    beforeEach(() => render(<BrowserRouter><JobsMenu /></BrowserRouter>))

    it('Should navigate to "/jobs/add" when "Add New Job" is pressed',async () => {
        const addNewJob = screen.getByRole('link',{ name: 'Add New Job' });
        expect(addNewJob).toHaveAttribute('href','/jobs/add');
    })

    it('Should navigate to "/jobs/all" when "View All" is pressed',async () => {
        const addNewJob = screen.getByRole('link',{ name: 'View All' });
        expect(addNewJob).toHaveAttribute('href','/jobs/all');
    })
})

// https://testing-library.com/docs/react-testing-library/example-intro/


    // it('Should have two buttons',async () => {


    //     render(
    //         <BrowserRouter>
    //             <JobsMenu />
    //         </BrowserRouter>);

    //     const buttons = await screen.findAllByRole('button')
    //     expect(buttons).toHaveLength(2)
    // })

    // it('First Button should be "add new job"',async () => {
    //     render(
    //         <BrowserRouter>
    //             <JobsMenu />
    //         </BrowserRouter>);

    //     const buttons = await screen.findAllByRole('button')
    //     expect(buttons[0]).toHaveTextContent('add new job');
    // })

    // it('Second Button should be "view all"',async () => {
    //     render(
    //         <BrowserRouter>
    //             <JobsMenu />
    //         </BrowserRouter>);

    //     const buttons = await screen.findAllByRole('button')
    //     expect(buttons[1]).toHaveTextContent('view all');

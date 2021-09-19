import { BrowserRouter } from 'react-router-dom';
import { render,screen,getByTestId } from '@testing-library/react';

import InterviewSlotItem from '../InterviewSlotItem/InterviewSlotItem';

import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin';
import useFetch from '../../../hooks/useFetch';

jest.mock('../../../utils/notificationPlugin/notificationPlugin')
jest.mock('../../../hooks/useFetch')

describe('InterviewSlotItem component tests',() => {

    it('Should render loading box when still no answer from job/candidate fetch',() => {

        useFetch.mockReturnValue({ response: null });
        render(<BrowserRouter><InterviewSlotItem /></BrowserRouter>);

        notificationPlugin.renderLoadingBoxLocalSmall.mockImplementation(() => { });
        expect(notificationPlugin.renderLoadingBoxLocalSmall).toBeCalledTimes(1);
    })

    it('Should render job and candidate info properly',() => {

        useFetch.mockReturnValueOnce({ response: { firstName: 'petar',lastName: 'georgiev' } });
        useFetch.mockReturnValueOnce({ response: { title: 'testJob1' } });

        render(<BrowserRouter><InterviewSlotItem /></BrowserRouter>);

        notificationPlugin.renderLoadingBoxLocalSmall.mockImplementation(() => { });
        expect(notificationPlugin.renderLoadingBoxLocalSmall).toBeCalledTimes(0);


        expect(document.getElementById('job-title')).toHaveTextContent('testJob1');
        expect(document.getElementById('candidate-name')).toHaveTextContent('petar georgiev');
    })


})






// import { rest } from 'msw'
// import { setupServer } from 'msw/node'

// const server = setupServer(
//     rest.get('/greeting',(req,res,ctx) => {
//         return res(ctx.json({ greeting: 'hello there' }))
//     }),
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

import { BrowserRouter } from 'react-router-dom';
import { render,screen } from '@testing-library/react';

import JobAll from './JobAll';

import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin';
import useFetch from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../utils/notificationPlugin/notificationPlugin');

describe('JobAll component tests',() => {

    it('Should render loading spin when no jobs are fetched',() => {

        useFetch.mockReturnValue({ response: null });

        render(<BrowserRouter><JobAll /></BrowserRouter>);

        notificationPlugin.renderLoadingBoxLocal.mockImplementation(() => { });
        expect(notificationPlugin.renderLoadingBoxLocal).toBeCalledTimes(1);
    })

    it('Should render fetched jobs',() => {

        notificationPlugin.renderLoadingBoxLocal.mockImplementation(() => { });
        const job1 = { _id: 1,title: 'job1',description: 'job1 description' };
        useFetch.mockReturnValue({ response: [job1] });

        render(<BrowserRouter><JobAll /></BrowserRouter>);

        expect(notificationPlugin.renderLoadingBoxLocal).toBeCalledTimes(0);

        const title = (document.getElementsByClassName('job-title')[0].textContent);
        const description = (document.getElementsByClassName('job-description')[0].textContent);

        expect(title).toBe('job1');
        expect(description).toBe('job1 description');
    })


})
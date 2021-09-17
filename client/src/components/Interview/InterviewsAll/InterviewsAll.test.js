import { BrowserRouter } from 'react-router-dom';
import { render,screen } from '@testing-library/react';

import InterviewsAll from '../InterviewsAll/InterviewsAll';

import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin';
import useFetch from '../../../hooks/useFetch';

jest.mock('../../../utils/notificationPlugin/notificationPlugin')
jest.mock('../../../hooks/useFetch')

describe('InterviewsAll Component tests',() => {

    it('Should render loading box when still no answer from fetching all interviews',() => {

        useFetch.mockReturnValue({ response: null });
        render(<BrowserRouter><InterviewsAll /></BrowserRouter>);
        notificationPlugin.renderLoadingBoxLocal.mockImplementation(() => { });
        expect(notificationPlugin.renderLoadingBoxLocal).toBeCalledTimes(1);
    })

    it('Should render fetched interviews',() => {

        notificationPlugin.renderLoadingBoxLocal.mockImplementation(() => { });
        const interview1 = {
            key: '1',
            _id: '1',
            candidateId: 'candidateId1',
            jobId: 'jobId1',
            slot: '1'
        };

        useFetch.mockReturnValueTi({ response: [interview1] });

        render(<BrowserRouter><InterviewsAll /></BrowserRouter>);

        expect(notificationPlugin.renderLoadingBoxLocal).toBeCalledTimes(0);

        const interviewSlotItemId = (document.getElementsByClassName('slot-container')[0].id);
        expect(interviewSlotItemId).toBe('1');

    })


})

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

        const interview2 = {
            key: '2',
            _id: '2',
            candidateId: 'candidateId2',
            jobId: 'jobId2',
            slot: '2'
        };

        useFetch.mockReturnValue({ response: [interview1,interview2] });

        render(<BrowserRouter><InterviewsAll /></BrowserRouter>);

        expect(notificationPlugin.renderLoadingBoxLocal).toBeCalledTimes(0);

        const interviewSlotItem1Id = (document.getElementsByClassName('slot-container')[0].id);
        const interviewSlotItem2Id = (document.getElementsByClassName('slot-container')[1].id);
        const interviewSlotItem3 = (document.getElementsByClassName('slot-container')[3]);
        expect(interviewSlotItem1Id).toBe('1');
        expect(interviewSlotItem2Id).toBe('2');
        expect(interviewSlotItem3).toBe(undefined);

    })


})

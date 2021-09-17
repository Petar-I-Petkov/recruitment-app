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


})

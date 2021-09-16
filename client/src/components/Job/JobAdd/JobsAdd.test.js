import { BrowserRouter } from 'react-router-dom'
import { render,fireEvent,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


import JobAdd from './JobAdd';
import * as jobservice from '../../../services/jobservice';


jest.mock('../../../services/jobservice');
jest.mock('../../../utils/notificationPlugin/notificationPlugin');



describe('JobAdd component tests',() => {

    it("Should call jobService.addJob() one time when Submit button is pressed",async () => {

        jobservice.addJob = jest.fn(() => { });
        jobservice.addJob.mockResolvedValue({});

        render(
            <BrowserRouter>
                <JobAdd />
            </BrowserRouter>);

        const submitBtn = screen.getByText('Submit');
        fireEvent.click(submitBtn);

        expect(jobservice.addJob).toBeCalledTimes(1);
    });

})

// const title = document.querySelector("input[name='title']")
// userEvent.type(title,'')
// expect(title.value).toBe('')

// const description = document.querySelector("textarea[name='description']")
// userEvent.type(description,'')
// expect(description.value).toBe('')

// describe('spying on "onSubmit" method', () => {
//     it('should call onSubmit when the button is clicked', () => {
//       const wrapper = shallow(<SignIn />); 
//       const instance = wrapper.instance();

//       jest.spyOn(instance, 'onSubmit');

//       wrapper.find('button').simulate('click');
//       expect(instance.onSubmit).toHaveBeenCalled();
//     });
//   });
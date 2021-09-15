import { render,screen } from '@testing-library/react'
import JobDetails from './JobDetails'

describe('JobDetails Component',() => {
    it('Should display job title',() => {
        render(<JobDetails />)
    })
})
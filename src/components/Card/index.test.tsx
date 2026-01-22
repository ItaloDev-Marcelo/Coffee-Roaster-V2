import { render, screen} from '@testing-library/react'
import CustomCard from '../Card/CustomCard'
import { MemoryRouter } from 'react-router-dom'

export const renderWithRouter = (ui: React.ReactElement) => {
        return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe('testing if CustomCard will render', () => {   

    it('Should render Card Type 1', () => {
       renderWithRouter(<CustomCard customType={1}
       data1={{title: 'Card Type 1', description: 'This is card type 1', style: '', imgSpace: '', icon: ''}}/>)
       expect(screen.getByText('Card Type 1')).toBeInTheDocument();
       expect(screen.getByText('This is card type 1')).toBeInTheDocument();

        screen.debug();
    })

    it('Should render Card Type 2', () => {
       renderWithRouter(<CustomCard customType={2}
       data2={{title: 'Card Type 2', description: 'This is card type 2', num: '01', hasAButton: true}}/>)
       expect(screen.getByText('Card Type 2')).toBeInTheDocument();
       expect(screen.getByText('This is card type 2')).toBeInTheDocument();

        screen.debug();
    })


})
import { render, screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest';
import NavLink from '../../Nav/Nav-link/NavLink'

describe('Nav component render', () => {
    
     it('Should render a Home', () => {
         const  handleNav = vi.fn();
         render( <MemoryRouter><NavLink path='/' name='Home' handleNav={handleNav} type={true} /></MemoryRouter> )
         expect(screen.getByText('Home')).toBeInTheDocument();
     })

     it('Should render a About us', () => {
         const  handleNav = vi.fn();
         render( <MemoryRouter><NavLink path='/About-us' name='About us' handleNav={handleNav} type={true} /></MemoryRouter> )
         expect(screen.getByText('About us')).toBeInTheDocument();
     })

      it('Should render a Create your plan', () => {
         const  handleNav = vi.fn();
         render( <MemoryRouter><NavLink path='/Create-Plan' name='Create your plan' handleNav={handleNav} type={true} /></MemoryRouter> )
         expect(screen.getByText('Create your plan')).toBeInTheDocument();
     })


})
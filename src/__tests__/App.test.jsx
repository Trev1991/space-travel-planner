import { describe,it,expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
describe('Space Travel Planner',()=>{ it('renders brand',()=>{ render(<BrowserRouter><App/></BrowserRouter>); expect(screen.getByText(/Space Travel Planner/i)).toBeInTheDocument()) }) })

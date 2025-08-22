import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import FleetPage from './routes/FleetPage.jsx'
import NewCraftPage from './routes/NewCraftPage.jsx'
import EditCraftPage from './routes/EditCraftPage.jsx'
import Dashboard from './routes/Dashboard.jsx'
import { FleetProvider } from './context/FleetContext.jsx'
function Nav(){ const nav = useNavigate(); return (<nav className='nav' aria-label='Primary'><div className='inner'><div className='brand'>🚀 <span>Space Travel Planner</span></div><div style={{display:'flex',gap:10}}><NavLink to='/'>Dashboard</NavLink><NavLink to='/fleet'>Fleet</NavLink><button onClick={()=>{ nav('/new')}} aria-label='Add spacecraft'>+ New</button></div></div></nav>) }
export default function App(){ return (<FleetProvider><Nav/><div className='container'><Routes><Route path='/' element={<Dashboard/>} /><Route path='/fleet' element={<FleetPage/>} /><Route path='/new' element={<NewCraftPage/>} /><Route path='/edit/:id' element={<EditCraftPage/>} /></Routes></div><footer className='container'>Space Travel Planner • Front‑end (View) in MERN with React • local data only</footer></FleetProvider>) }
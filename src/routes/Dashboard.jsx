import { Link } from 'react-router-dom'
import { useFleet } from '../context/FleetContext.jsx'
export default function Dashboard(){
  const { state } = useFleet()
  const active = state.spacecraft.filter(s=>s.status==='active').length
  const maintenance = state.spacecraft.filter(s=>s.status==='maintenance').length
  const decommissioned = state.spacecraft.filter(s=>s.status==='decommissioned').length
  return (<div className='grid'>
    <div className='card col-6'><h1>Mission Control</h1>
      <p className='badge ok'>Active: {active}</p> <p className='badge warn'>Maintenance: {maintenance}</p> <p className='badge err'>Decommissioned: {decommissioned}</p>
      <p style={{marginTop:10}}>Manage your fleet: <Link to='/fleet'><button>Open Fleet</button></Link> or create a new craft <Link to='/new'>here</Link>.</p>
    </div>
    <div className='card col-6'><h2>About</h2><p>Front‑end (View) of a MERN‑style project using React. Data is stored in localStorage so you can run this without a backend.</p>
      <ul><li>CRUD: create, edit, delete spacecraft</li><li>Search, filter, sort</li><li>Accessible forms, roles, and keyboard‑friendly controls</li></ul>
    </div></div>)
}
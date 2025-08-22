import { useMemo, useState } from 'react'
import { useFleet } from '../context/FleetContext.jsx'
import SpacecraftRow from '../components/SpacecraftRow.jsx'
import { Link } from 'react-router-dom'
export default function FleetPage(){
  const { state, removeCraft } = useFleet()
  const [q,setQ] = useState(''); const [status,setStatus] = useState(''); const [sort,setSort] = useState('name')
  const items = useMemo(()=>{
    let list = [...state.spacecraft]
    if(q) list = list.filter(s=> s.name.toLowerCase().includes(q.toLowerCase()))
    if(status) list = list.filter(s=> s.status===status)
    list.sort((a,b)=>{ if(sort==='name') return a.name.localeCompare(b.name); if(sort==='crew') return (b.crewCapacity||0)-(a.crewCapacity||0); if(sort==='range') return (b.rangeLY||0)-(a.rangeLY||0); return 0 })
    return list
  },[state.spacecraft,q,status,sort])
  return (<div>
    <h1>Fleet</h1>
    <div className='searchbar card'>
      <label>Search<br/><input value={q} onChange={e=>setQ(e.target.value)} placeholder='e.g., Enterprise' /></label>
      <label>Status<br/><select value={status} onChange={e=>setStatus(e.target.value)}><option value=''>All</option><option value='active'>active</option><option value='maintenance'>maintenance</option><option value='decommissioned'>decommissioned</option></select></label>
      <label>Sort<br/><select value={sort} onChange={e=>setSort(e.target.value)}><option value='name'>Name</option><option value='crew'>Crew</option><option value='range'>Range</option></select></label>
      <Link to='/new'><button aria-label='Add spacecraft'>+ New</button></Link>
    </div>
    <div className='card' role='region' aria-label='Fleet table'>
      <table className='table'><thead><tr><th>Craft</th><th>Status</th><th>Crew</th><th>Range (LY)</th><th>Launch</th><th>Actions</th></tr></thead>
        <tbody>{items.map(item => <SpacecraftRow key={item.id} item={item} onDelete={removeCraft} />)}{items.length===0 && <tr><td colSpan='6' style={{opacity:.8}}>No results</td></tr>}</tbody>
      </table>
    </div>
  </div>)
}
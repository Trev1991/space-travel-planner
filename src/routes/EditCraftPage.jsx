import { useNavigate, useParams } from 'react-router-dom'
import SpacecraftForm from '../components/SpacecraftForm.jsx'
import { useFleet } from '../context/FleetContext.jsx'
export default function EditCraftPage(){
  const { id } = useParams(); const { state, updateCraft } = useFleet(); const nav = useNavigate()
  const craft = state.spacecraft.find(s=>s.id===id); if(!craft) return <div className='card'>Not found</div>
  return (<div><h1>Edit {craft.name}</h1><SpacecraftForm initial={craft} onSubmit={(data)=>{ updateCraft(craft.id, data); nav('/fleet') }} submitLabel='Save changes'/></div>)
}
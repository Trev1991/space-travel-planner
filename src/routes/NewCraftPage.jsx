import { useNavigate } from 'react-router-dom'
import SpacecraftForm from '../components/SpacecraftForm.jsx'
import { useFleet } from '../context/FleetContext.jsx'
export default function NewCraftPage(){ const { addCraft } = useFleet(); const nav = useNavigate(); return (<div><h1>New Spacecraft</h1><SpacecraftForm onSubmit={(data)=>{ addCraft(data); nav('/fleet') }} submitLabel='Create'/></div>) }
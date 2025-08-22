import { Link } from 'react-router-dom'
export default function SpacecraftRow({item, onDelete}){
  return (<tr>
    <td><strong>{item.name}</strong><div style={{opacity:.8}}>{item.class}</div></td>
    <td><span className={'badge ' + (item.status==='active'?'ok':item.status==='maintenance'?'warn':'err')}>{item.status}</span></td>
    <td>{item.crewCapacity}</td><td>{item.rangeLY}</td><td>{item.launchDate}</td>
    <td className='actions'><Link to={`/edit/${item.id}`}><button aria-label={`Edit ${item.name}`}>Edit</button></Link><button onClick={()=>onDelete(item.id)} aria-label={`Delete ${item.name}`}>Delete</button></td>
  </tr>)
}
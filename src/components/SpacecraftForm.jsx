import { useState } from 'react'
import { validateCraft } from '../utils/validators.js'
export default function SpacecraftForm({initial={}, onSubmit, submitLabel='Save'}){
  const [form,setForm] = useState({ name:initial.name||'', class:initial.class||'', status:initial.status||'active', crewCapacity: initial.crewCapacity ?? 0, rangeLY: initial.rangeLY ?? 0, launchDate: initial.launchDate||'', notes: initial.notes||'' })
  const [errors,setErrors] = useState({})
  function change(e){ const {name,value} = e.target; setForm(p=>({...p,[name]: name==='crewCapacity'||name==='rangeLY'? Number(value): value})) }
  function submit(e){ e.preventDefault(); const errs = validateCraft(form); setErrors(errs); if(Object.keys(errs).length===0) onSubmit(form) }
  return (<form onSubmit={submit} className='card' aria-label='Spacecraft form'>
    <div className='grid'>
      <div className='col-6'><label>Name<br/><input name='name' value={form.name} onChange={change} aria-invalid={!!errors.name} aria-describedby='err-name' /></label>{errors.name && <div id='err-name' role='alert' style={{color:'salmon'}}>{errors.name}</div>}</div>
      <div className='col-6'><label>Class<br/><input name='class' value={form.class} onChange={change} aria-invalid={!!errors.class} aria-describedby='err-class' /></label>{errors.class && <div id='err-class' role='alert' style={{color:'salmon'}}>{errors.class}</div>}</div>
      <div className='col-6'><label>Status<br/><select name='status' value={form.status} onChange={change}><option value='active'>active</option><option value='maintenance'>maintenance</option><option value='decommissioned'>decommissioned</option></select></label>{errors.status && <div role='alert' style={{color:'salmon'}}>{errors.status}</div>}</div>
      <div className='col-6'><label>Crew Capacity<br/><input name='crewCapacity' type='number' min='0' value={form.crewCapacity} onChange={change} /></label>{errors.crewCapacity && <div role='alert' style={{color:'salmon'}}>{errors.crewCapacity}</div>}</div>
      <div className='col-6'><label>Range (light‑years)<br/><input name='rangeLY' type='number' min='0' value={form.rangeLY} onChange={change} /></label>{errors.rangeLY && <div role='alert' style={{color:'salmon'}}>{errors.rangeLY}</div>}</div>
      <div className='col-6'><label>Launch Date<br/><input name='launchDate' placeholder='YYYY‑MM‑DD' value={form.launchDate} onChange={change} /></label>{errors.launchDate && <div role='alert' style={{color:'salmon'}}>{errors.launchDate}</div>}</div>
      <div className='col-12'><label>Notes<br/><textarea name='notes' rows='3' value={form.notes} onChange={change} /></label></div>
    </div>
    <div style={{display:'flex',justifyContent:'flex-end',gap:8,marginTop:12}}><button type='submit'>{submitLabel}</button></div>
  </form>)
}
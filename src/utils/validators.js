export function validateCraft(data){
  const errors = {}
  if(!data.name?.trim()) errors.name = 'Name is required'
  if(!data.class?.trim()) errors.class = 'Class is required'
  if(!['active','maintenance','decommissioned'].includes(data.status)) errors.status = 'Status is required'
  const cap = Number(data.crewCapacity); if(!Number.isFinite(cap) || cap < 0) errors.crewCapacity = 'Crew capacity must be a non‑negative number'
  const range = Number(data.rangeLY); if(!Number.isFinite(range) || range < 0) errors.rangeLY = 'Range must be a non‑negative number'
  if(!/^\d{4}-\d{2}-\d{2}$/.test(String(data.launchDate||''))) errors.launchDate = 'Use YYYY‑MM‑DD'
  return errors
}
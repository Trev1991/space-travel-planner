const KEY = 'stp_fleet'
const seed = [
  { id:'NX-01', name:'Enterprise NX-01', class:'Explorer', status:'active', crewCapacity:83, rangeLY: 50, launchDate:'2151-04-16', notes:'Prototype warp 5 starship', createdAt:new Date().toISOString() },
  { id:'SR2', name:'Normandy SR-2', class:'Stealth Frigate', status:'maintenance', crewCapacity:60, rangeLY: 30, launchDate:'2185-10-05', notes:'Experimental stealth systems', createdAt:new Date().toISOString() },
  { id:'RKT-2077', name:'Odyssey', class:'Colony Ship', status:'decommissioned', crewCapacity:1200, rangeLY: 5000, launchDate:'2077-09-01', notes:'Generation vessel', createdAt:new Date().toISOString() }
]
export function loadFleet(){
  try { const raw = localStorage.getItem(KEY); if(!raw){ localStorage.setItem(KEY, JSON.stringify(seed)); return seed } return JSON.parse(raw) }
  catch { return seed }
}
export function saveFleet(items){ try{ localStorage.setItem(KEY, JSON.stringify(items)) }catch{} }
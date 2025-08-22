import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { loadFleet, saveFleet } from '../lib/storage.js'
import { uid } from '../utils/uid.js'
const FleetContext = createContext()
const initialState = { spacecraft: [] }
function reducer(state, action){
  switch(action.type){
    case 'INIT': return { spacecraft: action.payload }
    case 'ADD': return { spacecraft: [action.payload, ...state.spacecraft] }
    case 'UPDATE': return { spacecraft: state.spacecraft.map(s => s.id === action.payload.id ? {...s, ...action.payload} : s) }
    case 'REMOVE': return { spacecraft: state.spacecraft.filter(s => s.id !== action.payload) }
    default: return state
  }
}
export function FleetProvider({children}){
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(()=>{ dispatch({ type:'INIT', payload: loadFleet() }) },[])
  useEffect(()=>{ saveFleet(state.spacecraft) },[state.spacecraft])
  const actions = useMemo(()=> ({
    addCraft: (data) => dispatch({ type:'ADD', payload: { ...data, id: uid(), createdAt: new Date().toISOString() } }),
    updateCraft: (id, patch) => dispatch({ type:'UPDATE', payload: { id, ...patch } }),
    removeCraft: (id) => dispatch({ type:'REMOVE', payload: id })
  }), [])
  return <FleetContext.Provider value={{ state, ...actions }}>{children}</FleetContext.Provider>
}
export function useFleet(){ const ctx = useContext(FleetContext); if(!ctx) throw new Error('useFleet must be used inside provider'); return ctx }
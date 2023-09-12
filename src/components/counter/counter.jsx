import  {  useContext, useState } from 'react'
import { Context, CtxProvider } from '../../context/context'

export default function Counter() {
    var {ctx,setctx,aa,setaa} = useContext(Context)

  return (
    <>
        <button className='btn btn-primary' onClick={()=>setctx(ctx+1)}>+</button>
        <div>{ctx}</div>
        <button className='btn btn-primary' onClick={()=>setctx(ctx-1)}>-</button>
        <div></div>
        <button className='btn btn-primary' onClick={()=>setaa(aa+1)}>+</button>
        <div>{aa}</div>
        <button className='btn btn-primary' onClick={()=>setaa(aa-1)}>-</button>

    </>
  )
}

import React from 'react'
import "./Card.css"

export default function Card({name,info,raodenoba,fasi,color}) {
  return (
    <div className='card'>
        <h1>Name: {name}</h1>
        <h2>raodenoba: {raodenoba}</h2>
        <h2>color: {color}</h2>
        <h2>$: {fasi}</h2>
        <p>info:{info}</p>
    </div>
  )
}

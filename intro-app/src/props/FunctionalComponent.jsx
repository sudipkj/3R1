import React from 'react'
import classCSS from '../props/FunctionalComponent.css'

export default function FunctionalComponent(props) {
  return (
    <div>
      <p className='classCSS.p'>{props.data}</p>
    </div>
  )
}

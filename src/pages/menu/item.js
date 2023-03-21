import React from 'react'

function Item({props, select}) {
    const {name, price, description}  = props
  return (
    <div>
        <div className='item-title-cont' onClick={()=>select(props)}>
            <h4>{name}</h4>
            <span>{price}$</span>
        </div>
        <div className='item-description-cont'>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Item
import React, { useState } from 'react'

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [show, setShow] = useState(false)

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {show ? info : `${info.substring(0, 200)}...`}{' '}
          <button onClick={() => setShow(!show)}>
            {show ? 'See Less' : 'Read More'}
          </button>{' '}
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          Not Interested?
        </button>
      </footer>
    </article>
  )
}

export default Tour

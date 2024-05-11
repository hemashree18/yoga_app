import React from 'react'

const Card = ({item}) => {
    console.log(item)
    const {image,name} = item;
  return (
    <div className='shadow-lg rounded-lg p-3 flex flex-col justify-between border border-secondary overflow-hidden m-4 '>
        <img src={image} alt="" />
        <div>
            <h2 className='text-xl font-semibold mb-2 dark:text-white'>{name}</h2>
        </div>
    </div>
  )
}

export default Card
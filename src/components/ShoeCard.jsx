import React from 'react'

const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {
  const handelClick = () => {
    if(bigShoeImg != imgURL.bigShoe){
      changeBigShoeImage(imgURL.bigShoe)
    }
  }
  return (
    <div className={`
      border-2 rounded-xl cursor-pointer max-sm:flex-1 
      ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}
    `}
      onClick={handelClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:4'>
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default ShoeCard
import React from 'react'

const TiltText = (props) => {
  return (
                <div
                    id='tiltdiv'
                    ref={props.abc}
                    className='text-white uppercase mt-40 transition-transform duration-200 ease-out'
                >
                    <h1 className='text-7xl font-bold'> i am <span className='text-black'>Dark M<span className='text-green-500'>o</span>de</span>™ </h1>
                    <h1 className='text-9xl font-bold'> Designer </h1>
                    <h1 className='text-7xl font-bold'> T<span className='text-green-500'>o</span> hire</h1>
                </div>
  )
}

export default TiltText

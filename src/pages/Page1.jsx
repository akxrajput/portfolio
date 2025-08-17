import React, { useRef } from 'react'
import anzo from '../assets/anzo.avif'
import Page1Bottom from '../components/Page1Bottom'
import bg from '../assets/bg2.png'
import TiltText from '../components/TiltText'
import anzo2 from '../assets/anzo-style.JPG'
import anzo3 from '../assets/anzo-style1-contrast.JPG'


const Page1 = () => {
    const tiltRef = useRef(null)

    const mouseMoving = (e) => {
        const { left, top, width, height } = tiltRef.current.getBoundingClientRect()
        const x = e.clientX - left
        const y = e.clientY - top

        const rotateX = ((y / height) - 0.5) * -30
        const rotateY = ((x / width) - 0.5) * 30

        tiltRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const resetTilt = () => {
        tiltRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`
    }

    return (
        <div className='bg-white h-screen px-8 py-8' onMouseMove={mouseMoving} onMouseLeave={resetTilt}>
            <div
                id='page-tilt'
                className='h-full p-10 bg-cover bg-center w-full shadow-xl shadow-gray-500 rounded-3xl'
                style={{ backgroundImage: `url(${anzo3})`, perspective: '1000px' }}
            >
                <TiltText abc={tiltRef}/>
                <Page1Bottom />
            </div>
        </div>
    )
}

export default Page1

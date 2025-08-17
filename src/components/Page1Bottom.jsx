import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Page1Bottom = () => {

    useGSAP(function(){
        gsap.to('.spinning-logo' , {
            rotate : 360 ,
             duration : 2,
             repeat : -1 , 
             ease : "linear"
        })
    })
  return (
    <div className=' absolute left-0 bottom-0 p-20 text-white w-full flex items-center justify-between '>
      <div>
        <h1 className='text-2xl'>BRAND DESIGN | WEB DESIGN</h1>
        <h3 className=' text-xl font-bold font-tangerine' style={{
            fontFamily : 'Allura'
        }}> <span>By</span>  <span className='ml-2 mr-2'>Akshay</span> Girase</h3>
      </div>    
      <div>
        <img className="spinning-logo" src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
      </div>
    </div>
  )
}

export default Page1Bottom

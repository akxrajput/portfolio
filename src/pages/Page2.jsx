import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'



const Page2 = () => {
        gsap.registerPlugin(ScrollTrigger)
        useGSAP(function(){
            gsap.from("#rotateText" ,{
                transform : 'rotateX(-80deg)' ,
                opacity : 0 ,
                duration : 1 ,
                stagger : 1 , 
                scrollTrigger :{
                    trigger : "#rotateText" ,
                    // markers : true ,
                    start: 'top 60%' ,
                    end : 'top -250%' ,
                    scrub : true

                }
            })
        })
  return (
    <div className='section2 bg-white text-center text-black p-20'>
      <h3 className='text-gray-400 text-2xl font-sans'>© akx.studi<span className='text-green-500'>o</span> | designed and devel<span className='text-green-500'>o</span>ped</h3>
      <div id='rotateText' className=''>
        <h1 className='text-[16vw] font-bold'>IMPACTFUL</h1>
      </div>
      <div id='rotateText' className=''>
        <h1 className='text-[16vw] font-bold'>DESIGN</h1>
      </div>
      <div id='rotateText' className=''>
        <h1 className='text-[16vw] font-bold'>IS THE</h1>
      </div>
      <div id='rotateText' className=''>
        <h1 className='text-[16vw] font-bold'>DESIGN</h1>
      </div>
      <div id='rotateText' className=''>
        <h1 className='text-[16vw] font-bold'>THAT</h1>
      </div>
      <div id='rotateText' className=''>
        <h1 className='text-[16vw] font-bold'>W<span className='text-green-500'>O</span>RKS</h1>
      </div>

     
    </div>
  )
}

export default Page2

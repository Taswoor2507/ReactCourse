import React from 'react'
import girlImage from '../assets/img1.jpg'
const Hero = () => {
  return (
    <div className='bg-slate-300 min-h-[100vh]'>
    <h1 className='text-3xl'>Lorem ipsum dolor sit amet.</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eos deserunt maxime rerum cumque illum ab blanditiis nemo tempora non facere quae similique quibusdam, impedit est mollitia suscipit, tempore laborum.
    </p>  
    <img src='https://img.freepik.com/free-photo/excited-stylish-curly-haired-girl-sunglasses-pointing-right-showing-way_176420-20193.jpg?t=st=1725377160~exp=1725380760~hmac=fd9f7b9a8c6a87bda85a12f93d79f45e7d1d27e0e0b9bc5a39a35a40546da50b&w=740' />

    <img className='w-60' src={girlImage} />
    
    </div>
   
)
}

export default Hero
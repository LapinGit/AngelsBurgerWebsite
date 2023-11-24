import React from 'react'



const page = () => {
  return (
<div>
  <div className="  relative w-screen h-[30vh] overflow-hidden">
    <img src="/About.png" alt="Avatar" className="object-cover w-full h-full blur" />
    <div className="  font-bold absolute py-3.5 bottom-20 inset-x-4  text-black text-7xl uppercase text-center ">Contact Us</div>
  </div>
  <div className='flex	'>
    <div>
      <img className=' h-[50vh] pl-7 mr-7   mt-2 mb-3   xl:flex hidden
 ' src="/Contact.png" alt="" />
    </div>
    <div>
    <p className='text-3xl mt-10'>For press, partner or shop related related inquiries, please email us at the corresponding addresses below.</p>
    <p className='text-3xl mt-10'>Partner inquiries:</p>
   <p  className='underline underline-offset-1 text-xl cursor-pointer	'>partners@angelsburger.com</p>
   <p className='text-3xl mt-4'>Press inquiries:</p>
   <p  className='underline underline-offset-1 text-xl cursor-pointer	'>press@angelsburger.com</p>
   <p className='text-3xl mt-4'>Customer Support:</p>
   <p  className='underline underline-offset-1 text-xl cursor-pointer	'>wecare@angelsburger.com</p>
    </div>
  </div>
</div>
    )
}

export default page
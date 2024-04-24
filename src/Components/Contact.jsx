import React from 'react'

export default function Contact() {
  return (
    <div id='Contacts' className='p-4 lg:p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-left' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Contact with Me</h1>
      <form action='' className='flex flex-col gap-2 lg:w-1/2'>
        <div class="lg:flex gap-9">
            <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4  border-2 border-fuchsia-800 b_glow text-xl text-slate-500" placeholder='Enter your Name' type='text' />
            <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4  border-2 border-fuchsia-800 b_glow text-xl text-slate-500" placeholder='Enter your Email' type='email' />
        </div>
        <textarea  className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800  b_glow text-xl text-slate-500" placeholder='write your Message..' name="" id='' cols="20" rows="10"/>
        <button class='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 uppercase relative overflow-hidden b_glow text-xl text-bold mb-10' type='submit'>Submit</button>
      </form>
    </div>
  )
}

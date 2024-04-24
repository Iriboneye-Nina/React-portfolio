import img from '../assets/flower-image.jpg'


export default function Projects() {
  return (
    <div id='Projects'className='p-20 flex flex-col items-center justify-center'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Projects</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10'>
      <img data-aos='fade-up' height={250} width={250} className=' flex items-center justify-center font-semibold  rounded-3xl h-36 w-44 p-1 border-fuchsia-800 b_glow' src={img} alt="" />
      <img data-aos='fade-down' height={250} width={250} className=' flex items-center justify-center font-semibold  rounded-3xl h-36 w-44 p-1 border-fuchsia-800 b_glow' src={img} alt="" />
      <img data-aos='fade-up' height={250} width={250} className=' flex items-center justify-center font-semibold  rounded-3xl h-36 w-44 p-1 border-fuchsia-800 b_glow' src={img} alt="" />
      <img data-aos='fade-down' height={250} width={250} className=' flex items-center justify-center font-semibold  rounded-3xl h-36 w-44 p-1 border-fuchsia-800 b_glow' src={img}  alt="" />
      </div>
   
    </div>

  )
}

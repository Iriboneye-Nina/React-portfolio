import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
   <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
    <div className="contsiner mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="mb-4 md:mb-0">
        <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase">logo</span>
        <p className="text-[16px] my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, ratione voluptate laborum sequi 
          nesciunt expedita at officia commodi inventore porro,</p> 
      </div>
      <div>
        <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Services</h2>
        <ul className="text-[16px] my-4">
          <li className="my-2">Web disgn</li>
          <li className="my-2">Web development</li>
          <li className="my-2">SEO</li>
          <li className="my-2">E-commererce</li>
        </ul>
      </div>
      <div className="mb-4 md:mb-0">
        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Contact</h2>
        <p className="text[16px] my-4">Email:ninairiboneye@gmail.com</p>
        <p className="text[16px] my-4">phone: +0786187966</p>
      </div>
      <div>
      <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow Me</h2>
      <div className="flex space-x-4">
        <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href=''>
          <FaGithub />
        </a>
        <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href=''>
          <FaLinkedin />
        </a>
        <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href=''>
          <FaGithub />
        </a>
        <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href=''>
          <FaInstagram />
        </a>
        </div>
      </div>
    </div>
   </footer>
  )
}

export default Footer

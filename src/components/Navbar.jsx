import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const openMenu = () => {
    setToggle((prev) => !prev);
  }

  return (
    <div className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 gap-10'>
        {navLinks.map((nav) => (
          <a href={`#${nav.id}`} key={nav.id}>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}
            >
              {nav.title}
            </li>
          </a>
        ))}
      </ul>

      {/* mobile menu */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          src={toggle ? close : menu} 
          alt="menu" 
          className="w-[28px] h-[28px] object-contain"
          onClick={openMenu} 
        />
        <div>
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1 gap-4'>
              {navLinks.map((nav) => (
                <a href={`#${nav.id}`} key={nav.id}>
                  <li
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}
                  >
                    {nav.title}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
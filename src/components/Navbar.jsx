import { useEffect, useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const openMenu = () => {
    setToggle((prev) => !prev);
  }

  const handleKeyDown = (e) => {
    // Check if the pressed key is "Enter"
    if (e.key === 'Enter') {
      openMenu();
    }
  };

  const handleScroll = () => {
    // Get all section elements
    const sections = document.querySelectorAll('section');

    // Find the section in view
    let currentSection = '';
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom > 0) {
        currentSection = section.id;
      }
    });

    // Update the active link
    setActiveLink(currentSection);
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='fixed top-0 left-0 w-full flex py-6 px-6 justify-between items-center z-[3] navbar'>
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 gap-10'>
        {navLinks.map((nav) => (
          <a href={`#${nav.id}`} key={nav.id} className={activeLink === nav.id ? 'active' : ''}>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-secondary`}
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
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={openMenu}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex="0"
          aria-label={toggle ? "Close Menu" : "Open Menu"}
          aria-expanded={toggle ? "true" : "false"}
        />
        <div>
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1 gap-4'>
              {navLinks.map((nav) => (
                <a href={`#${nav.id}`} key={nav.id}>
                  <li
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-secondary`}
                    onClick={toggle ? () => setToggle(false) : null}
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
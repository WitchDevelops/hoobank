import styles from '../style';
import { logo, copyrightSign } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="bank logo"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className='flex-1 w-full flex sm:flex-row flex-col justify-between flex-wrap gap-10 md:mt-0 mt-10 font-poppins text-white'>
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title}>
              <h4 className="font-medium text-[18px] leading-[27px]">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={` font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className='footer-line' />
      <div className='flex flex-center md:flex-row flex-col justify-between items-center w-full'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite'>
          <span className='font-abel'>Copyright</span>
          <img src={copyrightSign} alt='' className='inline-flex mx-2' />
          2021 HooBank. All Rights Reserved.
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <div className='footer-icon w-[56px] h-[56px] flex flex-center align-center' key={social.id}>
              <img
                src={social.icon}
                alt={social.id}
                className={` object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
                onClick={() => window.open(social.link)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer
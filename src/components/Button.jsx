import React from 'react'

const Button = ({styles}) => {
  return (
    <a href='#cta' type='button' className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Get started
    </a>
  )
}

export default Button
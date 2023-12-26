

const Button = ({ styles }) => {
  const buttonStyles = `py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`
  return (
    <a
      href='#cta'
      type='button'
      className={`${buttonStyles} btn`}
    >
      Get started
    </a>
  )
}

export default Button
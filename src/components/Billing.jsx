import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='example billing' className='w-[100%] h-[100%] relative z-[3]' />
        <div className='absolute z-[2] -left-1/2 top-0 w-[100%] h-[100%] rounded-full white__gradient'></div>
        <div className='absolute z-[1] -left-1/2 bottom-0 w-[75%] h-[75%] rounded-full pink__gradient'></div>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br />billing & invoicing
        </h2>
        <p className={styles.paragraph}>
          All your bills and invoices now in one place, in a modern and transparent interface give you peace of mind. You'll never have to worry about losing control of your finances again.
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <a href="https://www.apple.com/app-store/" target="_blank">
            <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          </a>
          <a href="https://play.google.com/store/apps" target="_blank">
            <img src={google} alt="google_store" className='w-[144px] h-[42px] object-contain cursor-pointer' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Billing
import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <section className='text-white font-poppins flex sm:flex-row flex-column content-center flex-wrap sm:mb-20 mb-6'>
      {stats.map((stat, index) => (
        <div key={stat.id} id={stat.id} className='flex-1 flex justify-start md:justify-around items-center flex-row m-3 gap-3'>
          <h4 className='font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>{stat.value}</h4>
          <p className='font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase'>{stat.title}</p>
          {index < stats.length - 1 && <div className='hidden sm:block line'></div>}
        </div>
      ))}
    </section>
  )
}

export default Stats
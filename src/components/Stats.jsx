import { useEffect, useState } from 'react';
import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  const [animatedStats, setAnimatedStats] = useState([]);

  useEffect(() => {
    const animationDuration = 2000; // 2000 milliseconds (2 seconds)

    const animateNumbers = () => {
      const interval = animationDuration / 50; // Update every 40 milliseconds

      stats.forEach((stat, index) => {
        const step = stat.value / (animationDuration / interval);
        let currentCount = 0;

        const intervalId = setInterval(() => {
          currentCount += step;
          setAnimatedStats((prevStats) => [
            ...prevStats.filter((prevStat) => prevStat.id !== stat.id),
            {
              ...stat,
              animatedValue: index === 2 ? `$${Math.round(currentCount)}M+` : `${Math.round(currentCount)}+`,
            },
          ]);

          if (currentCount >= stat.value) {
            clearInterval(intervalId);
          }
        }, interval);
      });
    };

    animateNumbers();
  }, []); // Run this effect only once when the component mounts

  return (
    <section className='text-white font-poppins flex sm:flex-row flex-column content-center flex-wrap sm:mb-20 mb-6'>
      {animatedStats.map((stat, index) => (
        <div key={stat.id} id={stat.id} className='flex-1 flex justify-start md:justify-around items-center flex-row m-3 gap-3'>
          <h4 className='font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>
            {stat.animatedValue}
          </h4>
          <p className='font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase'>
            {stat.title}
          </p>
          {index < stats.length - 1 && <div className='hidden sm:block line'></div>}
        </div>
      ))}
    </section>
  );
};

export default Stats;

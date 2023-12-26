import { clients } from '../constants';
import styles from '../style';
import { useEffect, useRef } from 'react';

const Clients = () => {
  const containerRef = useRef(null);
  const iterations = 5;

  useEffect(() => {
    const container = containerRef.current;

    // Clone each client element and append it to the end, repeating for a certain number of iterations
    for (let i = 0; i < iterations; i++) {
      clients.forEach(client => {
        const clone = document.createElement('div');
        clone.innerHTML = `<img src="${client.logo}" alt="client_logo" class='w-[100px] h-[100px] object-contain logo' />`;
        container.appendChild(clone.firstChild);
      });
    }

    // Animate the container
    container.style.animation = `slide ${clients.length * iterations * 5}s linear infinite`;
  }, [iterations]);

  return (
    <section className={`${styles.flexCenter} my-4 overflow-hidden`}>
      <div ref={containerRef} className='flex items-center w-full gap-10'>
        {clients.map(client => (
          <div key={client.id} className='px-10 rounded-[20px]'>
            <img src={client.logo} alt="client_logo" className='w-[100px] h-[100px] object-contain logo' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;



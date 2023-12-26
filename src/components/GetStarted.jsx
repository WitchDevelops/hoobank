import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <a href='#cta'>
      <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full get-started`}>
          <div className={`${styles.flexStart} flex-col gap-2`}>
            <p className={`${styles.flexStart} gap-2`}>
              <span className="font-poppins font-medium text-[18px] leading-[23px] text-gradient">
                Get
              </span>
              <img
                className="w-[23px] h-[23px] object-contain"
                alt="arrow"
                src={arrowUp} />
            </p>
            <p className="font-poppins font-medium text-[18px] leading-[23px] text-gradient">
              Started
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default GetStarted
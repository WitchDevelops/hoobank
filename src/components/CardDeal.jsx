import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={`${layout.sectionInfo} font-poppins`}>
        <h2 className={styles.heading2}>Find a better card deal in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Discover unbeatable credit card deals effortlessly with our modern banking app – your gateway to securing financial advantages in just a few simple steps</p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>
    </section>
  )
}

export default CardDeal
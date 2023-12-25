import { Billing, Business, Button, CardDeal, Clients, CTA, FeedbackCard, Footer, GetStarted, Hero, Navbar, Stats, Testimonials } from './components';
import styles from './style';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <nav className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </nav>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>


    </div>
  )
}

export default App
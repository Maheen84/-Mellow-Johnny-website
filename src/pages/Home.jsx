import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import Guarantees from '../components/Guarantees'
import CafeSection from '../components/CafeSection'
import CommunityRides from '../components/CommunityRides'
import './Home.css'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Mellow Johnny's | Austin's Premier Bike Shop</title>
        <meta
          name="description"
          content="Austin's best full-service bike shop since 2008. Expert sales, 24-hour repair, Retül fitting, rentals, group rides, and Juan Pelota Café — at 400 Nueces St near Lady Bird Lake."
        />
      </Helmet>

      <div className="page home-page">
        <Hero />
        <ServicesGrid />
        <Guarantees />
        <CafeSection />
        <CommunityRides />

        {/* Footer CTA Strip */}
        <section className="home-cta-strip" aria-labelledby="home-cta-heading">
          <div className="container home-cta-strip__inner">
            <div className="home-cta-strip__text">
              <h2 id="home-cta-heading">Ready to ride?</h2>
              <p>Come see us at 400 Nueces St, right on Austin's cycling network.</p>
            </div>
            <div className="home-cta-strip__actions">
              <Link to="/services" className="btn btn-primary">Shop Bikes</Link>
              <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

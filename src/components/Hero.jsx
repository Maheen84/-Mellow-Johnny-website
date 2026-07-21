import { Link } from 'react-router-dom'
import heroImg from '../assets/hero_bike_shop.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero banner">
      {/* Radial glow layer — sits behind content, in front of bg */}
      <div className="hero__glow" aria-hidden="true" />

      {/* Background image — dimmed */}
      <div className="hero__bg" aria-hidden="true">
        <img
          src={heroImg}
          alt=""
          className="hero__bg-img"
        />
        <div className="hero__bg-overlay" />
      </div>

      <div className="container hero__inner">
        {/* Badge — first in */}
        <div className="hero__badge hero-enter hero-enter--fade hero-enter-d1">
          <span className="hero__badge-dot" aria-hidden="true" />
          Austin's Cycling Hub · Est. 2008
        </div>

        {/* Headline — two lines staggered */}
        <h1 className="hero__title">
          <span className="hero__title-line hero-enter hero-enter-d2">
            Austin's Premier
          </span>
          <span className="hero__title-accent hero-enter hero-enter-d3">
            Bike Shop
          </span>
        </h1>

        {/* Subheadline */}
        <p className="hero__subtitle hero-enter hero-enter-d4">
          Full-service sales, expert repair, custom fitting, and café — right on the Butler Trail.
        </p>

        {/* Trust pills */}
        <div className="hero__trust hero-enter hero-enter-d5">
          <span className="hero__trust-pill">✓ 90-Day Satisfaction Guarantee</span>
          <span className="hero__trust-pill">✓ Price-Match Guarantee</span>
          <span className="hero__trust-pill">✓ 24-Hr Repair Turnaround</span>
        </div>

        {/* CTAs */}
        <div className="hero__ctas hero-enter hero-enter-d6">
          <Link to="/services" className="btn btn-primary hero__btn-primary">
            Shop Bikes
          </Link>
          <Link to="/contact" className="btn btn-outline hero__btn-outline">
            Book Service
          </Link>
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import cafeImg from '../assets/cafe_interior.png'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './CafeSection.css'

export default function CafeSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="cafe" aria-labelledby="cafe-heading" ref={ref}>
      <div className="container">
        <div className="cafe__inner">

          {/* Image — scale-in reveal */}
          <div className={`cafe__image-wrap reveal reveal--img${isVisible ? ' reveal--visible' : ''}`}>
            <img
              src={cafeImg}
              alt="Juan Pelota Café patio at Mellow Johnny's Austin — espresso bar with outdoor seating"
              className="cafe__image"
            />
            <div className="cafe__image-tag">
              Open Daily
            </div>
          </div>

          {/* Content — slides up slightly after image */}
          <div className={`cafe__content reveal stagger-2${isVisible ? ' reveal--visible' : ''}`}>
            <span className="section-label">On-Site Café</span>
            <h2 id="cafe-heading">Juan Pelota Café</h2>
            <div className="divider" />
            <p className="lead">
              Named for a certain Texan cyclist's alter ego, Juan Pelota is where the ride ends and the conversation begins.
            </p>
            <p className="cafe__body">
              Sip a pour-over, grab a smoothie, or kick back with a local beer or glass of wine on our patio — which doubles as one of Austin's best neighborhood social spots. Whether you're fueling up pre-ride or cooling down after, Juan Pelota keeps you right in the center of Austin's cycling community.
            </p>

            <ul className="cafe__menu-highlights">
              <li>Specialty Coffee &amp; Espresso</li>
              <li>Fresh Smoothies &amp; Juices</li>
              <li>Local Craft Beer on Tap</li>
              <li>Wine Selection</li>
              <li>Outdoor Patio Seating</li>
            </ul>

            <Link to="/contact" className="btn btn-outline cafe__btn">
              Find Us on the Map
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

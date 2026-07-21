import { Link } from 'react-router-dom'
import { Bike, MapPin, Phone, Mail, Clock } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      {/* Attribution banner */}
      <div className="attribution-banner">
        <span>
          Designed &amp; Developed by{' '}
          <a href="mailto:biztechresourceanalyst@gmail.com" className="attribution-banner__link">
            BizTech Resource Analyst
          </a>
        </span>
      </div>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer__grid">

            {/* Brand column */}
            <div className="footer__brand">
              <div className="footer__logo">
                <Bike size={26} strokeWidth={2} />
                <span>Mellow Johnny's</span>
              </div>
              <p className="footer__tagline">
                Austin's home for bikes, coffee, and community — since 2008.
              </p>
              <div className="footer__social" aria-label="Social links">
                <a href="https://www.facebook.com/mellowjohnnys" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">FB</a>
                <a href="https://www.instagram.com/mellowjohnnys" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">IG</a>
                <a href="https://www.strava.com" target="_blank" rel="noopener noreferrer" aria-label="Strava" className="footer__social-link">STR</a>
              </div>
            </div>

            {/* Navigation */}
            <div className="footer__col">
              <h4 className="footer__col-title">Explore</h4>
              <ul className="footer__links">
                <li><Link to="/" className="footer__link">Home</Link></li>
                <li><Link to="/about" className="footer__link">About Us</Link></li>
                <li><Link to="/services" className="footer__link">Services</Link></li>
                <li><Link to="/contact" className="footer__link">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer__col">
              <h4 className="footer__col-title">Services</h4>
              <ul className="footer__links">
                <li><Link to="/services" className="footer__link">Bike Sales</Link></li>
                <li><Link to="/services" className="footer__link">Repair &amp; Tune-Up</Link></li>
                <li><Link to="/services" className="footer__link">Retül Bike Fitting</Link></li>
                <li><Link to="/services" className="footer__link">Rentals</Link></li>
                <li><Link to="/services" className="footer__link">Group Rides</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4 className="footer__col-title">Visit Us</h4>
              <address className="footer__address">
                <div className="footer__contact-row">
                  <MapPin size={15} />
                  <span>400 Nueces St, Austin, TX 78701</span>
                </div>
                <div className="footer__contact-row">
                  <Phone size={15} />
                  <a href="tel:+15124574549" className="footer__link">(512) 457-4549</a>
                </div>
                <div className="footer__contact-row">
                  <Mail size={15} />
                  <a href="mailto:sales@mellowjohnnys.com" className="footer__link">sales@mellowjohnnys.com</a>
                </div>
                <div className="footer__contact-row">
                  <Clock size={15} />
                  <span>Mon–Fri 9am–7pm · Sat–Sun 9am–6pm</span>
                </div>
              </address>
            </div>

          </div>

          <div className="footer__bottom">
            <p>&copy; {year} Mellow Johnny's, LLC. All rights reserved.</p>
            <p>400 Nueces St, Austin, TX 78701 · <a href="mailto:sales@mellowjohnnys.com" className="footer__link">sales@mellowjohnnys.com</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}

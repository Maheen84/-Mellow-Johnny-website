import { Helmet } from 'react-helmet-async'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import MapEmbed from '../components/MapEmbed'
import trailImg from '../assets/trail_lake.png'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

const hours = [
  { days: 'Monday \u2013 Friday', hours: '9:00 AM \u2013 7:00 PM' },
  { days: 'Saturday', hours: '9:00 AM \u2013 6:00 PM' },
  { days: 'Sunday', hours: '9:00 AM \u2013 6:00 PM' },
]

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '400 Nueces St, Austin, TX 78701',
    href: 'https://maps.google.com/?q=400+Nueces+St+Austin+TX+78701',
    external: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(512) 457-4549',
    href: 'tel:+15124574549',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@mellowjohnnys.com',
    href: 'mailto:sales@mellowjohnnys.com',
  },
]

export default function Contact() {
  const { ref: mainRef, isVisible: mainVisible } = useScrollReveal()

  return (
    <>
      <Helmet>
        <title>Contact | Mellow Johnny's — 400 Nueces St, Austin TX</title>
        <meta
          name="description"
          content="Visit Mellow Johnny's at 400 Nueces St, Austin TX 78701. Call (512) 457-4549, email sales@mellowjohnnys.com, or fill out our contact form. Open daily."
        />
      </Helmet>

      <div className="page contact-page">

        {/* Page Header — staged entrance */}
        <section className="page-header contact-header" aria-label="Contact page header">
          <div className="container page-header__content">
            <span className="section-label page-enter page-enter-d1">We're Here</span>
            <h1 className="page-header__title page-enter page-enter-d2">Get In Touch</h1>
            <p className="page-header__subtitle page-enter page-enter-d3">
              Right on the trail. Right in the heart of Austin's cycling district.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="contact-main" aria-labelledby="contact-info-heading" ref={mainRef}>
          <div className="container contact-main__grid">

            {/* Left: Info */}
            <div className={`contact-info reveal${mainVisible ? ' reveal--visible' : ''}`}>
              <span className="section-label">Find Us</span>
              <h2 id="contact-info-heading">Visit the Shop</h2>
              <div className="divider" />

              <div className="contact-info__details">
                {contactInfo.map(({ icon: Icon, label, value, href, external }, i) => (
                  <div
                    key={label}
                    className={`contact-info__row reveal stagger-${i + 1}${mainVisible ? ' reveal--visible' : ''}`}
                  >
                    <div className="contact-info__icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="contact-info__label">{label}</div>
                      <a
                        href={href}
                        className="contact-info__value"
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="contact-hours" aria-labelledby="hours-heading">
                <h3 id="hours-heading" className="contact-hours__title">
                  <Clock size={16} />
                  Store Hours
                </h3>
                <table className="contact-hours__table" aria-label="Store hours">
                  <tbody>
                    {hours.map(({ days, hours: h }) => (
                      <tr key={days} className="contact-hours__row">
                        <td className="contact-hours__days">{days}</td>
                        <td className="contact-hours__time">{h}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Getting Here */}
              <div className="contact-getting-here">
                <h3 className="contact-getting-here__title">Getting Here</h3>
                <p className="contact-getting-here__text">
                  Located on Nueces St in downtown Austin, steps from the Butler Trail entry point and Lady Bird Lake. Street parking available. Easy bike access directly from the trail network.
                </p>
              </div>
            </div>

            {/* Right: Form — stagger after info */}
            <div className={`contact-form-col reveal stagger-2${mainVisible ? ' reveal--visible' : ''}`}>
              <span className="section-label">Send a Message</span>
              <h2 className="contact-form-col__heading">How Can We Help?</h2>
              <div className="divider" />
              <p className="contact-form-col__intro lead">
                Questions about a bike, a repair, a fitting, or a rental? Drop us a note and we'll get back to you fast.
              </p>
              <ContactForm />
            </div>

          </div>
        </section>

        {/* Trail / Location Photo Banner */}
        <div className="container" style={{ paddingBottom: '32px' }}>
          <div className="contact-photo-banner reveal reveal--img">
            <img
              src={trailImg}
              alt="Cyclists on the Butler Trail beside Lady Bird Lake — close to Mellow Johnny's at 400 Nueces St Austin"
              className="contact-photo-banner__img"
            />
          </div>
        </div>

        {/* Map */}
        <section className="contact-map" aria-labelledby="map-heading">
          <div className="container">
            <h2 id="map-heading" className="contact-map__heading">Find Us on the Map</h2>
            <p className="contact-map__address">400 Nueces St, Austin, TX 78701 — Near the Butler Trail &amp; Lady Bird Lake</p>
            <MapEmbed />
          </div>
        </section>

      </div>
    </>
  )
}

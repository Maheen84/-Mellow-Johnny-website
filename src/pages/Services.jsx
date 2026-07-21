import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShoppingBag, Wrench, ScanLine, Bike, Users, Shield, Tag, RefreshCw, Clock } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Services.css'

const services = [
  {
    id: 'sales',
    icon: ShoppingBag,
    title: 'Bike Sales',
    description:
      "We carry a curated selection of bikes for every type of rider \u2014 kids\u2019 first bikes, commuter hybrids, performance road bikes, adventure gravel rigs, and mountain bikes. Our staff doesn\u2019t push \u2014 they listen, ask questions, and help you find the right bike for how you actually ride.",
    detail:
      "Brands include Trek, Specialized, Cannondale, and more. Plus helmets, locks, lights, racks, and everything else to get you rolling safely.",
  },
  {
    id: 'repair',
    icon: Wrench,
    title: '24-Hour Repair',
    description:
      "Our award-winning service center handles everything from flat tires and brake adjustments to complete drivetrain rebuilds and suspension overhauls. Most repairs are completed within 24 hours.",
    detail:
      "Drop off in the morning, pick up the next day. We\u2019ll call or text with a diagnosis and estimate before we start work.",
    badge: '24-Hr Turnaround',
  },
  {
    id: 'fitting',
    icon: ScanLine,
    title: 'Ret\u00fcl Bike Fitting',
    description:
      "A proper bike fit is the single biggest upgrade you can make. Our certified Ret\u00fcl specialists use 3D motion-capture technology to analyze your position and make precise, data-driven adjustments.",
    detail:
      "Benefits include improved power output, reduced injury risk, and significantly better comfort on long rides. Fitting sessions take approximately 90 minutes.",
  },
  {
    id: 'rentals',
    icon: Bike,
    title: 'Rentals',
    description:
      "Explore Austin on two wheels without the commitment of ownership. We rent high-quality road bikes, hybrid bikes, and cruisers by the hour or full day \u2014 perfect for visitors and locals alike.",
    detail:
      "Helmets, locks, and maps included. Pick up near the Butler Trail entrance and start exploring immediately.",
  },
  {
    id: 'rides',
    icon: Users,
    title: 'Community Group Rides',
    description:
      "Every week we lead free community rides through Austin\u2019s trail network \u2014 around Lady Bird Lake, through the Barton Creek Greenbelt, and beyond. All fitness levels welcome.",
    detail:
      "Rides start and end at the shop. No registration required \u2014 just show up, clip in (or roll up), and ride. Coffee before, beer after.",
  },
]

const guarantees = [
  {
    icon: Shield,
    title: '90-Day Satisfaction Guarantee',
    description:
      "Buy with complete confidence. If you\u2019re not fully satisfied with your bike within 90 days of purchase, return or exchange it \u2014 no questions, no hassle, no restocking fee.",
  },
  {
    icon: Tag,
    title: 'Price-Match Guarantee',
    description:
      "We\u2019ll match any authorized dealer\u2019s advertised price on the same bike. Show us the price, and we\u2019ll beat or match it. Austin\u2019s best price is our promise.",
  },
  {
    icon: Wrench,
    title: 'Free Brake & Derailleur Adjustments for Life',
    description:
      "Every bike purchased here comes with free brake and derailleur adjustments for the life of the bike. Bring it in anytime \u2014 we\u2019ll keep it shifting and stopping perfectly, forever.",
  },
  {
    icon: RefreshCw,
    title: "50% Kids\u2019 Trade-In Credit",
    description:
      "Kids outgrow bikes fast \u2014 we get it. Within 2 years of purchase, bring back your child\u2019s bike in reasonable condition and receive 50% of its original price as credit toward any equal or greater-value bike.",
  },
]

export default function Services() {
  const { ref: rowsRef,   isVisible: rowsVisible   } = useScrollReveal()
  const { ref: guardsRef, isVisible: guardsVisible } = useScrollReveal()

  return (
    <>
      <Helmet>
        <title>Services | Mellow Johnny&apos;s &mdash; Sales, Repair, Fitting &amp; More</title>
        <meta
          name="description"
          content="Mellow Johnny's full range of cycling services: bike sales, 24-hour repair, Retul bike fitting, rentals, community group rides, and four best-in-class purchase guarantees."
        />
      </Helmet>

      <div className="page services-page">

        {/* Page Header */}
        <section className="page-header" aria-label="Services page header">
          <div className="container page-header__content">
            <span className="section-label page-enter page-enter-d1">Full-Service Shop</span>
            <h1 className="page-header__title page-enter page-enter-d2">What We Do</h1>
            <p className="page-header__subtitle page-enter page-enter-d3">
              Everything you need to ride &mdash; sales, service, fitting, rentals, and community.
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="services-detail" aria-labelledby="services-detail-heading" ref={rowsRef}>
          <div className="container">
            <h2 id="services-detail-heading" className="sr-only">Our Services</h2>
            <div className="services-detail__list">
              {services.map(({ id, icon: Icon, title, description, detail, badge }, i) => (
                <article
                  key={id}
                  id={id}
                  className={`service-detail-row reveal stagger-${Math.min(i + 1, 5)}${rowsVisible ? ' reveal--visible' : ''}`}
                >
                  <div className="service-detail-row__header">
                    <div className="service-detail-row__title-wrap">
                      <div className="service-detail-row__icon-wrap">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <h3 className="service-detail-row__title">{title}</h3>
                      {badge && (
                        <span className="service-detail-row__badge">
                          <Clock size={12} />
                          {badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="service-detail-row__content">
                    <p className="service-detail-row__desc">
                      {description} <span className="service-detail-row__detail-text">{detail}</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA at the end of the full list */}
            <div className="services-detail__cta-section">
              <p className="services-detail__cta-text">Have questions or ready to book one of our services?</p>
              <Link to="/contact" className="btn btn-primary">
                Book a Service Ticket
              </Link>
            </div>
          </div>
        </section>

        {/* Guarantees Restated */}
        <section className="services-guarantees" aria-labelledby="guarantees-detail-heading" ref={guardsRef}>
          <div className="container">
            <div className="services-guarantees__header">
              <span className="section-label">Purchase Guarantees</span>
              <h2 id="guarantees-detail-heading">What You Get With Every Bike</h2>
              <div className="divider" />
              <p className="lead">
                Every bike sold at Mellow Johnny&rsquo;s comes backed by four promises &mdash; because we stand behind what we sell.
              </p>
            </div>
            <div className="services-guarantees__grid">
              {guarantees.map(({ icon: Icon, title, description }, i) => (
                <article
                  key={title}
                  className={`services-guarantee-card reveal stagger-${i + 1}${guardsVisible ? ' reveal--visible' : ''}`}
                >
                  <div className="services-guarantee-card__icon">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="services-guarantee-card__title">{title}</h3>
                  <p className="services-guarantee-card__desc">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

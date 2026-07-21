import { Link } from 'react-router-dom'
import { ShoppingBag, Wrench, ScanLine, Bike, Users } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './ServicesGrid.css'

const services = [
  {
    icon: ShoppingBag,
    title: 'Bike Sales',
    description:
      "From first-time kids\u2019 bikes to serious road and gravel machines. We carry top brands for every rider level \u2014 with expert staff to help you find the perfect fit.",
    cta: 'Browse Bikes',
  },
  {
    icon: Wrench,
    title: '24-Hr Repair',
    description:
      "Award-winning service center. Most repairs completed the next day. From flat fixes to full overhauls, our mechanics keep you rolling.",
    cta: 'Book Repair',
  },
  {
    icon: ScanLine,
    title: 'Ret\u00fcl Fitting',
    description:
      "Our certified Ret\u00fcl fitting specialists use motion-capture technology to dial in your position \u2014 maximizing power, comfort, and injury prevention.",
    cta: 'Schedule Fitting',
  },
  {
    icon: Bike,
    title: 'Rentals',
    description:
      "Explore Austin by bike. We rent quality road, hybrid, and cruiser bikes by the hour or day \u2014 perfect for visitors or locals wanting a trail day without the commitment.",
    cta: 'Rent a Bike',
  },
  {
    icon: Users,
    title: 'Group Rides',
    description:
      "Join our community on weekly group rides through Austin\u2019s trail network. All paces welcome \u2014 these are social rides, not races. Just show up.",
    cta: 'See Schedule',
  },
]

export default function ServicesGrid() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="services-grid" aria-labelledby="services-heading">
      <div className="container">
        <div className="services-grid__header">
          <span className="section-label">What We Do</span>
          <h2 id="services-heading">Everything You Need to Ride</h2>
          <div className="divider" />
          <p className="lead services-grid__lead">
            One address for sales, service, fitting, rentals, and community &mdash; in the heart of Austin&rsquo;s cycling district.
          </p>
        </div>

        <div className="services-grid__cards" ref={ref}>
          {services.map(({ icon: Icon, title, description, cta }, i) => (
            <article
              key={title}
              className={`service-card reveal${isVisible ? ' reveal--visible' : ''} stagger-${i + 1}`}
            >
              <div className="service-card__icon-wrap">
                <Icon size={28} strokeWidth={1.75} />
              </div>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__desc">{description}</p>
              <Link to="/services" className="service-card__cta">
                {cta} &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

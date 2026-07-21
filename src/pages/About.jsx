import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MapPin, Award, Users, Heart } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountUp } from '../hooks/useCountUp'
import './About.css'

const values = [
  {
    icon: MapPin,
    title: 'Rooted in Austin',
    description:
      "We\u2019re not a chain. We\u2019re a local, independent shop in the heart of downtown Austin \u2014 embedded in the cycling community we serve.",
  },
  {
    icon: Award,
    title: 'Award-Winning Service',
    description:
      "Our mechanics have earned recognition as some of Austin\u2019s best. Most repairs done in 24 hours, every time.",
  },
  {
    icon: Users,
    title: 'Community First',
    description:
      "Free group rides, neighborhood events, and a caf\u00e9 patio that\u2019s as much social hub as it is coffee stop.",
  },
  {
    icon: Heart,
    title: 'Every Rider Welcome',
    description:
      "From kids\u2019 first bikes to serious road machines. We believe cycling should be accessible, joyful, and community-oriented.",
  },
]

const team = [
  {
    name: 'Joe Aragona',
    role: 'Primary Contact / Sales',
    email: 'sales@mellowjohnnys.com',
    initial: 'JA',
  },
  {
    name: 'Jeff Garvey',
    role: 'Operations',
    email: 'sales@mellowjohnnys.com',
    initial: 'JG',
  },
  {
    name: 'Craig Staley',
    role: 'Service Manager',
    email: 'sales@mellowjohnnys.com',
    initial: 'CS',
  },
]

/** Count-up stat for the origin stats block */
function OriginStat({ number, label, triggered }) {
  const count = useCountUp(number, triggered)
  return (
    <div className="about-stat">
      <span className="about-stat__number">{count}+</span>
      <span className="about-stat__label">{label}</span>
    </div>
  )
}

export default function About() {
  const { ref: originRef, isVisible: originVisible } = useScrollReveal()
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal()
  const { ref: teamRef,   isVisible: teamVisible   } = useScrollReveal()

  return (
    <>
      <Helmet>
        <title>About Us | Mellow Johnny&apos;s Bike Shop</title>
        <meta
          name="description"
          content="Founded in 2008 in Austin's historic warehouse district, Mellow Johnny's is a community-focused bike shop committed to cycling for everyone. Meet our team."
        />
      </Helmet>

      <div className="page about-page">

        {/* Page Header — staged entrance */}
        <section className="page-header" aria-label="Page header">
          <div className="container page-header__content">
            <span className="section-label page-enter page-enter-d1">Est. 2008</span>
            <h1 className="page-header__title page-enter page-enter-d2">Our Story</h1>
            <p className="page-header__subtitle page-enter page-enter-d3">
              Austin&rsquo;s favorite bike shop &mdash; built on community, craft, and a deep love of the ride.
            </p>
          </div>
        </section>

        {/* Origin Story */}
        <section className="about-origin" aria-labelledby="origin-heading" ref={originRef}>
          <div className="container about-origin__inner">
            <div className="about-origin__content">
              <span className="section-label">How It Started</span>
              <h2 id="origin-heading">Born in the Warehouse District</h2>
              <div className="divider" />
              <p className="about-origin__body">
                Mellow Johnny&rsquo;s opened its doors in 2008 in Austin&rsquo;s historic warehouse district &mdash; a neighborhood that felt more grit than gloss, perfectly suited for a shop that valued substance over style. Named with a knowing wink at a certain famous Texan cyclist (the French mispronunciation of &ldquo;maillot jaune&rdquo; &mdash; the yellow jersey), the shop set out to be something different.
              </p>
              <p className="about-origin__body">
                Not a big-box store. Not a boutique for elite riders only. Something in between &mdash; professional, expert, and genuinely welcoming to everyone from the weekend warrior to the first-time buyer who just wants to explore Austin&rsquo;s incredible trail network.
              </p>
              <p className="about-origin__body">
                Sixteen years later, we&rsquo;re still here. Still independent. Still right in the heart of the city, steps from the Butler Trail and Lady Bird Lake.
              </p>
            </div>

            {/* Stat tiles with count-up on scroll */}
            <div className="about-origin__stats">
              <div className={`about-stat reveal stagger-1${originVisible ? ' reveal--visible' : ''}`}>
                <span className="about-stat__number">2008</span>
                <span className="about-stat__label">Year Founded</span>
              </div>
              <OriginStat number={16} label="Years Serving Austin" triggered={originVisible} />
              <div className={`about-stat reveal stagger-3${originVisible ? ' reveal--visible' : ''}`}>
                <span className="about-stat__number">24hr</span>
                <span className="about-stat__label">Repair Turnaround</span>
              </div>
              <div className={`about-stat reveal stagger-4${originVisible ? ' reveal--visible' : ''}`}>
                <span className="about-stat__number">400</span>
                <span className="about-stat__label">Nueces St, Austin TX</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-values" aria-labelledby="values-heading" ref={valuesRef}>
          <div className="container">
            <div className="about-values__header">
              <span className="section-label">What We Stand For</span>
              <h2 id="values-heading">Our Mission</h2>
              <div className="divider" />
              <p className="lead">
                Cycling as transportation, fitness, and social glue &mdash; for every corner of Austin.
              </p>
            </div>
            <div className="about-values__grid">
              {values.map(({ icon: Icon, title, description }, i) => (
                <article
                  key={title}
                  className={`value-card reveal stagger-${i + 1}${valuesVisible ? ' reveal--visible' : ''}`}
                >
                  <div className="value-card__icon">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="value-card__title">{title}</h3>
                  <p className="value-card__desc">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="about-team" aria-labelledby="team-heading" ref={teamRef}>
          <div className="container">
            <div className="about-team__header">
              <span className="section-label">The People</span>
              <h2 id="team-heading">Meet the Team</h2>
              <div className="divider" />
            </div>
            <div className="about-team__grid">
              {team.map(({ name, role, email, initial }, i) => (
                <article
                  key={name}
                  className={`team-card reveal stagger-${i + 1}${teamVisible ? ' reveal--visible' : ''}`}
                >
                  <div className="team-card__avatar" aria-hidden="true">
                    <span>{initial}</span>
                  </div>
                  <h3 className="team-card__name">{name}</h3>
                  <p className="team-card__role">{role}</p>
                  <a href={`mailto:${email}`} className="team-card__email">
                    {email}
                  </a>
                </article>
              ))}
            </div>

            <div className="about-team__cta">
              <p>Ready to visit? We&rsquo;d love to see you.</p>
              <Link to="/contact" className="btn btn-primary">Find Us</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

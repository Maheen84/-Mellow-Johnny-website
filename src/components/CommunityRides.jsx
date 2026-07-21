import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './CommunityRides.css'

const rideSchedule = [
  { day: 'Tuesday',  time: '6:30 AM',  name: 'Morning Rollers',     pace: 'Easy — All Paces' },
  { day: 'Thursday', time: '6:00 PM',  name: 'After-Work Loop',     pace: 'Moderate — 15–18 mph' },
  { day: 'Saturday', time: '8:00 AM',  name: 'Weekend Social Ride', pace: 'Mixed — No-Drop' },
]

export default function CommunityRides() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="community" aria-labelledby="community-heading" ref={ref}>
      {/* Background image — scale-in reveal */}
      <div className={`community__bg reveal reveal--img${isVisible ? ' reveal--visible' : ''}`}>
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&auto=format&fit=crop"
          alt="Cyclists riding along Lady Bird Lake trail in Austin, Texas"
          className="community__bg-image"
        />
        <div className="community__overlay" />
      </div>

      <div className="container community__content">
        <div className={`community__text reveal stagger-2${isVisible ? ' reveal--visible' : ''}`}>
          <span className="section-label">Community</span>
          <h2 id="community-heading">Ride With Us</h2>
          <div className="divider" />
          <p className="lead community__lead">
            Join Austin's most welcoming cycling community on our weekly group rides — along Lady Bird Lake, through the greenbelt, and beyond.
          </p>
          <p className="community__body">
            No lycra required. No rider left behind. Our rides start and end at the shop, so you can grab a coffee before and a beer after.
          </p>

          <div className="community__schedule">
            {rideSchedule.map(({ day, time, name, pace }, i) => (
              <div
                key={day}
                className={`community__ride-row reveal stagger-${i + 3}${isVisible ? ' reveal--visible' : ''}`}
              >
                <div className="community__ride-day">{day}</div>
                <div className="community__ride-details">
                  <span className="community__ride-name">{name}</span>
                  <span className="community__ride-meta">{time} · {pace}</span>
                </div>
              </div>
            ))}
          </div>

          <Link to="/contact" className="btn btn-outline community__btn">
            Get Ride Updates
          </Link>
        </div>
      </div>
    </section>
  )
}

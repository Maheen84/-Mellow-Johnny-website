import { Shield, Tag, Wrench, RefreshCw } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountUp } from '../hooks/useCountUp'
import './Guarantees.css'

const guarantees = [
  {
    icon: Shield,
    stat: '90',
    statNumeric: 90,
    suffix: '',
    unit: 'Days',
    title: '90-Day Satisfaction Guarantee',
    description:
      "Not completely happy with your bike purchase? Return or exchange it within 90 days — no questions asked. We stand behind every bike we sell.",
  },
  {
    icon: Tag,
    stat: 'MATCH',
    statNumeric: null,
    suffix: '',
    unit: '',
    title: 'Price-Match Guarantee',
    description:
      "Found the same bike for less at an authorized dealer? We'll match it. Shop with confidence knowing you're getting Austin's best price.",
  },
  {
    icon: Wrench,
    stat: '∞',
    statNumeric: null,
    suffix: '',
    unit: 'Life',
    title: 'Free Adjustments for Life',
    description:
      "Every bike purchased here comes with free brake and derailleur adjustments for the life of the bike. Bring it in anytime — we'll keep it dialed.",
  },
  {
    icon: RefreshCw,
    stat: '50%',
    statNumeric: 50,
    suffix: '%',
    unit: 'Credit',
    title: "50% Kids' Trade-In Credit",
    description:
      "Kids outgrow bikes fast. Within 2 years of purchase, trade in your child's bike for 50% of its original value toward a new equal or greater-value bike.",
  },
]

/** Renders a stat — numeric ones animate via useCountUp, others display statically */
function AnimatedStat({ statNumeric, suffix, staticStat, triggered }) {
  const count = useCountUp(statNumeric ?? 0, triggered && statNumeric !== null)
  if (statNumeric === null) return <>{staticStat}</>
  return <>{count}{suffix}</>
}

export default function Guarantees() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="guarantees" aria-labelledby="guarantees-heading">
      <div className="container">
        <div className="guarantees__header">
          <span className="section-label">Why Buy Here</span>
          <h2 id="guarantees-heading">Backed by Our Promises</h2>
          <div className="divider" />
          <p className="lead">
            Every bike purchase at Mellow Johnny&rsquo;s comes with these four guarantees &mdash; because we want you riding, not worrying.
          </p>
        </div>

        <div className="guarantees__grid" ref={ref}>
          {guarantees.map(({ icon: Icon, stat, statNumeric, suffix, unit, title, description }, i) => (
            <article
              key={title}
              className={`guarantee-card reveal${isVisible ? ' reveal--visible' : ''} stagger-${i + 1}`}
            >
              <div className="guarantee-card__stat">
                <AnimatedStat
                  statNumeric={statNumeric}
                  suffix={suffix}
                  staticStat={stat}
                  triggered={isVisible}
                />
                {unit && <span className="guarantee-card__unit">{unit}</span>}
              </div>
              <div className="guarantee-card__icon">
                <Icon size={18} strokeWidth={2} />
              </div>
              <h3 className="guarantee-card__title">{title}</h3>
              <p className="guarantee-card__desc">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

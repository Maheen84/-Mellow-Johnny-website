import './MapEmbed.css'

export default function MapEmbed() {
  return (
    <div className="map-embed" aria-label="Map showing Mellow Johnny's location at 400 Nueces St, Austin, TX">
      <iframe
        title="Mellow Johnny's location — 400 Nueces St, Austin, TX 78701"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.0!2d-97.7498!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b54e2b5f8c2b%3A0xd5c8c8b0e8e4e5b0!2s400%20Nueces%20St%2C%20Austin%2C%20TX%2078701!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-embed__iframe"
      />
    </div>
  )
}

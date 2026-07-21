import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import './ContactForm.css'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    // Static demo — mailto fallback
    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:sales@mellowjohnnys.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="contact-form__success" role="alert" aria-live="polite">
        <CheckCircle size={48} className="contact-form__success-icon" />
        <h3>Thanks for reaching out!</h3>
        <p>Your message is ready to send. If your email client didn't open automatically, email us directly at <a href="mailto:sales@mellowjohnnys.com">sales@mellowjohnnys.com</a>.</p>
      </div>
    )
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      id="contact-form"
    >
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="name" className="contact-form__label">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
          />
          {errors.name && <span className="contact-form__error" role="alert">{errors.name}</span>}
        </div>

        <div className="contact-form__field">
          <label htmlFor="email" className="contact-form__label">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
            placeholder="jane@example.com"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
          {errors.email && <span className="contact-form__error" role="alert">{errors.email}</span>}
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="subject" className="contact-form__label">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="contact-form__input"
          placeholder="Bike purchase, repair inquiry, fitting question…"
          value={form.subject}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="message" className="contact-form__label">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`contact-form__input contact-form__textarea ${errors.message ? 'contact-form__input--error' : ''}`}
          placeholder="Tell us what you're looking for or how we can help…"
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <span className="contact-form__error" role="alert">{errors.message}</span>}
      </div>

      <button type="submit" className="btn btn-primary contact-form__submit" id="contact-form-submit">
        <Send size={16} />
        Send Message
      </button>
    </form>
  )
}

import { useState } from 'react'
import './App.css'
import appleLogo from '../assets/apple-logo.png'
import appleLogoLight from '../assets/apple-logo-light.png'
import androidLogo from '../assets/android-logo.png'

function App() {
  const [isDark, setIsDark] = useState(true)
  const [activeLink, setActiveLink] = useState('all')
  const [formStatus, setFormStatus] = useState('idle') // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('loading')

    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    try {
      // Send email using FormSubmit.co (free service, no backend needed)
      const response = await fetch('https://formsubmit.co/ajax/dangelo.watson1212@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      })

      if (response.ok) {
        setFormStatus('success')
        e.target.reset()
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus('idle'), 5000)
      }
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  return (
    <div className={`App ${!isDark ? 'android-theme' : ''}`}>
      <div className="rounded-rectangle">
        <header className="header">
          <div className="header-left">D'Angelo A. Watson</div>
          <nav className="header-nav">
            <a
              href="#all"
              className={`nav-link ${activeLink === 'all' ? 'active' : ''}`}
              onClick={() => setActiveLink('all')}
            >
              All
            </a>
            <a
              href="#apps"
              className={`nav-link ${activeLink === 'apps' ? 'active' : ''}`}
              onClick={() => setActiveLink('apps')}
            >
              Apps
            </a>
            <a
              href="#contact"
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveLink('contact')}
            >
              Contact
            </a>
          </nav>
          <div className="header-right">
            <div className="theme-toggle">
              <button
                className={`toggle-option ${isDark ? 'active' : ''}`}
                onClick={() => setIsDark(true)}
                aria-label="Apple"
              >
                <img src={isDark ? appleLogoLight : appleLogo} alt="Apple" className="toggle-icon" />
              </button>
              <button
                className={`toggle-option ${!isDark ? 'active' : ''}`}
                onClick={() => setIsDark(false)}
                aria-label="Android"
              >
                <img src={androidLogo} alt="Android" className="toggle-icon" />
              </button>
            </div>
          </div>
        </header>

        {activeLink === 'contact' ? (
          <div className="contact-form-container">
            <h2>Get in Touch</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" className="submit-button" disabled={formStatus === 'loading'}>
                {formStatus === 'loading' ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              {formStatus === 'success' && (
                <div className="form-message success">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="form-message error">
                  ✗ Failed to send message. Please try emailing directly.
                </div>
              )}
            </form>
            <div className="contact-email">
              <p>Or contact me at <a href="mailto:dangelo.watson1212@gmail.com">dangelo.watson1212@gmail.com</a>!</p>
            </div>
          </div>
        ) : (
          <div className={`grid-container ${activeLink === 'apps' ? 'apps-layout' : ''}`}>
            <div className="grid-cell cell-1"></div>
            <div className="grid-cell cell-2"></div>
            <div className="grid-cell cell-3"></div>
            <div className="grid-cell cell-4"></div>
            <div className="grid-cell cell-5"></div>
            {activeLink === 'apps' && <div className="grid-cell cell-6"></div>}
          </div>
        )}
      </div>
    </div>
  )
}

export default App

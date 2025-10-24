import { useState } from 'react'
import './App.css'
import appleLogo from '../assets/apple-logo.png'
import appleLogoLight from '../assets/apple-logo-light.png'
import androidLogo from '../assets/android-logo.png'
import reactIcon from '../assets/icons/react.png'
import typescriptIcon from '../assets/icons/typescript.png'
import typescriptLightIcon from '../assets/icons/typescript-light.png'
import html5Icon from '../assets/icons/html-5.png'
import css3Icon from '../assets/icons/css3.png'
import thumbnailScreenshot from '../assets/project-screenshots/screenshot-thumbnail-project.png'
import slumberScreenshot from '../assets/project-screenshots/screenshot-slumber-project.png'
import studypalScreenshot from '../assets/project-screenshots/screenshot-studypal-project.png'
import dashboardScreenshot from '../assets/project-screenshots/screenshot-dashboard-project.png'
import weatherScreenshot from '../assets/project-screenshots/screenshot-weather-project.png'
import cryptoScreenshot from '../assets/project-screenshots/screenshot-crypto-project.png'
import nikeScreenshot from '../assets/project-screenshots/screenshot-nike-project.png'
import avatarIcon from '../assets/icons/avatar1.png'
import pythonIcon from '../assets/icons/python.png'
import mysqlIcon from '../assets/icons/mysql.png'
import cppIcon from '../assets/icons/c-.png'
import csharpIcon from '../assets/icons/c-sharp.png'
import javaIcon from '../assets/icons/java.png'
import confettiIcon from '../assets/icons/confetti.png'
import jsIcon from '../assets/icons/js.png'
import wordIcon from '../assets/icons/word.png'
import resumeFile from '../assets/icons/resume/2025 Resume - DAngelo Watson  (2).pdf'

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
              Projects
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
          <>
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
            </div>
            <div className="contact-info">
              <p>Contact me at <a href="mailto:dangelo.watson1212@gmail.com">dangelo.watson1212@gmail.com</a> or <a href="tel:252-725-1835">252-725-1835</a></p>
            </div>
          </>
        ) : (
          <div className={`grid-container ${activeLink === 'apps' ? 'apps-layout' : ''}`}>
            <div className="grid-cell cell-1">
              {activeLink === 'all' ? (
                <div className="intro-cell">
                  <div className="intro-header">
                    <img src={avatarIcon} alt="D'Angelo Watson" className="avatar-icon" />
                    <h1 className="intro-heading">Welcome to my <br/><span className="gradient-text">Digital Portfolio!</span></h1>
                  </div>
                  <p className="intro-text">
                    I'm a full stack developer who builds mobile & web applications, specializing in React, TypeScript, and Python. Open to work! Feel free to explore my projects and get in touch!
                  </p>
                </div>
              ) : activeLink === 'apps' ? (
                <>
                  <div className="cell-content">
                    <img src={thumbnailScreenshot} alt="A.I. Thumbnail Generator" className="project-screenshot" />
                    <div className="screenshot-overlay">
                      <button
                        className="overlay-button"
                        onClick={() => window.open('https://dlo137.github.io/Thumbnail_Landing_Page/', '_blank')}
                      >
                        View Site
                      </button>
                      <button
                        className="overlay-button"
                        onClick={() => window.open('https://github.com/dlo137/AI-Youtube-Generator', '_blank')}
                      >
                        Github
                      </button>
                    </div>
                  </div>
                  <div className="cell-footer">
                    <span className="footer-title">A.I. Thumbnail Generator: Youtube</span>
                    <div className="footer-icons">
                      <img src={reactIcon} alt="React" className="footer-icon" />
                      <img src={typescriptLightIcon} alt="TypeScript" className="footer-icon" />
                      <img src={css3Icon} alt="CSS3" className="footer-icon" />
                      <img src={html5Icon} alt="HTML5" className="footer-icon" />
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            <div className="grid-cell cell-2">
              {activeLink === 'all' ? (
                <div className="recent-projects-cell">
                  <h2 className="recent-projects-title">Current Project:</h2>
                  <p className="project-subtitle">AI Thumbnail Generator</p>
                  <div className="recent-projects-grid">
                    <div className="recent-project-item">
                      <img src={thumbnailScreenshot} alt="A.I. Thumbnail Generator" className="recent-project-screenshot" />
                      <div className="recent-project-overlay">
                        <button
                          className="overlay-button"
                          onClick={() => window.open('https://dlo137.github.io/Thumbnail_Landing_Page/', '_blank')}
                        >
                          Live View
                        </button>
                        <button
                          className="overlay-button"
                          onClick={() => window.open('https://github.com/dlo137/AI-Youtube-Generator', '_blank')}
                        >
                          Github
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : activeLink === 'apps' ? (
                <>
                  <div className="cell-content">
                    <img src={slumberScreenshot} alt="Slumber: White Noise & Sleep Sounds" className="project-screenshot" />
                    <div className="screenshot-overlay">
                      <button
                        className="overlay-button"
                        onClick={() => window.open('https://dlo137.github.io/Slumber_Landing_Page/', '_blank')}
                      >
                        View Site
                      </button>
                      <button
                        className="overlay-button"
                        onClick={() => window.open('https://github.com/dlo137/Slumber', '_blank')}
                      >
                        Github
                      </button>
                    </div>
                  </div>
                  <div className="cell-footer">
                    <span className="footer-title">Slumber: White Noise & Sleep Sounds</span>
                    <div className="footer-icons">
                      <img src={reactIcon} alt="React" className="footer-icon" />
                      <img src={typescriptLightIcon} alt="TypeScript" className="footer-icon" />
                      <img src={css3Icon} alt="CSS3" className="footer-icon" />
                      <img src={html5Icon} alt="HTML5" className="footer-icon" />
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            <div className="grid-cell cell-3">
              {activeLink === 'all' ? (
                <div className="resume-cell">
                  <h2 className="resume-title">2025 Resume</h2>
                  <img src={wordIcon} alt="Word Document" className="word-icon" />
                  <button
                    className="resume-button"
                    onClick={() => window.open(resumeFile, '_blank')}
                  >
                    View Resume
                  </button>
                </div>
              ) : activeLink === 'apps' ? (
                <>
                  <div className="cell-content">
                    <img src={studypalScreenshot} alt="StudyPal" className="project-screenshot" />
                    <div className="screenshot-overlay">
                      <button
                        className="overlay-button"
                        onClick={() => window.open('https://github.com/dlo137/StudyPal-AI', '_blank')}
                      >
                        Github
                      </button>
                    </div>
                  </div>
                  <div className="cell-footer">
                    <span className="footer-title">StudyPal: A.I. Homework Assistant</span>
                    <div className="footer-icons">
                      <img src={reactIcon} alt="React" className="footer-icon" />
                      <img src={typescriptLightIcon} alt="TypeScript" className="footer-icon" />
                      <img src={css3Icon} alt="CSS3" className="footer-icon" />
                      <img src={html5Icon} alt="HTML5" className="footer-icon" />
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            <div className="grid-cell cell-4">
              {activeLink === 'all' ? (
                <div className="tech-stack-cell">
                  <div className="tech-stack-row">
                    <img src={reactIcon} alt="React" className="tech-icon" />
                    <img src={typescriptLightIcon} alt="TypeScript" className="tech-icon" />
                    <img src={cppIcon} alt="C++" className="tech-icon" />
                    <img src={csharpIcon} alt="C#" className="tech-icon" />
                  </div>
                  <div className="tech-stack-row">
                    <img src={pythonIcon} alt="Python" className="tech-icon" />
                    <img src={javaIcon} alt="Java" className="tech-icon" />
                    <img src={jsIcon} alt="JavaScript" className="tech-icon" />
                    <img src={mysqlIcon} alt="MySQL" className="tech-icon" />
                  </div>
                </div>
              ) : activeLink === 'apps' ? (
                <>
                  <div className="cell-content">
                    <img src={dashboardScreenshot} alt="Admin Dashboard" className="project-screenshot" />
                    <div className="screenshot-overlay">
                      <button
                        className="overlay-button"
                        onClick={() => window.open('https://dlo137.github.io/Admin-Dashboard-Hosting/', '_blank')}
                      >
                        View Site
                      </button>
                      <button
                        className="overlay-button"
                        onClick={() => window.open('https://github.com/dlo137/Admin-Dashboard-Hosting', '_blank')}
                      >
                        Github
                      </button>
                    </div>
                  </div>
                  <div className="cell-footer">
                    <span className="footer-title">Admin Dashboard (UI/UX)</span>
                    <div className="footer-icons">
                      <img src={reactIcon} alt="React" className="footer-icon" />
                      <img src={typescriptLightIcon} alt="TypeScript" className="footer-icon" />
                      <img src={css3Icon} alt="CSS3" className="footer-icon" />
                      <img src={html5Icon} alt="HTML5" className="footer-icon" />
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            <div className="grid-cell cell-5">
              {activeLink === 'all' ? (
                <div className="graduation-cell">
                  <p className="graduation-text">Graduation:<br/>May of 2026</p>
                  <img src={confettiIcon} alt="Confetti" className="confetti-icon" />
                </div>
              ) : activeLink === 'apps' ? (
                <>
                  <div className="cell-content">
                    <img src={weatherScreenshot} alt="Python Weather App" className="project-screenshot" />
                    <div className="screenshot-overlay">
                      <button
                        className="overlay-button"
                        onClick={() => window.open('https://dlo137.github.io/FlaskReactWeatherApp/', '_blank')}
                      >
                        View Site
                      </button>
                      <button
                        className="overlay-button"
                        onClick={() => window.open('https://github.com/dlo137/FlaskReactWeatherApp', '_blank')}
                      >
                        Github
                      </button>
                    </div>
                  </div>
                  <div className="cell-footer">
                    <span className="footer-title">Python Weather App</span>
                    <div className="footer-icons">
                      <img src={reactIcon} alt="React" className="footer-icon" />
                      <img src={typescriptLightIcon} alt="TypeScript" className="footer-icon" />
                      <img src={css3Icon} alt="CSS3" className="footer-icon" />
                      <img src={html5Icon} alt="HTML5" className="footer-icon" />
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            {activeLink === 'apps' && (
              <div className="grid-cell cell-6">
                <>
                  <div className="cell-content">
                    <img src={cryptoScreenshot} alt="Crypto Dashboard" className="project-screenshot" />
                    <div className="screenshot-overlay">
                      <button
                        className="overlay-button"
                        onClick={() => window.open('https://dlo137.github.io/Crypto-Currency-Tracker/', '_blank')}
                      >
                        View Site
                      </button>
                      <button
                        className="overlay-button"
                        onClick={() => window.open('https://github.com/dlo137/Crypto-Currency-Tracker', '_blank')}
                      >
                        Github
                      </button>
                    </div>
                  </div>
                  <div className="cell-footer">
                    <span className="footer-title">Crypto Currency Tracker</span>
                    <div className="footer-icons">
                      <img src={reactIcon} alt="React" className="footer-icon" />
                      <img src={typescriptLightIcon} alt="TypeScript" className="footer-icon" />
                      <img src={css3Icon} alt="CSS3" className="footer-icon" />
                      <img src={html5Icon} alt="HTML5" className="footer-icon" />
                    </div>
                  </div>
                </>
              </div>
            )}
            {activeLink === 'apps' && (
              <div className="grid-cell cell-7">
                <>
                  <div className="cell-content">
                    <img src={nikeScreenshot} alt="Nike E-Commerce Site" className="project-screenshot" />
                    <div className="screenshot-overlay">
                      <button
                        className="overlay-button"
                        onClick={() => window.open('https://dlo137.github.io/Nike-E-Commerce-Page/', '_blank')}
                      >
                        View Site
                      </button>
                      <button
                        className="overlay-button"
                        onClick={() => window.open('https://github.com/dlo137/Nike-E-Commerce-Page', '_blank')}
                      >
                        Github
                      </button>
                    </div>
                  </div>
                  <div className="cell-footer">
                    <span className="footer-title">Nike E-Commerce Site (UI/UX)</span>
                    <div className="footer-icons">
                      <img src={reactIcon} alt="React" className="footer-icon" />
                      <img src={typescriptLightIcon} alt="TypeScript" className="footer-icon" />
                      <img src={css3Icon} alt="CSS3" className="footer-icon" />
                      <img src={html5Icon} alt="HTML5" className="footer-icon" />
                    </div>
                  </div>
                </>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App

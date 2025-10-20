import { useState } from 'react'
import './App.css'
import appleLogo from '../assets/apple-logo.png'
import androidLogo from '../assets/android-logo.png'

function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className="App">
      <div className="rounded-rectangle">
        <header className="header">
          <div className="header-left">D'Angelo Watson</div>
          <nav className="header-nav">
            <a href="#all" className="nav-link">All</a>
            <a href="#apps" className="nav-link">Apps</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <div className="header-right">
            <div className="theme-toggle">
              <button
                className={`toggle-option ${isDark ? 'active' : ''}`}
                onClick={() => setIsDark(true)}
                aria-label="Apple"
              >
                <img src={appleLogo} alt="Apple" className="toggle-icon" />
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

        <div className="grid-container">
          <div className="grid-cell cell-1"></div>
          <div className="grid-cell cell-2"></div>
          <div className="grid-cell cell-3"></div>
          <div className="grid-cell cell-4"></div>
          <div className="grid-cell cell-5"></div>
        </div>
      </div>
    </div>
  )
}

export default App

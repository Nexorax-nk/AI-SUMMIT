import React, { useEffect, useRef } from 'react'
import { ExternalLink, Share2, Clock, Calendar, Sparkles } from 'lucide-react'
import './Speakers.css'

const SPEAKERS = [
  {
    id: 1,
    name: 'Dr. Meera Chandran',
    role: 'Chief AI Scientist',
    company: 'NeuralArc Labs',
    category: 'keynote',
    categoryLabel: 'Keynote Speaker',
    topic: 'Opening Keynote',
    timeSlot: '09:25 – 09:50',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 2,
    name: 'Aisha Fernandes',
    role: 'Head of Applied ML',
    company: 'Quantum Bridge',
    category: 'industry',
    categoryLabel: 'Industry Speaker',
    topic: 'AI Innovation Talk',
    timeSlot: '09:50 – 10:15',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 3,
    name: 'Arjun Mehta',
    role: 'Founder & CEO',
    company: 'EdgeML Systems',
    category: 'panel',
    categoryLabel: 'Panel Guest',
    topic: 'Panel Discussion',
    timeSlot: '10:15 – 10:50',
    photo: 'https://randomuser.me/api/portraits/men/76.jpg',
    linkedin: '#',
    twitter: '#',
  },
]

function Speakers() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const revealEls = sectionRef.current
      ? sectionRef.current.querySelectorAll('.reveal')
      : []

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    revealEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="speakers" className="speakers-section section-padding" ref={sectionRef}>
      <div className="container">

        {/* Centred Header */}
        <div className="speakers-header reveal">
          <div className="speakers-eyebrow">
            <span className="eyebrow-line" />
            <Sparkles size={15} className="eyebrow-icon" />
            <span>The Lineup</span>
            <span className="eyebrow-line" />
          </div>
          <h2 className="speakers-main-title">Speaker Lineup</h2>
          <p className="speakers-subtitle">
            From founders redefining industries to researchers pushing the frontier —
            meet the voices leading ASTRAX&apos;25.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="speakers-grid">
          {SPEAKERS.map((speaker, index) => (
            <div
              key={speaker.id}
              className={`speaker-card reveal stagger-${index + 1}`}
            >
              {/* Card Top Bar */}
              <div className="card-top-bar">
                <span className="speaker-num-label">SPEAKER {String(speaker.id).padStart(2, '0')}</span>
                <span className="speaker-time">
                  <Clock size={11} />
                  {speaker.timeSlot}
                </span>
              </div>

              {/* Full-rectangle photo */}
              <div className="speaker-photo-wrap">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="speaker-photo"
                  loading="lazy"
                />
                {/* Gradient overlay at bottom */}
                <div className="photo-overlay" />
              </div>

              {/* Info Section */}
              <div className="speaker-info">
                <p className={`speaker-category-label ${speaker.category}`}>
                  {speaker.categoryLabel.toUpperCase()}
                </p>
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-role">{speaker.role}</p>
                <p className="speaker-topic">{speaker.topic}</p>
              </div>

              {/* Card Footer */}
              <div className="card-footer">
                <div className="card-footer-left">
                  <Calendar size={12} />
                  <span>ASTRAX'25</span>
                </div>
                <span className="card-footer-right">Chennai Institute of Technology</span>
              </div>

              {/* Hover Social Links */}
              <div className="speaker-socials">
                <a href={speaker.linkedin} className="speaker-social-link" aria-label={`${speaker.name} on LinkedIn`}>
                  <ExternalLink size={13} />
                </a>
                <a href={speaker.twitter} className="speaker-social-link" aria-label={`${speaker.name} on Twitter`}>
                  <Share2 size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Speakers

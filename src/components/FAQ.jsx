import { useState } from 'react';
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Cpu,
  MapPin,
  MessageCircle,
  Mic2,
  Rocket,
  Sparkles,
  Users,
} from 'lucide-react';

const FAQS = [
  {
    category: 'Attendance',
    icon: Users,
    q: "Who can attend ASTRAX’26?",
    a: 'ASTRAX’26 is designed for engineering students, AI and ML enthusiasts, researchers, faculty, developers, data scientists, startups, entrepreneurs, and industry professionals.',
  },
  {
    category: 'About',
    icon: Sparkles,
    q: 'What is the ASTRAX AI Innovation Summit?',
    a: 'It is the flagship AI conference organized by ATHERA, the Department Club of Artificial Intelligence & Machine Learning at Chennai Institute of Technology. The summit brings students, researchers, experts, entrepreneurs, startups, and innovators together.',
  },
  {
    category: 'Focus areas',
    icon: Cpu,
    q: 'Which AI topics will the summit explore?',
    a: 'The program focuses on Generative AI, large language models, Agentic AI, machine learning, deep learning, computer vision, natural language processing, AI in healthcare, and responsible AI.',
  },
  {
    category: 'Program',
    icon: CalendarDays,
    q: 'What is included in the tentative agenda?',
    a: 'The current program runs from 9:00 AM to 11:00 AM and includes registration, a welcome address, an opening keynote, an AI innovation talk, a panel discussion, and a vote of thanks. Final timings will be shared with registered attendees.',
  },
  {
    category: 'Speakers',
    icon: Mic2,
    q: 'Who are the keynote speakers and panel guests?',
    a: 'The summit is expected to feature 8+ keynote speakers and panel guests. Speaker names are currently to be announced and will be published through the official ASTRAX channels once confirmed.',
  },
  {
    category: 'Showcase',
    icon: Rocket,
    q: 'What can startups and innovators expect?',
    a: 'The summit includes a startup showcase, sponsor exhibitions, networking, and opportunities for industry-academia collaboration. Its objectives include showcasing AI innovation, fostering startup engagement, and connecting students with industry.',
  },
  {
    category: 'Venue',
    icon: MapPin,
    q: 'Where is ASTRAX’26 being organized?',
    a: 'The summit is organized by ATHERA, Department of AI & ML, at Chennai Institute of Technology (CIT), Chennai. Detailed venue and arrival information will be provided through official event communication.',
  },
];

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(FAQS[0].q);

  return (
    <section id="faq" className="faq-section">
      <div className="container faq-container">
        <header className="faq-heading">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <Sparkles size={14} />
            <span>Summit briefing</span>
            <span className="eyebrow-line" />
          </div>
          <h2>Frequently Asked<br /><span>Questions</span></h2>
        </header>

        <div className="faq-list" aria-live="polite">
          {FAQS.map((faq, index) => {
            const isOpen = openQuestion === faq.q;
            const panelId = `faq-panel-${index}`;
            const Icon = faq.icon;
            return (
              <article
                className={`faq-card ${isOpen ? 'is-open' : ''}`}
                key={faq.q}
              >
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenQuestion(isOpen ? null : faq.q)}
                >
                  <span className="faq-icon"><Icon size={18} strokeWidth={1.65} /></span>
                  <span className="faq-question-copy">
                    <span className="faq-category">{faq.category}</span>
                    <span className="faq-question-text">{faq.q}</span>
                  </span>
                  <span className="faq-chevron"><ChevronDown size={21} /></span>
                </button>

                <div className="faq-answer-grid" id={panelId} aria-hidden={!isOpen}>
                  <div className="faq-answer-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </article>
            );
          })}

        </div>

        <div className="faq-help">
          <span className="faq-help-icon"><MessageCircle size={20} /></span>
          <div className="faq-help-copy">
            <span>Still have a question?</span>
            <p>Connect with the ATHERA summit team.</p>
          </div>
          <a href="#contact">Contact team <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

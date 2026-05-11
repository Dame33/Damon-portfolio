import { useState } from "react";
import {
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  ExternalLink,
  FileText,
  GitBranch,
  GraduationCap,
  Library,
  Link2,
  Mail,
  MapPin,
  Play,
  Search,
  Sparkles,
} from "lucide-react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./App.css";

const profile = {
  name: "Damon Lam",
  title: "Software Engineer - Toronto",
  tagline: "Striving to be a better engineer and person.",
  avatar: "https://avatars.githubusercontent.com/u/153030146?v=4",
  bio:
    "Software Engineering student at York University building full-stack products, native iOS apps, and reliable QA workflows. I’m passionate about building technology that creates meaningful experiences and transforms ideas into products people genuinely enjoy using. Outside of development, I enjoy basketball, fitness, and music, which help fuel my creativity, discipline, and teamwork. I’m always eager to learn, connect with new people, and collaborate with others who are driven to build impactful things.",
};

const resumeUrl = `${import.meta.env.BASE_URL}Damon_Lam_COOP_Resume_site.pdf`;

const playlists = [
  { label: "About Me", href: "#about", icon: Sparkles },
  { label: "Work Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Tech Stack & Education", href: "#tech", icon: Library },
  { label: "Personal Projects", href: "#projects", icon: Code2 },
  { label: "Contact", href: "#contact", icon: Mail },
];

const workExperience = [
  {
    role: "Software QA Analyst",
    team: "theScore - Wagering",
    dates: "Apr 2025 - Aug 2025",
    location: "Toronto, ON",
    summary:
      "Tested iOS, Android, and web wagering experiences for 100,000+ active users, including feature flags, odds changes, backend APIs, ESPN account linking, and Fantasy Picks integrations.",
    impact: "23% lift in linked user accounts",
  },
  {
    role: "Software / Hardware QA Analyst",
    team: "theScore - Retail",
    dates: "Jan 2025 - Apr 2025",
    location: "Toronto, ON",
    summary:
      "Led QA for ESPN BET kiosk and OTC sunset work, pairing with developers and directors on API validation, regression coverage, Datadog checks, and hardware/software transition testing.",
    impact: "93% decrease in service interruptions",
  },
  {
    role: "Peer Mentor",
    team: "York University",
    dates: "Aug 2023 - May 2024",
    location: "Toronto, ON",
    summary:
      "Supported students with course selection, campus resources, and university questions while coordinating mentoring strategies with university staff and fellow mentors.",
    impact: "Student support and mentorship",
  },
];

const projects = [
  {
    title: "PumpScout",
    label: "Backend & iOS Developer",
    stack: "SwiftUI, Python, FastAPI, Playwright, SQLite",
    description:
      "Toronto GTA gas price tracker with a FastAPI scraping backend, SQLite price history, buy/sell recommendations, and a native SwiftUI iOS client.",
    href: "https://github.com/Dame33/PumpScout",
    color: "#1ed760",
  },
  {
    title: "KeepFresh",
    label: "Full-Stack Developer",
    stack: "Next.js, TypeScript, FastAPI, MongoDB, OpenAI API",
    description:
      "Grocery tracking app with fridge management, receipt OCR, AI recommendations, QR-assisted mobile flow, and configurable expiry email reminders.",
    href: "https://github.com/Dame33/KeepFresh",
    color: "#7dd3fc",
  },
  {
    title: "FocusFlow",
    label: "Python Developer",
    stack: "Python, MySQL",
    description:
      "Desktop time tracker that detects active applications, logs usage windows, and stores session data in MySQL for detailed productivity reports.",
    href: "https://github.com/Dame33/FocusFlow",
    color: "#f9a8d4",
  },
  {
    title: "Fumble",
    label: "iOS Project",
    stack: "Swift",
    description:
      "A fantasy football concept that borrows the swipe-and-match interaction model from dating apps for a sports-first mobile experience.",
    href: "https://github.com/Dame33/fumble",
    color: "#facc15",
  },
  {
    title: "Automated Watering",
    label: "Hardware / Software",
    stack: "Java, Arduino, Firmata4J",
    description:
      "Plant watering system that reads moisture levels, displays sensor data, activates a pump, and charts moisture trends over time.",
    href: "https://github.com/Dame33/AutomatedWatering",
    color: "#fb7185",
  },
  {
    title: "ChampionDex",
    label: "Web Project",
    stack: "HTML, CSS, Riot API",
    description:
      "A Pokédex-style League of Legends champion browser that displays champion data through a game-inspired interface.",
    href: "https://github.com/Dame33/ChampionDex",
    color: "#a78bfa",
  },
];

const techStack = [
  "Java",
  "Python",
  "Swift",
  "JavaScript",
  "React",
  "TypeScript",
  "FastAPI",
  "MongoDB",
  "SQLite",
  "MySQL",
  "Postman",
  "Jira",
  "Git",
  "LaunchDarkly",
  "Datadog",
  "Figma",
];

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <div className="spotify-portfolio">
          <aside className="sidebar" aria-label="Portfolio playlists">
            <a className="brand" href="#top" aria-label="Damon Lam home">
              <span className="brand-mark">D</span>
              <span>Damon Lam</span>
            </a>

            <nav className="playlist-nav">
              <p className="nav-kicker">Playlists</p>
              {playlists.map((item) => {
                const PlaylistIcon = item.icon;

                return (
                  <a key={item.label} className="playlist-link" href={item.href}>
                    <PlaylistIcon size={19} aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

          </aside>

          <div className="sidebar-panel" aria-label="Now playing">
            <p className="panel-title">Now playing</p>
            <p className="panel-track">Software Engineering at York University</p>
            <p className="panel-subtitle">Expected June 2027</p>
          </div>

          <main className="main-shell" id="top">
            <header className="topbar">
              <div className="search-menu">
                <button
                  className="search-pill"
                  type="button"
                  aria-label="Search sections"
                  aria-haspopup="true"
                  aria-expanded={searchOpen}
                  onClick={() => setSearchOpen((open) => !open)}
                >
                  <Search size={17} aria-hidden="true" />
                  <span>Search Damon Lam</span>
                  <ChevronDown size={17} aria-hidden="true" />
                </button>
                {searchOpen && (
                  <div className="search-dropdown" aria-label="Jump to section">
                    {playlists.map((item) => {
                      const SearchIcon = item.icon;

                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setSearchOpen(false)}
                        >
                          <SearchIcon size={17} aria-hidden="true" />
                          <span>{item.label}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="topbar-actions">
                <a
                  href={resumeUrl}
                  className="ghost-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  className="icon-link"
                  aria-label="Contact Damon"
                >
                  <Mail size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/Dame33"
                  className="icon-link optional-mobile"
                  aria-label="Damon's GitHub"
                >
                  <GitBranch size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/damon-lam"
                  className="icon-link optional-mobile"
                  aria-label="Damon's LinkedIn"
                >
                  <Link2 size={18} aria-hidden="true" />
                </a>
              </div>
            </header>

            <section className="artist-hero" aria-labelledby="hero-heading">
              <img className="artist-avatar" src={profile.avatar} alt="Damon Lam" />
              <div className="hero-copy">
                <p className="verified">Software Portfolio</p>
                <h1 id="hero-heading">{profile.name}</h1>
                <p className="listener-line">{profile.title}</p>
                <p className="profile-tagline">{profile.tagline}</p>
              </div>
            </section>

            <div className="content-surface">
              <section className="bio-section" id="about" aria-labelledby="about-heading">
                <div className="section-heading">
                  <h2 id="about-title">About</h2>
                  <a href="#contact" className="text-link">
                    Contact <ExternalLink size={15} aria-hidden="true" />
                  </a>
                </div>
                <p>{profile.bio}</p>
              </section>

              <section
                className="popular-section"
                id="experience"
                aria-labelledby="experience-heading"
              >
                <div className="section-heading">
                  <h2 id="experience-heading">Work Experience</h2>
                  <span className="section-meta">Popular</span>
                </div>

                <div className="experience-list">
                  {workExperience.map((job, index) => (
                    <article className="experience-row" key={`${job.role}-${job.dates}`}>
                      <span className="track-number">{index + 1}</span>
                      <button className="play-button" aria-label={`Play ${job.role}`}>
                        <Play size={16} fill="currentColor" aria-hidden="true" />
                      </button>
                      <div className="track-main">
                        <h3>{job.role}</h3>
                        <p>{job.team}</p>
                      </div>
                      <p className="track-summary">{job.summary}</p>
                      <div className="track-details">
                        <span>{job.dates}</span>
                        <span>{job.impact}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="split-section" id="tech" aria-labelledby="tech-heading">
                <div className="education-block">
                  <GraduationCap size={24} aria-hidden="true" />
                  <div>
                    <h2 id="tech-heading">Education</h2>
                    <p>Bachelor of Engineering (Hons), Software Engineering</p>
                    <span>York University - Expected June 2027</span>
                  </div>
                </div>

                <div className="tech-block" aria-label="Technical skills">
                  {techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </section>

              <section className="discography-section" id="projects" aria-labelledby="projects-heading">
                <div className="section-heading">
                  <h2 id="projects-heading">Personal Projects</h2>
                  <a href="https://github.com/Dame33?tab=repositories" className="text-link">
                    Show all <ExternalLink size={15} aria-hidden="true" />
                  </a>
                </div>

                <div className="project-grid">
                  {projects.map((project) => (
                    <a
                      className="project-card"
                      key={project.title}
                      href={project.href}
                      style={{ "--accent": project.color }}
                    >
                      <span className="album-art" aria-hidden="true">
                        <Code2 size={34} />
                      </span>
                      <span className="project-label">{project.label}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <span className="project-stack">{project.stack}</span>
                    </a>
                  ))}
                </div>
              </section>

              <section className="contact-section" id="contact" aria-labelledby="contact-heading">
                <div className="section-heading">
                  <h2 id="contact-heading">Contact</h2>
                  <span className="section-meta">Connect</span>
                </div>

                <div className="contact-grid">
                  <a className="contact-card" href="mailto:damonlam315@gmail.com">
                    <Mail size={22} aria-hidden="true" />
                    <span>
                      <strong>Email</strong>
                      damonlam315@gmail.com
                    </span>
                  </a>
                  <a className="contact-card" href="https://github.com/Dame33">
                    <GitBranch size={22} aria-hidden="true" />
                    <span>
                      <strong>GitHub</strong>
                      Dame33
                    </span>
                  </a>
                  <a className="contact-card" href="https://www.linkedin.com/in/damon-lam">
                    <Link2 size={22} aria-hidden="true" />
                    <span>
                      <strong>LinkedIn</strong>
                      Damon Lam
                    </span>
                  </a>
                  <a
                    className="contact-card"
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FileText size={22} aria-hidden="true" />
                    <span>
                      <strong>Resume</strong>
                      Open PDF
                    </span>
                  </a>
                </div>
              </section>

              <footer className="footer">
                <span>
                  <MapPin size={16} aria-hidden="true" /> Toronto, Canada
                </span>
                <span></span>
              </footer>
            </div>
          </main>

          <nav className="mobile-playlists" aria-label="Mobile portfolio playlists">
            {playlists.map((item) => {
              const PlaylistIcon = item.icon;

              return (
                <a key={item.label} href={item.href} aria-label={item.label}>
                  <PlaylistIcon size={20} aria-hidden="true" />
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}

export default App;

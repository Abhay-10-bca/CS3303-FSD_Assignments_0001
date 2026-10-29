
import React, { useEffect, useState } from "react";
import "./App.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "excellence", label: "Excellence" },
  { id: "vision", label: "Vision & Mission" },
  { id: "programs", label: "Programs" },
  { id: "faculty", label: "Faculty" },
  { id: "laboratories", label: "Laboratories" },
  { id: "research", label: "Research" },
  { id: "placements", label: "Placements" },
  { id: "achievements", label: "Achievements" },
  { id: "events", label: "Events" },
  { id: "gallery", label: "Gallery" },
  { id: "downloads", label: "Downloads" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const faculty = [
  { name: "Dr. S. Thamaraiselvi", role: "Head of Department", initials: "ST" },
  { name: "Dr. Mahesh Gopalakrishnan Pillai", role: "Associate Professor", initials: "MP" },
  { name: "Prof. Mahendran", role: "Assistant Professor", initials: "PM" },
  { name: "Prof. Sudha", role: "Assistant Professor", initials: "PS" },
  { name: "Prof. Anbarasi", role: "Assistant Professor", initials: "PA" },
];

const labs = [
  ["Programming Lab", "Hands-on programming, problem solving and software development."],
  ["Artificial Intelligence Lab", "Explore machine learning, intelligent systems and AI tools."],
  ["Data Analytics Lab", "Learn data analysis, visualization and statistical techniques."],
  ["Networking Lab", "Understand network infrastructure, protocols and communication."],
  ["Web Development Lab", "Build modern, responsive and interactive web applications."],
  ["Database Lab", "Practice database design, SQL and data management."],
];

const Icon = ({ children }) => <span className="gold-icon">{children}</span>;

function SectionTitle({ eyebrow, children, description }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [facultySearch, setFacultySearch] = useState("");
  const [galleryImage, setGalleryImage] = useState(null);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

        setScrollProgress(Math.min(100, Math.max(0, progress)));

        const marker = window.scrollY + window.innerHeight * 0.3;
        let current = "home";

        sections.forEach(({ id }) => {
          const element = document.getElementById(id);
          if (element && element.offsetTop <= marker) {
            current = id;
          }
        });

        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 3
        ) {
          current = "contact";
        }

        setActiveSection(current);
        ticking = false;
      });
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  const goToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  };

  const filteredFaculty = faculty.filter((person) =>
    `${person.name} ${person.role}`
      .toLowerCase()
      .includes(facultySearch.toLowerCase())
  );

  const stats = [
    ["Publications", "350+", "Research papers"],
    ["Projects", "75+", "Completed projects"],
    ["Patents", "25+", "Filed and published"],
    ["Collaborations", "40+", "Academic partnerships"],
  ];

  const placementStats = [
    ["Highest Package", "28 LPA"],
    ["Average Package", "6.5 LPA"],
    ["Placement Rate", "97%"],
    ["Recruiters", "210+"],
  ];

  const recruiters = [
    "Infosys", "Accenture", "Wipro", "TCS", "Cognizant",
    "Zoho", "HCL", "IBM", "Amazon", "Capgemini",
  ];

  const downloads = [
    ["Academic Calendar", "PDF"],
    ["Academic Regulations", "PDF"],
    ["Course Syllabus", "PDF"],
    ["Project Guidelines", "PDF"],
  ];

  const achievements = [
    ["🏅", "National Recognition", "Students recognised for outstanding academic performance."],
    ["🏆", "Hackathon Winners", "Creative solutions and award-winning student projects."],
    ["🚀", "Research Excellence", "Innovation through research and practical learning."],
  ];

  const events = [
    ["01", "National Level Coding Competition", "Technical Event"],
    ["12", "Artificial Intelligence Workshop", "Workshop"],
    ["24", "Campus Placement Drive", "Career"],
  ];

  return (
    <div className="website">
      <div className="scroll-progress">
        <div style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="top-strip">
        <span>Department of Computer Applications</span>
        <span>Learn · Innovate · Excel</span>
      </div>

      <header className="navbar">
        
<button
  className="brand"
  onClick={() => goToSection("home")}
  aria-label="RV University home"
>
  <img
    src="/rv-university-logo.png"
    alt="RV University — Go, change the world"
    className="university-logo"
  />
</button>


        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {sections.map((section) => (
            <button
              key={section.id}
              className={
                activeSection === section.id ? "nav-link active" : "nav-link"
              }
              onClick={() => goToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="hero-tag">WELCOME TO OUR DEPARTMENT</span>
            <h1>
              Department of
              <br />
              <span>Computer</span>
              <br />
              <span>Applications</span>
            </h1>
            <p>
              Empowering students with technology, innovation and the skills
              to build tomorrow&apos;s digital world.
            </p>
            <div className="hero-actions">
              <button className="btn btn-gold" onClick={() => goToSection("programs")}>
                Explore Programs ↗
              </button>
              <button className="btn btn-outline" onClick={() => goToSection("about")}>
                Discover More
              </button>
            </div>
          </div>
          <div className="hero-bottom">
            <span>01 / COMPUTER APPLICATIONS</span>
            <span>BUILDING FUTURE TECHNOLOGY</span>
          </div>
        </section>

        <section className="affiliations">
          {["NAAC+", "NBA+", "ISO+", "NIRF+", "IIC+", "AICTE+"].map((item, i) => (
            <div className="affiliation-card" key={item}>
              <span className="award-symbol">{i % 2 === 0 ? "♜" : "✦"}</span>
              <strong>{item}</strong>
              <small>Accredited</small>
            </div>
          ))}
        </section>

        <section id="about" className="section section-white">
          <div className="message-layout">
            <div className="hod-portrait">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=85"
                alt="Department head portrait"
              />
            </div>
            <div className="message-copy">
              <span className="eyebrow">A MESSAGE FROM OUR LEADERSHIP</span>
              <h2>Message from the Head of Department</h2>
              <p>
                Welcome to the Department of Computer Applications. We are
                committed to academic excellence, practical learning and
                nurturing the next generation of technology professionals.
              </p>
              <p>
                Through innovative teaching, research and industry engagement,
                we encourage our students to think critically, build
                confidently and create meaningful change.
              </p>
              <strong className="signature">Head of Department</strong>
              <span className="muted">Department of Computer Applications</span>
              <button className="btn btn-gold small-btn" onClick={() => goToSection("faculty")}>
                Meet Our Faculty ↗
              </button>
            </div>
          </div>
        </section>

        <section id="excellence" className="section section-gray">
          <SectionTitle eyebrow="WHAT SETS US APART" description="Building strong foundations for tomorrow's technology leaders.">
            Excellence in Computer Applications
          </SectionTitle>
          <div className="card-grid three">
            {[
              ["◈", "Overview", "A dynamic learning environment combining computer science fundamentals with real-world application.", ["Industry-focused curriculum", "Practical learning", "Career development"]],
              ["◎", "Objectives", "Preparing students with the technical knowledge and professional skills needed in a changing world.", ["Technical proficiency", "Critical thinking", "Lifelong learning"]],
              ["✦", "Department Highlights", "A community built around collaboration, creativity, innovation and academic excellence.", ["Expert faculty", "Modern laboratories", "Industry connections"]],
            ].map(([icon, title, description, points]) => (
              <article className="info-card" key={title}>
                <Icon>{icon}</Icon>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="vision" className="section section-white">
          <SectionTitle eyebrow="OUR GUIDING PRINCIPLES">Vision &amp; Mission</SectionTitle>
          <div className="card-grid two">
            <article className="vision-card">
              <Icon>◉</Icon>
              <h3>Vision</h3>
              <p>To be a centre of excellence in computer applications, innovation and technology-driven education.</p>
            </article>
            <article className="vision-card">
              <Icon>✦</Icon>
              <h3>Mission</h3>
              <p>To empower learners through quality education, ethical practice, research and industry collaboration.</p>
            </article>
          </div>
        </section>

        <section id="programs" className="section section-gray">
          <SectionTitle eyebrow="LEARN WITH PURPOSE" description="Choose a learning path that aligns with your goals.">
            Programs Offered
          </SectionTitle>
          <div className="program-grid">
            {[
              ["▣", "BCA", "Bachelor of Computer Applications", "3 Years"],
              ["▤", "MCA", "Master of Computer Applications", "2 Years"],
              ["⌘", "Skill Programs", "Industry-oriented certifications", "Short Term"],
            ].map(([icon, name, desc, duration]) => (
              <article className="program-card" key={name}>
                <Icon>{icon}</Icon>
                <h3>{name}</h3>
                <p>{desc}</p>
                <span className="muted">{duration}</span>
                <button className="text-link" onClick={() => goToSection("contact")}>Learn More ↗</button>
              </article>
            ))}
          </div>
        </section>

        <section id="faculty" className="section section-gray">
          <SectionTitle eyebrow="MEET THE PEOPLE BEHIND OUR SUCCESS" description="Dedicated educators guiding the next generation of professionals.">
            Faculty Directory
          </SectionTitle>
          <div className="faculty-toolbar">
            <input
              type="search"
              placeholder="Search faculty by name or designation..."
              value={facultySearch}
              onChange={(e) => setFacultySearch(e.target.value)}
              aria-label="Search faculty"
            />
            <span className="muted">{filteredFaculty.length} faculty members</span>
          </div>
          <div className="card-grid faculty-grid">
            {filteredFaculty.map((person, i) => (
              <article className="faculty-card" key={person.name}>
                <div className={`faculty-avatar avatar-${i % 5}`}>
                  {person.initials}
                </div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
                <span className="faculty-specialty">Computer Applications</span>
                <button className="btn btn-gold small-btn" onClick={() => goToSection("contact")}>
                  Contact
                </button>
              </article>
            ))}
            {filteredFaculty.length === 0 && <p>No faculty members found.</p>}
          </div>
        </section>

        <section id="laboratories" className="section section-white">
          <SectionTitle eyebrow="LEARN BY DOING" description="Purpose-built spaces for experimentation, collaboration and discovery.">
            Advanced Laboratories
          </SectionTitle>
          <div className="card-grid three">
            {labs.map(([name, desc], i) => (
              <article className="lab-card" key={name}>
                <div className={`lab-image lab-${i + 1}`}>
                  <span>{["⌘", "✳", "◉", "⌁", "⌨", "▤"][i]}</span>
                </div>
                <Icon>{["⌘", "✳", "◉", "⌁", "⌨", "▤"][i]}</Icon>
                <h3>{name}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="research" className="section section-gray">
          <SectionTitle eyebrow="CREATING KNOWLEDGE, SHAPING TOMORROW" description="Encouraging meaningful discoveries and real-world impact.">
            Research &amp; Innovation
          </SectionTitle>
          <div className="card-grid four">
            {stats.map(([label, value, detail]) => (
              <article className="metric-card" key={label}>
                <Icon>✥</Icon>
                <h3>{label}</h3>
                <strong>{value}</strong>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="placements" className="section section-white">
          <SectionTitle eyebrow="CAREERS THAT MOVE YOU FORWARD" description="Turning learning into rewarding career opportunities.">
            Placement Excellence
          </SectionTitle>
          <div className="card-grid four">
            {placementStats.map(([label, value], i) => (
              <article className="placement-card" key={label}>
                <Icon>{["▣", "↗", "◉", "♜"][i]}</Icon>
                <strong>{value}</strong>
                <p>{label}</p>
              </article>
            ))}
          </div>
          <div className="placement-banner">
            <div><strong>1200+</strong><span>Career opportunities</span></div>
            <div><strong>150+</strong><span>Recruitment drives</span></div>
            <div><strong>2500+</strong><span>Alumni network</span></div>
          </div>
        </section>

        <section id="recruiters" className="section section-gray">
          <SectionTitle eyebrow="OUR INDUSTRY CONNECTIONS">Our Recruiting Partners</SectionTitle>
          <div className="recruiter-list">
            {recruiters.map((name) => <div key={name}>{name}</div>)}
          </div>
        </section>

        <section id="achievements" className="section section-white">
          <SectionTitle eyebrow="CELEBRATING SUCCESS">Student Achievements</SectionTitle>
          <div className="card-grid three">
            {achievements.map(([icon, title, description]) => (
              <article className="achievement-card" key={title}>
                <span className="achievement-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="events" className="section section-gray">
          <SectionTitle eyebrow="WHAT'S HAPPENING ON CAMPUS">News &amp; Events</SectionTitle>
          <div className="timeline">
            {events.map(([day, title, type], i) => (
              <article className={`timeline-item timeline-${i % 2}`} key={title}>
                <span className="event-type">{type}</span>
                <div className="event-date"><strong>{day}</strong><span>OCT</span></div>
                <div><h3>{title}</h3><p>Discover opportunities to learn, connect and participate.</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="section section-white">
          <SectionTitle eyebrow="MOMENTS THAT MATTER">Department Gallery</SectionTitle>
          <div className="gallery-grid">
            {[
              ["photo-1523050854058-8df90110c9f1", "Campus life"],
              ["photo-1523580494863-6f3031224c94", "Student activities"],
              ["photo-1516321318423-f06f85e504b3", "Technology learning"],
              ["photo-1517245386807-bb43f82c33c4", "Team collaboration"],
              ["photo-1517486808906-6ca8b3f04846", "College events"],
              ["photo-1521737711867-e3b97375f902", "Student teamwork"],
            ].map(([id, label]) => (
              <button
                className="gallery-item"
                key={id}
                onClick={() => setGalleryImage({ id, label })}
                aria-label={`View ${label}`}
              >
                <img src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`} alt={label} loading="lazy" />
                <span>{label} ↗</span>
              </button>
            ))}
          </div>
        </section>

        <section id="downloads" className="section section-gray">
          <SectionTitle eyebrow="USEFUL ACADEMIC RESOURCES">Downloads</SectionTitle>
          <div className="card-grid four">
            {downloads.map(([title, type]) => (
              <article className="download-card" key={title}>
                <Icon>▤</Icon>
                <h3>{title}</h3>
                <p>Department resource · {type}</p>
                <button className="text-link" onClick={() => window.alert("Please add the official " + title + " file to the website.")}>View Resource ↗</button>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="section section-white">
          <SectionTitle eyebrow="VOICES FROM OUR COMMUNITY">Testimonials</SectionTitle>
          <div className="card-grid three">
            {[
              ["A", "Ananya R.", "Student", "The supportive faculty and practical projects helped me build confidence in my technical skills."],
              ["K", "Karthik S.", "Alumnus", "The department gave me the foundation and opportunities I needed to grow professionally."],
              ["P", "Priya M.", "Student", "The learning environment encourages creativity, teamwork and continuous improvement."],
            ].map(([initial, name, role, quote]) => (
              <article className="testimonial-card" key={name}>
                <div className="testimonial-avatar">{initial}</div>
                <div className="stars">★★★★★</div>
                <p>“{quote}”</p>
                <strong>{name}</strong>
                <span className="muted">{role}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section-gray">
          <SectionTitle eyebrow="WE'D LOVE TO HEAR FROM YOU">Contact Department</SectionTitle>
          <div className="contact-layout">
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                setFormSent(true);
              }}
            >
              <h3>Send us a message</h3>
              <input placeholder="Your name" aria-label="Your name" required />
              <input type="email" placeholder="Email address" aria-label="Email address" required />
              <input placeholder="Subject" aria-label="Subject" required />
              <textarea placeholder="Your message..." aria-label="Your message" rows="4" required />
              <button className="btn btn-gold" type="submit">Send Message ↗</button>
              {formSent && <p className="form-notice">Form validated successfully. Connect an email service to deliver messages.</p>}
            </form>
            <div className="contact-details">
              <article className="contact-card">
                <h3>Department Office</h3>
                <p>⌖ &nbsp; Department of Computer Applications</p>
                <p>✉ &nbsp; department@example.edu</p>
                <p>☎ &nbsp; +91 00000 00000</p>
                <p>◷ &nbsp; Monday – Friday, 9 AM – 4 PM</p>
              </article>
              <div className="map-placeholder">
                <span>⌖</span>
                <strong>Find Our Department</strong>
                <p>Add your institution's address or map here.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-about">
            <div className="footer-brand">
  <img
    src="/rv-university-logo.png"
    alt="RV University"
    className="footer-university-logo"
  />
</div>
            <p>Inspiring learning, encouraging innovation and preparing students for a technology-driven future.</p>
            <div className="social-links">
              {["f", "in", "◎", "▶"].map((icon) => <a href="#contact" key={icon} aria-label={`Social link ${icon}`}>{icon}</a>)}
            </div>
          </div>
          <div><h4>Quick Links</h4>{sections.slice(0, 6).map((s) => <button key={s.id} onClick={() => goToSection(s.id)}>{s.label}</button>)}</div>
          <div><h4>Explore</h4>{sections.slice(6, 12).map((s) => <button key={s.id} onClick={() => goToSection(s.id)}>{s.label}</button>)}</div>
          <div><h4>Get In Touch</h4><p>Department of Computer Applications</p><p>Monday – Friday</p><button onClick={() => goToSection("contact")}>Contact Us ↗</button></div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Department of Computer Applications.</span>
          <button onClick={() => goToSection("home")}>Back to Top ↑</button>
        </div>
      </footer>

      {galleryImage && (
        <div className="lightbox" onClick={() => setGalleryImage(null)}>
          <button className="lightbox-close" onClick={() => setGalleryImage(null)} aria-label="Close image">✕</button>
          <img
            src={`https://images.unsplash.com/${galleryImage.id}?auto=format&fit=max&w=1400&q=90`}
            alt={galleryImage.label}
          />
          <p>{galleryImage.label}</p>
        </div>
      )}

      <button className="back-to-top" onClick={() => goToSection("home")} aria-label="Back to top">↑</button>
    </div>
  );
}

export default App;

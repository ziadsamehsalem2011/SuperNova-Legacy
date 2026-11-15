
import './style.css'

// ==========================================
// LEGACY — VOICES BEYOND EARTH
// Main Application
// ==========================================

const app = document.querySelector('#app');

// ==========================================
// WORLD INFORMATION
// ==========================================

const worlds = {
  moon: {
    name: 'THE MOON',
    subtitle: 'A SILENT WITNESS TO HUMAN EXPLORATION',
    number: '01',
    description:
      'Humanity left more than footprints behind. Explore the equipment that became part of the lunar landscape.',
    status: 'LUNAR EXPLORATION',
    equipment: [
      {
        name: 'Apollo 11 Laser Ranging Retroreflector',
        mission: 'APOLLO 11',
        description:
          'A scientific instrument placed on the lunar surface to support precise measurements between Earth and the Moon.',
        status: 'RESEARCH PROFILE',
        story: 'apollo-retroreflector'
      }
    ]
  },

  mars: {
    name: 'MARS',
    subtitle: 'THE RED PLANET HOLDS THEIR LEGACY',
    number: '02',
    description:
      'Robotic explorers traveled millions of kilometers to study another world. Their journeys left a legacy across the Martian surface.',
    status: 'MARTIAN EXPLORATION',
    equipment: []
  }
};

// ==========================================
// TIMELINE DATA
// ==========================================

const timelineStages = [
  {
    title: 'BEFORE THE MISSION',
    description:
      'Trial placeholder: Discover the preparation behind a scientific instrument and the purpose it was designed to serve.',
    label: 'MISSION ARCHIVE',
    visual: 'preparation'
  },
  {
    title: 'THE JOURNEY',
    description:
      'Trial placeholder: Follow the journey from its starting point toward a destination beyond Earth.',
    label: 'JOURNEY LOG',
    visual: 'journey'
  },
  {
    title: 'THE DESTINATION',
    description:
      'Trial placeholder: Explore the moment the instrument reaches its destination and becomes part of another world.',
    label: 'DEPLOYMENT RECORD',
    visual: 'destination'
  },
  {
    title: 'THE LEGACY',
    description:
      'Trial placeholder: Discover how an instrument can leave a scientific legacy beyond the original mission.',
    label: 'LEGACY ARCHIVE',
    visual: 'legacy'
  }
];

// ==========================================
// HOMEPAGE
// ==========================================

function renderHome() {
  app.innerHTML = `

    <nav class="navbar">
      <a href="#home" class="logo">LEGACY<span>.</span></a>

      <div class="nav-links">
        <a href="#mission">THE MISSION</a>
        <a href="#worlds">EXPLORE</a>
        <a href="#about">ABOUT</a>
      </div>

      <a href="#worlds" class="nav-cta">
        DISCOVER <span>↗</span>
      </a>
    </nav>

    <main>
      <section class="hero" id="mission">
        <div class="hero-overlay"></div>

        <div class="hero-content">
          <p class="eyebrow">
          </p>

          <h1>
            THEIR MISSION<br />
            ENDED.<br />
            <span>THEIR STORY</span><br />
            DIDN'T.
          </h1>

          <p class="hero-description">
            Beyond every mission lies a legacy.
            Discover the forgotten machines that helped
            humanity explore worlds beyond our own.
          </p>

          <a href="#worlds" class="primary-btn">
            EXPLORE THE LEGACY <span>↗</span>
          </a>
        </div>

        <div class="hero-footer">
          <span>THE STORY CONTINUES ↓</span>
        </div>

        <div class="hero-index">L / 001</div>
      </section>

      <section class="worlds" id="worlds">
        <div class="section-heading">
          <p class="eyebrow">CHOOSE YOUR DESTINATION</p>
          <h2>Two worlds.<br /><span>Countless legacies.</span></h2>
          <p>
            Every abandoned instrument has a story.
            Where will you begin?
          </p>
        </div>

        <div class="world-cards">

          <a href="#moon" class="world-card moon-card">
            <div class="planet moon-planet"></div>

            <div class="card-content">
              <h3>THE<br />MOON</h3>
              <span class="card-link">EXPLORE LUNAR LEGACY ↗</span>
            </div>
          </a>

          <a href="#mars" class="world-card mars-card">
            <div class="planet mars-planet"></div>

            <div class="card-content">
              <h3>THE<br />MARS</h3>
              <span class="card-link">EXPLORE MARTIAN LEGACY ↗</span>
            </div>
          </a>

        </div>
      </section>

      <footer id="about">
        <a href="#home" class="logo">LEGACY<span>.</span></a>
        <p>MY MISSION ENDED. MY LEGACY DIDN'T.</p>
        <span>NASA SPACE APPS CHALLENGE 2026</span>
      </footer>
    </main>
  `;

  window.scrollTo(0, 0);
}

// ==========================================
// WORLD EXPLORER
// ==========================================

function renderWorld(worldKey) {
  const world = worlds[worldKey];

  if (!world) {
    renderHome();
    return;
  }

  const equipmentHTML = world.equipment.length
    ? world.equipment.map((item, index) => `
        <article
          class="equipment-card"
          data-story="${item.story}"
          role="button"
          tabindex="0"
        >
          <span class="eyebrow">
            EQUIPMENT / ${String(index + 1).padStart(2, '0')}
          </span>

          <h3>${item.name}</h3>

          <p>${item.description}</p>

          <span class="card-number">
            ${item.mission} — ${item.status}
          </span>
        </article>
      `).join('')
    : `
        <div class="empty-state">
          <span class="eyebrow">RESEARCH IN PROGRESS</span>
          <h3>Stories waiting to be discovered.</h3>
          <p>
            Equipment profiles for this world
            will appear here as the research is completed.
          </p>
        </div>
      `;

  app.innerHTML = `
    <nav class="navbar">
      <a href="#home" class="logo">LEGACY<span>.</span></a>

      <div class="nav-links">
        <a href="#home">HOME</a>
        <a href="#${worldKey}">EXPLORE</a>
      </div>

      <a href="#worlds" class="nav-cta">
        CHANGE WORLD ↗
      </a>
    </nav>

    <main class="world-page">
      <section class="world-intro">
        <p class="eyebrow">
          ${world.number} — ${world.status}
        </p>

        <h1>${world.name}</h1>

        <h2>${world.subtitle}</h2>

        <p class="world-description">
          ${world.description}
        </p>

        <a href="#equipment" class="primary-btn">
          DISCOVER EQUIPMENT ↗
        </a>
      </section>

      <section class="equipment-section" id="equipment">
        <div class="section-heading">
          <p class="eyebrow">THE ARTIFACTS</p>
          <h2>Explore the <span>equipment.</span></h2>
          <p>
            Every instrument has a purpose.
            Every mission leaves something behind.
          </p>
        </div>

        <div class="equipment-grid">
          ${equipmentHTML}
        </div>
      </section>

      <footer>
        <a href="#home" class="logo">LEGACY<span>.</span></a>
        <p>MY MISSION ENDED. MY LEGACY DIDN'T.</p>
        <span>NASA SPACE APPS CHALLENGE 2026</span>
      </footer>
    </main>
  `;

  window.scrollTo(0, 0);
}

// ==========================================
// EQUIPMENT STORY PAGE
// ==========================================

function renderStory() {
  app.innerHTML = `
    <nav class="navbar">
      <a href="#home" class="logo">LEGACY<span>.</span></a>

      <div class="nav-links">
        <a href="#moon">BACK TO THE MOON</a>
      </div>

      <a href="#home" class="nav-cta">HOME ↗</a>
    </nav>

    <nav class="breadcrumb">
      <a href="#home">HOME</a>
      <span>/</span>
      <a href="#moon">THE MOON</a>
      <span>/</span>
      <span class="current">APOLLO 11 RETROREFLECTOR</span>
    </nav>

    <main class="story-page">

      <section class="story-hero">
        <p class="eyebrow">LUNAR LEGACY / APOLLO 11</p>

        <h1>STILL HERE.<br /><span>STILL SPEAKING.</span></h1>

        <p>
          I was built for a mission that lasted only a few days.
          But my scientific story continues far beyond that moment.
        </p>

        <a href="#story" class="primary-btn">
          DISCOVER MY STORY ↓
        </a>
      </section>

      <section class="timeline-section" id="timeline">

        <p class="eyebrow">INTERACTIVE JOURNEY</p>

        <h2>THE JOURNEY <span>SO FAR.</span></h2>

        <p class="demo-warning">
          DEMO CONTENT — NOT NASA VERIFIED
        </p>

        <div class="timeline-layout">

          <div class="timeline-buttons">

            <button class="timeline-btn active" data-stage="0">
              <span>01</span>
              BEFORE THE MISSION
            </button>

            <button class="timeline-btn" data-stage="1">
              <span>02</span>
              THE JOURNEY
            </button>

            <button class="timeline-btn" data-stage="2">
              <span>03</span>
              THE DESTINATION
            </button>

            <button class="timeline-btn" data-stage="3">
              <span>04</span>
              THE LEGACY
            </button>

          </div>

          <div class="timeline-display">

            <div class="timeline-visual preparation" id="timeline-visual">
              <div class="visual-orbit orbit-one"></div>
              <div class="visual-orbit orbit-two"></div>
              <div class="visual-core"></div>

              <div class="visual-extra" id="visual-extra">
                <span class="visual-dot"></span>
              </div>

              <span class="visual-label" id="visual-label">
                MISSION ARCHIVE
              </span>
            </div>

            <span class="eyebrow" id="stage-number">
              STAGE 01
            </span>

            <h3 id="stage-title">
              BEFORE THE MISSION
            </h3>

            <p id="stage-description">
              Trial placeholder. Official NASA information
              will be added after research verification.
            </p>

            <div class="timeline-progress">
              <div class="timeline-progress-fill" id="progress-fill"></div>
            </div>

          </div>

        </div>

      </section>

      <section class="story-content" id="story">

        <p class="eyebrow">01 — WHO AM I?</p>

        <h2>THE RETROREFLECTOR</h2>

        <p>
          I am the Apollo 11 Laser Ranging Retroreflector,
          a scientific instrument deployed on the Moon
          during the Apollo 11 mission in 1969.
        </p>

        <p>
          My purpose was simple: reflect laser pulses sent
          from Earth back toward their source, allowing
          scientists to measure the Earth-Moon distance.
        </p>

        <div class="story-divider"></div>

        <p class="eyebrow">02 — MY MISSION</p>

        <h2>MORE THAN A FOOTPRINT</h2>

        <p>
          My mission was not to explore the lunar surface.
          I was left there to help scientists study the
          relationship between Earth and the Moon.
        </p>

        <div class="story-divider"></div>

        <p class="eyebrow">03 — MY LEGACY</p>

        <h2>THE MISSION NEVER REALLY ENDED.</h2>

        <p>
          Lunar laser ranging continues to use retroreflectors
          on the Moon for scientific measurements.
          My legacy is part of an ongoing scientific story.
        </p>

        <p class="story-quote">
          "My mission ended. My legacy didn't."
        </p>

      </section>

      <button
        class="back-to-top"
        id="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </button>

      <footer>
        <a href="#home" class="logo">LEGACY<span>.</span></a>
        <p>MY MISSION ENDED. MY LEGACY DIDN'T.</p>
        <span>NASA SPACE APPS CHALLENGE 2026</span>
      </footer>

    </main>
  `;

  window.scrollTo(0, 0);
}

// ==========================================
// NAVIGATION
// ==========================================

function navigate() {
  const route = window.location.hash.slice(1);

  const pageRoutes = {
    moon: () => renderWorld('moon'),
    mars: () => renderWorld('mars'),
    'apollo-retroreflector': () => renderStory(),
  };

  if (pageRoutes[route]) {
    pageRoutes[route]();
  } else if (!route || route === 'home') {
    renderHome();
  } else {
    const currentSection = app.querySelector(`[id="${route}"]`);

    if (currentSection) {
      return;
    }

    renderHome();

    requestAnimationFrame(() => {
      const targetSection = app.querySelector(`[id="${route}"]`);
      targetSection?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// ==========================================
// TIMELINE INTERACTION
// ==========================================

app.addEventListener('click', (event) => {
  const button = event.target.closest('.timeline-btn');

  if (!button) return;

  const stageIndex = Number(button.dataset.stage);
  const stage = timelineStages[stageIndex];

  if (!stage) return;

  const display = app.querySelector('.timeline-display');
  const visual = app.querySelector('#timeline-visual');

  if (!display || !visual) return;

  app.querySelectorAll('.timeline-btn').forEach((btn) => {
    btn.classList.remove('active');
  });

  button.classList.add('active');

  // Update visual scene
  visual.className = `timeline-visual ${stage.visual}`;

  app.querySelector('#visual-label').textContent =
    stage.label;

  // Update progress
  app.querySelector('#progress-fill').style.width =
    `${((stageIndex + 1) / timelineStages.length) * 100}%`;

  // Animate timeline content
  display.classList.remove('stage-reveal');
  void display.offsetWidth;
  display.classList.add('stage-reveal');

  // Update stage information
  app.querySelector('#stage-number').textContent =
    `STAGE ${String(stageIndex + 1).padStart(2, '0')}`;

  app.querySelector('#stage-title').textContent =
    stage.title;

  app.querySelector('#stage-description').textContent =
    stage.description;
});

// ==========================================
// EQUIPMENT CARD INTERACTION
// ==========================================

app.addEventListener('click', (event) => {
  const card = event.target.closest('.equipment-card');

  if (!card) return;

  const story = card.dataset.story;

  if (story) {
    window.location.hash = story;
  }
});

// ==========================================
// BACK TO TOP
// ==========================================

app.addEventListener('click', (event) => {
  if (event.target.closest('#back-to-top')) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});

window.addEventListener('scroll', () => {
  const button = app.querySelector('#back-to-top');

  if (!button) return;

  button.classList.toggle(
    'visible',
    window.scrollY > 400
  );
});

// ==========================================
// START APPLICATION
// ==========================================

window.addEventListener('hashchange', navigate);

navigate();

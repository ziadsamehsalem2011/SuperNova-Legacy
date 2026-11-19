
import './style.css';

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
    description:
      'Humanity left more than footprints behind. Explore the equipment that became part of the lunar landscape.',
    status: 'LUNAR EXPLORATION',
    equipment: [
      {
        name: 'Apollo 11 Lunar Module (Eagle)',
        mission: 'APOLLO 11',
        description:
          'The lunar module that carried the first humans to the surface of the Moon.',
        story: 'apollo-11',
        type: 'CREWED LUNAR MODULE',
      },
      {
        name: 'Apollo 12 Lunar Module (Intrepid)',
        mission: 'APOLLO 12',
        description:
          'The lunar module that delivered astronauts Charles Conrad and Alan Bean to the lunar surface.',
        story: 'apollo-12',
        type: 'CREWED LUNAR MODULE',
      },
      {
        name: 'Apollo 15 Lunar Module (Falcon)',
        mission: 'APOLLO 15',
        description:
          'The lunar module that supported the first Apollo mission focused on extended lunar surface exploration.',
        story: 'apollo-15',
        type: 'CREWED LUNAR MODULE',
      },
      {
        name: 'Surveyor 3 Lunar Lander',
        mission: 'SURVEYOR 3',
        description:
          'An uncrewed robotic spacecraft that landed on the Moon and helped prepare the way for human exploration.',
        story: 'surveyor-3',
        type: 'ROBOTIC LUNAR LANDER',
      },
    ],
  },

  mars: {
    name: 'MARS',
    subtitle: 'TRACES OF HUMAN CURIOSITY ON THE RED PLANET',
    description:
      'From the earliest landers to modern robotic explorers, discover the machines that changed our understanding of Mars and beyond.',
    status: 'INTERPLANETARY EXPLORATION',

    sections: [
      {
        title: 'MARTIAN MISSIONS',
        subtitle: 'EXPLORING THE RED PLANET',
        equipment: [
          {
            name: 'Sojourner Rover',
            mission: 'MARS PATHFINDER',
            description:
              'The first successful robotic rover to explore the surface of Mars.',
            story: 'sojourner',
            type: 'MARS ROVER',
          },
          {
            name: 'Spirit & Opportunity Rovers',
            mission: 'MARS EXPLORATION ROVER',
            description:
              'Two robotic explorers that transformed our understanding of the history of water on Mars.',
            story: 'spirit-opportunity',
            type: 'MARS ROVERS',
          },
          {
            name: 'Viking 1 Lander',
            mission: 'VIKING 1',
            description:
              'The first spacecraft to successfully operate on the surface of Mars.',
            story: 'viking-1',
            type: 'MARS LANDER',
          },
          {
            name: 'InSight Lander',
            mission: 'INSIGHT',
            description:
              'A robotic lander designed to study the deep interior of Mars and understand its seismic activity.',
            story: 'insight',
            type: 'MARS LANDER',
          },
          {
            name: 'Ingenuity Mars Helicopter',
            mission: 'MARS 2020',
            description:
              'The first aircraft to achieve powered, controlled flight on another planet.',
            story: 'ingenuity',
            type: 'MARS HELICOPTER',
          },
        ],
      },

      {
        title: 'BEYOND MARS',
        subtitle: 'EXPLORING WORLDS ACROSS OUR SOLAR SYSTEM',
        equipment: [
          {
            name: 'Dawn Spacecraft',
            mission: 'DAWN',
            description:
              'A spacecraft that explored the protoplanets Vesta and Ceres, revealing clues about the early Solar System.',
            story: 'dawn',
            type: 'DEEP SPACE PROBE',
          },
          {
            name: 'Kepler Space Telescope',
            mission: 'KEPLER',
            description:
              'A space telescope that discovered thousands of planets beyond our Solar System.',
            story: 'kepler',
            type: 'SPACE TELESCOPE',
          },
          {
            name: 'Pioneer 10',
            mission: 'PIONEER 10',
            description:
              'The first spacecraft to travel through the asteroid belt and make close-up observations of Jupiter.',
            story: 'pioneer-10',
            type: 'DEEP SPACE PROBE',
          },
          {
            name: 'NEAR Shoemaker',
            mission: 'NEAR',
            description:
              'The first spacecraft to orbit an asteroid and successfully land on its surface.',
            story: 'near-shoemaker',
            type: 'ASTEROID EXPLORER',
          },
        ],
      },
    ],
  },
};

// ==========================================
// EQUIPMENT DATA — TEAM EXCEL
// ==========================================

const equipmentData = {
  sojourner: {
    equipmentName: 'Sojourner Rover',
    missionName: 'Mars Pathfinder',
    equipmentType: 'Rover',
    launchDate: 'Dec. 4, 1996 UTC',
    destination: 'Ares Vallis, Mars',

    shortIntroduction:
      'I am Sojourner, the first-ever robotic rover to safely land on the Red Planet and explore the Martian surface.',

    whyCreated:
      'I was originally designed as a technology demonstration to deliver an instrumented lander and a free-ranging robotic rover to Mars.',

    mainObjective:
      'My main objective was to land a rover on Mars and provide engineering data on the new technologies being demonstrated.',

    scientificRole:
      'I carried scientific instruments to analyze the Martian atmosphere, climate, geology, and the composition of rocks and soil.',

    massDimensions:
      'I weigh 23 pounds (10.6 kilograms), and I stand at a full height of 1 foot (30 centimeters).',

    scientificInstruments:
      'I used an Alpha Proton X-ray Spectrometer to determine the elemental composition of rocks, three cameras for images, and an Atmospheric Structure Instrument/Meteorology Package.',

    powerSource: 'Solar panels and rechargeable batteries.',

    specialTechnologies:
      'I used an innovative method to land, assisted by a parachute and a giant system of airbags measuring 19 feet in diameter to cushion the impact.',

    stage1:
      'I was launched atop a Delta II 7925 rocket from Cape Canaveral Air Force Station, Florida.',

    stage2: 'I was launched on December 4, 1996.',

    stage3:
      "On July 4, 1997, I bounced like a giant beach ball about 15 times before coming to rest in Ares Vallis, an ancient flood plain in Mars' northern hemisphere. On Sol 2, I rolled down the lander's rear ramp onto the surface.",

    scientificFindings:
      'I helped reveal rounded pebbles and cobbles suggesting ancient running water, while Pathfinder investigations showed that Martian dust contains magnetic minerals such as maghemite.',

    importantExperiments:
      'I observed early morning water ice clouds and recorded abrupt temperature fluctuations.',

    majorAchievements:
      'I demonstrated that a rover could successfully operate on the Martian surface and helped provide evidence of Mars’ ancient watery past.',

    contributions:
      'I proved that Mars was at one time in its past warm and wet.',

    missionEndDate: 'Sept. 27, 1997.',

    endingReason:
      'The mission ended after communication with the Pathfinder lander was lost.',

    lastCommunication: 'September 27, 1997.',

    finalFate:
      'I remain at my landing site, with my lander named the Carl Sagan Memorial Station.',

    currentStatus:
      'Inactive; remains on Mars at the Pathfinder landing site.',

    stillImportant:
      'I successfully demonstrated a new way to safely land on the Red Planet.',

    longTermImpact:
      'My measurements revealed an active water cycle in Mars’ past that leached iron from materials in the crust.',

    humanityLearned:
      'Humanity learned that Mars had a warmer and wetter environment in the past, and that its surface and atmosphere could be studied successfully by a robotic rover.',

    officialImages: [
      'https://science.nasa.gov/wp-content/uploads/2024/08/5277460495-c6d046d5a9-o.jpg?resize=1200,798',
      'https://science.nasa.gov/wp-content/uploads/2017/12/pia00621-pathfinder-and-sojourner-with-airbags-deflated.jpg?resize=1200,574',
      'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/p/i/a/0/PIA01551-1.jpg?w=1099&h=572&fit=clip',
      'https://science.nasa.gov/wp-content/uploads/2024/03/pia00609-1e7c7c.jpg'
    ],

    animation:
      'https://assets.science.nasa.gov/content/dam/science/psd/mars/resources/detail_files/8/8782_mars-rover-pathfinder-sol14_S0050J-full2.gif',

    interactive3D:
      'https://mars.nasa.gov/resources/7492/pathfinder-3d-model/',

    officialVideo:
      'https://www.youtube.com/watch?v=kYI6kL4S2lM',

    locationImagesMaps: 'Ares Vallis, Mars',

    imageCredits: 'NASA/JPL-Caltech'
  },

  'spirit-opportunity': {
    equipmentName: 'Spirit and Opportunity',
    missionName: 'Mars Exploration Rovers',
    equipmentType: 'Rover pair (Twin robot geologists)',
    launchDate: 'June 10, 2003 (Spirit); July 7, 2003 (Opportunity)',
    destination: 'Gusev Crater (Spirit) and Meridiani Planum (Opportunity), Mars',

    shortIntroduction:
      'We were identical twin robots that helped rewrite humanity\'s understanding of the early history of Mars.',

    whyCreated:
      'We were sent to the Red Planet to search for answers about the history of water on Mars.',

    mainObjective:
      'Our objective was to look for signs of past water on Mars.',

    scientificRole:
      'By studying the rock record, we uniquely contributed to meeting the four overarching goals of the Mars Exploration Program.',

    massDimensions:
      'Each rover weighed approximately 174 kilograms at launch.',

    scientificInstruments:
      'Panoramic Camera (Pancam), Miniature Thermal Emission Spectrometer (Mini-TES), Mössbauer Spectrometer, Alpha Particle X-ray Spectrometer (APXS), Rock Abrasion Tool (RAT), and navigation/hazard cameras.',

    powerSource:
      'We were solar-powered rovers, equipped with solar panels.',

    specialTechnologies:
      'We used landing platforms surrounded by crumpled airbags.',

    stage1:
      'Spirit and Opportunity were built as twin Mars Exploration Rovers designed to investigate the planet\'s geological history and evidence of past water.',

    stage2:
      'Spirit launched on June 10, 2003, while Opportunity launched on July 7, 2003, traveling separately to Mars.',

    stage3:
      'Spirit landed on Jan. 3, 2004, at Gusev Crater, a possible former lake. Opportunity landed on Jan. 24, 2004, at Meridiani Planum, a place where mineral deposits suggested a wet history.',

    scientificFindings:
      'We confirmed that water was long-standing on the surface of Mars in ancient times.',

    importantExperiments:
      'Opportunity thoroughly examined the outcrop behind Eagle Crater and studied soils before successfully exiting the crater.',

    majorAchievements:
      'Spirit journeyed 4.8 miles (7.7 kilometers) on Mars, while Opportunity drove 28.06 miles (45.16 kilometers).',

    contributions:
      'We rewrote the understanding of the early history of Mars and confirmed its wet history.',

    missionEndDate:
      'Spirit concluded its mission in 2010. Opportunity last communicated on June 10, 2018.',

    endingReason:
      'A planet-wide dust storm blanketed Opportunity\'s location, blocking its solar panels.',

    lastCommunication: 'June 10, 2018 (Opportunity).',

    finalFate:
      'Both rovers remain on the Martian surface at their respective landing locations.',

    currentStatus: 'Inactive.',

    stillImportant:
      'Opportunity held the off-Earth roving distance record until October 2026, when NASA\'s Perseverance rover finally rolled past it.',

    longTermImpact:
      'We confirmed that water was long-standing on the surface of Mars.',

    humanityLearned:
      'Humanity learned about the extensive history of water on Mars.',

    officialImages: [
      'https://science.nasa.gov/wp-content/uploads/2024/03/mer-bythenumbers-infographic-feb2019.jpg?resize=1536,1120',
      'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/3447/solar_panels_on_rover_seen_from_above.jpeg?w=768&h=968&fit=clip',
      'https://science.nasa.gov/wp-content/uploads/2024/03/sol016-lander-pan-pia05117.jpg?resize=1536,1083',
      'https://science.nasa.gov/wp-content/uploads/2024/03/sol058-to-060-lion-king-pia05755.jpg?resize=1200,900',
      'https://assets.science.nasa.gov/dynamicimage/assets/science/missions/mars2020/2026/JPL_DrivingDistanceRecord_GraphicRecreation_August2026_v3.png?w=2000&h=2000&fit=clip'
    ],

    animation: '',

    interactive3D:
      'https://mars.nasa.gov/resources/7496/spirit-and-opportunity-3d-model/',

    officialVideo:
      'https://www.youtube.com/watch?v=FjD98FmX33g',

    locationImagesMaps:
      'Gusev Crater (Spirit) and Meridiani Planum (Opportunity)',

    imageCredits:
      'NASA/JPL-Caltech/Cornell Univ./Arizona State Univ.'
  },

  'viking-1': {
    equipmentName: 'Viking 1 Spacecraft (Orbiter and Lander)',
    missionName: 'Viking 1',
    equipmentType: 'Orbiter and Lander',
    launchDate: 'Aug. 20, 1975 (21:22:00 UT)',
    destination: 'Chryse Planitia, Mars',

    shortIntroduction:
      'I made the first truly successful landing on Mars and broke ground on Mars surface exploration.',

    whyCreated:
      'I was designed to reach Mars and collect evidence on the possibility of life on Mars.',

    mainObjective:
      'To study Mars from orbit and from the surface, including its atmosphere, geology, weather, and the possibility of life.',

    scientificRole:
      'I was tasked with exploring Mars in unprecedented detail through a combination of orbiter and lander investigations.',

    massDimensions:
      'My total spacecraft mass was 7,776 pounds (3,527 kilograms), with the lander weighing 2,156 pounds and the orbiter 5,157 pounds.',

    scientificInstruments:
      'My lander carried a Gas Chromatograph Mass Spectrometer (GCMS), a Biological Laboratory, X-Ray Fluorescence Spectrometer, and cameras. My orbiter carried an Infrared Radiometer and Spectrometer.',

    powerSource:
      'My lander carried two SNAP-19 Radioisotope Thermoelectric Generators (RTGs), while my orbiter was solar-powered.',

    specialTechnologies:
      'I used a remote sampler arm to scoop up soil samples.',

    stage1:
      'Prior to launch, the batteries of the first spacecraft discharged, so I (the second spacecraft) became Viking 1. I launched on a Titan IIIE-Centaur rocket from Cape Canaveral.',

    stage2:
      'After three course corrections, I entered orbit around Mars on June 19, 1976.',

    stage3:
      'I separated from my orbiter on July 20, 1976, took air samples during a complicated atmospheric entry, and set down safely at Chryse Planitia.',

    scientificFindings:
      'I found an abundance of sulfur in the soil, different from any known material on Earth or the Moon.',

    importantExperiments:
      'Biological experiments produced ambiguous results, while the Gas Chromatograph Mass Spectrometer found no evidence of organic compounds. The mission did not establish evidence of life.',

    majorAchievements:
      'I transmitted the first photograph ever taken on the surface of Mars and mapped about 97 percent of the planet\'s surface from orbit.',

    contributions:
      'I established a detailed scientific baseline for Mars\' atmosphere, surface, soil, weather, and potential habitability.',

    missionEndDate:
      'Aug. 7, 1980 (Orbiter) and Nov. 11, 1982 (Lander).',

    endingReason:
      'My orbiter ran out of attitude-control propellant. My lander stopped operating after getting a faulty command sent from Earth which interrupted communications.',

    lastCommunication: 'November 11, 1982.',

    finalFate:
      'In 1982, my lander was renamed the Thomas Mutch Memorial Station.',

    currentStatus: 'Inactive on the surface of Mars.',

    stillImportant:
      'I began the effort that continues today to uncover whether Mars was ever habitable to some form of life.',

    longTermImpact:
      'My orbiters returned 52,663 images of Mars and mapped 97 percent of the surface.',

    humanityLearned:
      'Humanity learned the composition of Martian soil and atmosphere in unprecedented detail.',

    officialImages: [
      'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/3513/Line_drawing_of_Viking_Orbiter-1.jpeg?w=2048&h=1438&fit=clip',
      'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/3514/Viking_Lander_Line_Drawing-1.jpeg?w=1280&h=972&fit=clip'
    ],

    animation: '',

    interactive3D:
      'https://mars.nasa.gov/resources/7498/viking-lander-3d-model/',

    officialVideo:
      'https://www.youtube.com/watch?v=U3B6Y7Uu93Y',

    locationImagesMaps: 'Chryse Planitia (Golden Plain), Mars',

    imageCredits:
      'NASA / Langley Research Center (LaRC) / Jet Propulsion Laboratory (JPL)'
  },

  insight: {
    equipmentName: 'InSight Lander',
    missionName: 'InSight',
    equipmentType: 'Lander',
    launchDate: 'May 5, 2018',
    destination: 'Elysium Planitia, Mars',

    shortIntroduction:
      'I was designed to study the deep interior of Mars and take the planet\'s vital signs: its pulse, temperature, and reflexes.',

    whyCreated:
      'I was created to help uncover the process that shaped all of the rocky planets in the inner solar system.',

    mainObjective: 'Study Mars\' interior structure.',

    scientificRole:
      'My goals were to figure out just how tectonically active Mars is today and how often meteorites impact it.',

    massDimensions:
      'My robotic arm was over 5 feet 9 inches (1.8 meters) long.',

    scientificInstruments:
      'I carried a seismometer and a heat flow probe.',

    powerSource: 'I was equipped with solar arrays.',

    specialTechnologies:
      'I was built on the proven design of NASA\'s Mars Phoenix lander.',

    stage1:
      'I launched on an Atlas V-401 rocket from Vandenberg Air Force Base, California.',

    stage2:
      'I was followed on my path to Mars by a separate NASA technology experiment: two mini-spacecraft called Mars Cube One (MarCO).',

    stage3:
      'I landed on Nov. 26, 2018, near Mars\' equator on the western side of a flat, smooth plain called Elysium Planitia, which was chosen for safety, not surface features.',

    scientificFindings:
      'My data revealed the lumpy nature of the Red Planet\'s interior, showing that rocky material from impacts lies scattered in giant lumps throughout the mantle.',

    importantExperiments:
      'I captured a haunting low rumble caused by vibrations from the Martian wind blowing at 10 to 15 mph.',

    majorAchievements:
      'I provided the first detailed measurements of Mars\' interior structure and seismic activity.',

    contributions:
      'I provided the first in-depth look at the deep interior of Mars.',

    missionEndDate: 'Dec. 15, 2022.',

    endingReason:
      'The mission ended after dust accumulated on the solar panels, reducing available power until the spacecraft could no longer operate.',

    lastCommunication: 'December 15, 2022.',

    finalFate:
      'I remain on Mars as a retired lander. NASA orbiters continue to observe the site and study changes such as dust movement.',

    currentStatus: 'Retired.',

    stillImportant:
      'I offered unprecedented clues about Mars\' interior and mantle.',

    longTermImpact:
      'I proved how tectonically active Mars is today.',

    humanityLearned:
      'Humanity learned the inner structure of a rocky planet other than Earth.',

    officialImages: [
      'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/downloadable_items/3/8/38686_Mars-InSight-Solar-Panels-Open-pia196641.jpg?w=2048&h=2048&fit=clip',
      'https://science.nasa.gov/wp-content/uploads/2017/12/pia22878-unannotated.jpg?w=768',
      'https://assets.science.nasa.gov/content/dam/science/psd/solar/internal_resources/3437/Man_working_on_small_spacecraft.jpeg'
    ],

    animation: '',

    interactive3D:
      'https://mars.nasa.gov/resources/24855/insight-3d-model/',

    officialVideo:
      'https://www.youtube.com/watch?v=y3H_6HkL4k8',

    locationImagesMaps: 'Elysium Planitia, Mars',

    imageCredits:
      'NASA/JPL-Caltech/Lockheed Martin Space/ASU/CNES/IPGP/Imperial College/Cornell'
  },

  dawn: {
    equipmentName: 'Dawn',
    missionName: 'Dawn Mission',
    equipmentType: 'Orbiter',
    launchDate: 'Sept. 27, 2007',
    destination: 'Giant asteroid Vesta and dwarf planet Ceres',

    shortIntroduction:
      'I was NASA\'s first truly interplanetary spaceship, featuring extended stays at two very different extraterrestrial bodies.',

    whyCreated:
      'I was created to explore small worlds residing in the debris-strewn main asteroid belt between Mars and Jupiter.',

    mainObjective:
      'My main objective was to orbit and study Vesta and Ceres, two of the largest bodies in the main asteroid belt.',

    scientificRole:
      'I studied the internal structure, composition, and evolution of Vesta and Ceres to better understand how small planetary bodies formed and changed.',

    massDimensions: '',

    scientificInstruments:
      'I carried a science payload including the GRaND Instrument, VIR Instrument, and FC Instrument.',

    powerSource: 'Solar arrays.',

    specialTechnologies: 'Ion propulsion system.',

    stage1:
      'I was designed to explore two very different worlds in the asteroid belt: a giant asteroid and a dwarf planet.',

    stage2: 'I traveled from Earth to the asteroid belt.',

    stage3:
      'I successfully reached and maintained extended stays at both Vesta and Ceres.',

    scientificFindings:
      'I revealed evidence that Vesta has a differentiated interior with a crust, mantle, and core, and found evidence of water-related processes on Ceres.',

    importantExperiments:
      'I investigated gullies seen on the giant asteroid Vesta.',

    majorAchievements:
      'I was the first truly interplanetary spaceship to orbit two different targets.',

    contributions:
      'I discovered fluid flow in Ceres due to core heating, and found that Ceres may have had long-standing energy to fuel habitability.',

    missionEndDate: 'October 31, 2018.',

    endingReason:
      'The mission ended after Dawn exhausted its hydrazine fuel, which was required to control the spacecraft\'s orientation.',

    lastCommunication: '',

    finalFate:
      'Dawn remains in orbit around Ceres as a permanent artificial satellite.',

    currentStatus: 'Inactive; remains in orbit around Ceres.',

    stillImportant:
      'I proved that a single spacecraft can orbit multiple extraterrestrial bodies in deep space.',

    longTermImpact:
      'My studies changed how we view dwarf planets and giant asteroids in the main belt.',

    humanityLearned:
      'Humanity learned that Ceres may have had the energy to fuel habitability.',

    officialImages: [
      'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA14125.jpg',
      'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA17479.jpg',
      'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA24021.jpg',
      'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA21924.jpg',
      'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA21919.jpg'
    ],

    animation: '',

    interactive3D:
      'https://solarsystem.nasa.gov/resources/2375/dawn-3d-model/',

    officialVideo:
      'https://www.youtube.com/watch?v=uK_q1T-OedU',

    locationImagesMaps: 'Giant asteroid Vesta and dwarf planet Ceres',

    imageCredits: 'NASA/JPL-Caltech'
  },

  'apollo-11': {
    equipmentName: 'Apollo 11 Lunar Module (Eagle)',
    missionName: 'Apollo 11',
    equipmentType: 'Crewed two-stage lunar lander (descent stage + ascent stage)',
    launchDate: 'July 16, 1969',
    destination: 'Sea of Tranquility, Moon',

    shortIntroduction:
      'I am Eagle, the Apollo 11 Lunar Module. I carried Neil Armstrong and Buzz Aldrin to the lunar surface, making the first crewed Moon landing in human history.',

    whyCreated:
      'I was created to transport two astronauts from lunar orbit to the Moon, support their surface activities, and return them safely to the Command and Service Module.',

    mainObjective:
      'My main objective was to land the Apollo 11 crew at Tranquility Base and return them to lunar orbit for their journey back to Earth.',

    scientificRole:
      'I transported the astronauts and their equipment. The crew deployed scientific experiments on the lunar surface, including the Early Apollo Scientific Experiments Package (EASEP).',

    massDimensions:
      'I was a two-stage spacecraft consisting of a descent stage and an ascent stage. My dimensions and mass differed between the two stages.',

    scientificInstruments:
      'I was not a scientific instrument myself. I carried the astronauts and equipment used for lunar exploration and deployment of surface experiments.',

    powerSource:
      'I used onboard electrical power supplied by batteries.',

    specialTechnologies:
      'My two-stage design allowed the descent stage to remain on the Moon while the ascent stage carried the astronauts back to lunar orbit.',

    stage1:
      'I launched with Apollo 11 aboard a Saturn V rocket from Kennedy Space Center on July 16, 1969.',

    stage2:
      'After reaching lunar orbit, I separated from the Command and Service Module Columbia and began my descent toward the lunar surface.',

    stage3:
      'I landed at Tranquility Base in the Sea of Tranquility on July 20, 1969. Neil Armstrong and Buzz Aldrin explored the surface before returning to lunar orbit.',

    scientificFindings:
      'The mission returned lunar samples that helped scientists investigate the composition and geological history of the Moon.',

    importantExperiments:
      'The crew deployed the Early Apollo Scientific Experiments Package, including a passive seismometer and a laser ranging retroreflector.',

    majorAchievements:
      'I delivered the first humans to the lunar surface and supported humanity’s first successful crewed Moon landing.',

    contributions:
      'I helped demonstrate that astronauts could land on the Moon, conduct surface activities, and return safely to lunar orbit.',

    missionEndDate: 'July 24, 1969.',

    endingReason:
      'After the crew returned to lunar orbit and transferred to Columbia, my ascent stage was jettisoned. The descent stage remained at the landing site.',

    lastCommunication:
      'Communications took place during the crewed mission and ended after the lunar operations were completed.',

    finalFate:
      'My descent stage remains at Tranquility Base. The ascent stage was left in lunar orbit and its precise final resting place is not established.',

    currentStatus:
      'Inactive. The descent stage remains on the lunar surface.',

    stillImportant:
      'I remain an important part of the first successful human landing on the Moon.',

    longTermImpact:
      'My mission helped establish the technologies and operational experience needed for later crewed lunar exploration.',

    humanityLearned:
      'Humanity learned that people could travel to another world, explore its surface, conduct scientific activities, and return safely.',

    officialImages: [
      'https://nssdc.gsfc.nasa.gov/planetary/thumbnail/ap11_lm_as11_40_5927.gif',
      'https://nssdc.gsfc.nasa.gov/thumbnail/spacecraft/apollo_lm_diagram.gif'
    ],

    animation: '',
    interactive3D: '',
    officialVideo: '',

    locationImagesMaps: 'Tranquility Base, Sea of Tranquility, Moon',

    imageCredits: 'NASA / NSSDC'
  },

  'apollo-12': {
    equipmentName: 'Apollo 12 Lunar Module (Intrepid)',
    missionName: 'Apollo 12',
    equipmentType: 'Crewed two-stage lunar lander (descent stage + ascent stage)',
    launchDate: 'November 14, 1969',
    destination: 'Oceanus Procellarum (Ocean of Storms), Moon',

    shortIntroduction:
      'I am Intrepid, the Apollo 12 Lunar Module. I carried Charles Pete Conrad and Alan Bean to the Moon, landing near the inactive Surveyor 3 spacecraft.',

    whyCreated:
      'I was created to deliver two astronauts to the lunar surface, support their exploration, and return them to the Command and Service Module.',

    mainObjective:
      'My main objective was to land the Apollo 12 crew near the Surveyor 3 site and support a longer, more precise lunar exploration mission.',

    scientificRole:
      'I transported the crew and equipment. The astronauts deployed the Apollo 12 ALSEP experiments package on the surface; ALSEP was separate scientific equipment, not an instrument built into me.',

    massDimensions:
      'I was a two-stage spacecraft. Detailed dimensions and stage-specific mass are not stated in the supplied NSSDC/PDS summary.',

    scientificInstruments:
      'I was not myself a science instrument. I carried astronauts, samples, and the ALSEP package, which included experiments such as a passive seismic experiment and other lunar-surface investigations.',

    powerSource:
      'I used chemical propulsion for descent and ascent, with onboard electrical power supplied by batteries. A detailed power specification is not included in the linked mission summary.',

    specialTechnologies:
      'My two-stage architecture had separate descent and ascent stages. Precision landing enabled the crew to reach the Surveyor 3 site.',

    stage1:
      'I launched with Apollo 12 aboard a Saturn V rocket on November 14, 1969.',

    stage2:
      'After the translunar journey and lunar-orbit operations, I separated from the Command Module Yankee Clipper and descended toward the lunar surface.',

    stage3:
      'I landed on November 19, 1969, near Surveyor 3. The crew explored the area, deployed ALSEP, and retrieved parts of Surveyor 3 during the second EVA.',

    scientificFindings:
      'The Apollo 12 ALSEP seismometer recorded the impact of my ascent stage after the crew departed. The planned impact provided a seismic stimulus that scientists could study.',

    importantExperiments:
      'ALSEP surface experiments; retrieval of Surveyor 3 camera and soil-sampler components; controlled impact of the ascent stage to generate a seismic signal.',

    majorAchievements:
      'I delivered the second crew to the Moon and enabled a precise landing near Surveyor 3, allowing the first close-up inspection and recovery of parts from an earlier lunar lander.',

    contributions:
      'My mission connected robotic lunar exploration with human exploration: Surveyor 3’s condition after more than two years on the Moon could be examined on Earth.',

    missionEndDate: 'November 20, 1969.',

    endingReason:
      'After the crew returned to the Command Module, my ascent stage was deliberately directed to impact the Moon. The descent stage remained at the landing site.',

    lastCommunication:
      'My last operating communications were during the crewed mission. I had no continuing communication after the crew left.',

    finalFate:
      'My descent stage remains at the Apollo 12 landing site. My ascent stage impacted the Moon on November 20, 1969.',

    currentStatus:
      'Inactive. The descent stage remains on the lunar surface; the ascent stage is part of the lunar impact record.',

    stillImportant:
      'My mission is still important because it helped scientists study lunar seismic waves and supported the recovery and analysis of Surveyor 3 hardware.',

    longTermImpact:
      'The ALSEP seismic experiment used the ascent-stage impact as a known event to study how seismic waves traveled through the Moon.',

    humanityLearned:
      'Humanity learned more about the lunar surface, the behavior of lunar soil, and the Moon’s internal response to seismic impacts.',

    officialImages: [
      'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/as12-48-7134_1280.jpg?w=1280&h=1280&fit=clip',
      'https://nssdc.gsfc.nasa.gov/planetary/thumbnail/apollo12_lunar_module.gif',
      'https://nssdc.gsfc.nasa.gov/planetary/lunar/a12surveyor3.gif',
      'https://nssdc.gsfc.nasa.gov/thumbnail/spacecraft/apollo_lm_diagram.gif'
    ],

    animation: '',
    interactive3D: '',
    officialVideo: '',

    locationImagesMaps:
      'Oceanus Procellarum, Moon; Apollo 12 landing site and Surveyor 3 location',

    imageCredits: 'NASA / NSSDC / NASA Planetary Data System'
  },

  'apollo-15': {
    equipmentName: 'Apollo 15 Lunar Module (Falcon)',
    missionName: 'Apollo 15',
    equipmentType: 'Crewed two-stage lunar lander (descent stage + ascent stage)',
    launchDate: 'July 26, 1971',
    destination: 'Hadley–Apennine region, Moon',

    shortIntroduction:
      'I am Falcon, the Apollo 15 Lunar Module. I carried David Scott and James Irwin to the Moon during the first J-mission, which included extended surface exploration and use of the Lunar Roving Vehicle.',

    whyCreated:
      'I was created to transport astronauts to and from the lunar surface and support the more ambitious scientific exploration planned for Apollo 15.',

    mainObjective:
      'My main objective was to land the crew at Hadley–Apennine, support lunar surface operations, and return the astronauts to lunar orbit.',

    scientificRole:
      'I served as the crew’s lunar transport and base for surface operations. I carried the Lunar Roving Vehicle and ALSEP scientific experiments, which were deployed separately on the surface.',

    massDimensions:
      'I was a two-stage spacecraft. The supplied PDS description confirms the two-stage design but does not provide dimensions or total mass.',

    scientificInstruments:
      'I was not a standalone science instrument. I carried the crew, Lunar Roving Vehicle, ALSEP package, and sample-collection equipment.',

    powerSource:
      'I used chemical propulsion for descent and ascent, with onboard electrical power supplied by batteries. Detailed power specifications are not included in the linked mission details.',

    specialTechnologies:
      'My two-stage design carried the Lunar Roving Vehicle and a larger scientific payload for extended lunar exploration.',

    stage1:
      'I launched with Apollo 15 aboard a Saturn V rocket on July 26, 1971.',

    stage2:
      'After traveling to the Moon and entering lunar orbit, I separated from the Command and Service Module Endeavour and began descent.',

    stage3:
      'I landed near Hadley Rille on July 30, 1971. The crew used the Lunar Roving Vehicle, collected samples, and deployed ALSEP before leaving the surface.',

    scientificFindings:
      'The Apollo 15 ALSEP instruments continued lunar measurements after the crew departed. NASA’s lunar impact catalog records the Falcon ascent-stage impact on August 3, 1971.',

    importantExperiments:
      'Extended geological traverses using the Lunar Roving Vehicle; sample collection; ALSEP deployment; ascent-stage impact later recorded as a seismic event.',

    majorAchievements:
      'I supported the first extended Apollo lunar surface exploration and enabled astronauts to travel farther from the landing site using the Lunar Roving Vehicle.',

    contributions:
      'My mission greatly expanded geological exploration of the Moon and returned samples from the Hadley–Apennine region.',

    missionEndDate: 'August 3, 1971.',

    endingReason:
      'After the crew rendezvoused with Endeavour, my ascent stage was jettisoned and later impacted the Moon. My descent stage remained at the landing site.',

    lastCommunication:
      'My last operating communications were during the crewed mission. I had no continuing communication after the crew left.',

    finalFate:
      'My descent stage remains at the Apollo 15 landing site. My ascent stage impacted the Moon on August 3, 1971.',

    currentStatus:
      'Inactive. The descent stage remains as a human-made object at Hadley–Apennine; the ascent stage is recorded as a lunar impact.',

    stillImportant:
      'My mission is important because I supported extended geological fieldwork and left ALSEP instruments that continued collecting lunar data.',

    longTermImpact:
      'The ALSEP experiments contributed to long-term measurements of lunar seismic activity, heat flow, magnetic fields, and the near-lunar environment.',

    humanityLearned:
      'Humanity learned more about lunar geology, the Moon’s interior, and how to conduct longer scientific expeditions on another world.',

    officialImages: [
      'https://nssdc.gsfc.nasa.gov/thumbnail/spacecraft/apollo_15_lm.gif',
      'https://nssdc.gsfc.nasa.gov/thumbnail/spacecraft/apollo_lm_diagram.gif'
    ],

    animation: '',
    interactive3D: '',
    officialVideo: '',

    locationImagesMaps: 'Hadley–Apennine region, Moon',

    imageCredits: 'NASA / NASA Planetary Data System / NSSDC'
  },

  'surveyor-3': {
    equipmentName: 'Surveyor 3 Lunar Lander',
    missionName: 'Surveyor 3',
    equipmentType: 'Uncrewed robotic lunar lander',
    launchDate: 'April 17, 1967',
    destination: 'Oceanus Procellarum, Moon (approximately 3° S, 23.41° W)',

    shortIntroduction:
      'I am Surveyor 3, a robotic spacecraft that made a soft landing on the Moon in 1967. More than two years later, Apollo 12 astronauts visited me and brought parts of me back to Earth.',

    whyCreated:
      'I was created to test soft-landing technology and investigate the lunar surface before human landings.',

    mainObjective:
      'My main objective was to make a soft landing, photograph the surface, and test the mechanical properties of lunar soil.',

    scientificRole:
      'I examined the lunar surface and tested whether the soil could support the weight of an Apollo Lunar Module, helping prepare for crewed landings.',

    massDimensions:
      'My spacecraft mass was 997.9 kilograms (2,200 pounds). My surface sampler could reach about 1.5 meters from the lander and dig up to 18 centimeters deep.',

    scientificInstruments:
      'I carried a television camera and a surface sampler, also known as a soil mechanics sampler.',

    powerSource:
      'Solar cells and rechargeable batteries supplied my electrical power.',

    specialTechnologies:
      'My surface-sampling arm could dig trenches, perform bearing tests, and carry out impact tests. I also used a steerable camera mirror for imaging.',

    stage1:
      'I launched on an Atlas-Centaur rocket from Cape Canaveral Launch Complex 36B on April 17, 1967.',

    stage2:
      'I traveled from Earth toward the Moon and used the Centaur upper stage to depart Earth parking orbit before lunar approach.',

    stage3:
      'I landed in Oceanus Procellarum on April 20, 1967, after bouncing twice during descent before settling on the surface. I transmitted 6,326 television images.',

    scientificFindings:
      'My surface tests showed that lunar soil had a consistency similar to wet sand and enough bearing strength to support an Apollo Lunar Module. My camera returned 6,326 images.',

    importantExperiments:
      'I carried out four trenches, four bearing tests, and thirteen impact tests with my surface sampler. Apollo 12 later recovered my camera system and soil scoop to assess exposure to the lunar environment.',

    majorAchievements:
      'I was the first Surveyor mission to carry a surface-sampling instrument capable of digging trenches, and I helped establish that the lunar surface could support a crewed lander.',

    contributions:
      'My measurements helped validate the lunar surface for Apollo landings. The later recovery of my components provided a rare opportunity to study hardware after years of lunar exposure.',

    missionEndDate: 'May 4, 1967.',

    endingReason:
      'Contact was lost two days after the lunar night began. My operating mission ended, but I remained on the Moon.',

    lastCommunication: 'May 4, 1967.',

    finalFate:
      'I remain at my landing site in Oceanus Procellarum. Apollo 12 astronauts recovered my camera system and soil scoop in November 1969.',

    currentStatus:
      'Inactive lander on the Moon. Some recovered components were returned to Earth for examination.',

    stillImportant:
      'My mission helped establish the mechanical properties of lunar soil, and my recovered parts provided evidence of how spacecraft hardware changed after long exposure on the lunar surface.',

    longTermImpact:
      'My surface-sampling tests supported the conclusion that lunar soil could bear the weight of an Apollo Lunar Module. Analysis of recovered components also informed understanding of lunar environmental exposure.',

    humanityLearned:
      'Humanity learned that a robotic lander could investigate lunar soil before human arrival, and that spacecraft hardware could be examined after years on the lunar surface.',

    officialImages: [
      'https://nssdc.gsfc.nasa.gov/planetary/lunar/a12surveyor3.gif',
      'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/as12-48-7134_1280.jpg?w=1280&h=1280&fit=clip'
    ],

    animation: '',
    interactive3D: '',
    officialVideo: '',

    locationImagesMaps:
      'Oceanus Procellarum, Moon (approximately 3° S, 23.41° W)',

    imageCredits: 'NASA / JPL'
  },

  ingenuity: {
    equipmentName: 'Ingenuity Mars Helicopter',
    missionName: 'Mars 2020 / Ingenuity Technology Demonstration',
    equipmentType: 'Autonomous extraterrestrial helicopter',
    launchDate: 'July 30, 2020',
    destination: 'Jezero Crater, Mars',

    shortIntroduction:
      'I am Ingenuity, the first aircraft to achieve powered, controlled flight on another planet. I completed 72 flights on Mars, far exceeding my original technology demonstration goals.',

    whyCreated:
      'I was created as a high-risk technology demonstration to test whether powered, controlled flight was possible in the extremely thin atmosphere of Mars.',

    mainObjective:
      'My original objective was to demonstrate powered flight on Mars and prove that autonomous aerial exploration could work on another planet.',

    scientificRole:
      'After completing my initial demonstration, I became an operations demonstration vehicle, scouting terrain and providing aerial images to support Perseverance rover operations.',

    massDimensions:
      'I weighed approximately 1.8 kilograms (3.97 pounds). My rotor blades spanned approximately 1.2 meters (4 feet) from tip to tip.',

    scientificInstruments:
      'I carried a color camera, a black-and-white navigation camera (Navcam), a laser rangefinder, inertial measurement units (IMUs), and inclinometers.',

    powerSource:
      'A top-mounted solar panel charged rechargeable lithium-ion batteries that powered my flight systems and onboard electronics.',

    specialTechnologies:
      'I used two counter-rotating carbon-fiber rotor blades, autonomous flight-control software, and onboard navigation systems to fly in an atmosphere less than 1% as dense as Earth’s.',

    stage1:
      'I was developed by NASA JPL with contributions from AeroVironment, NASA Ames, and NASA Langley. I was attached beneath the Perseverance rover for launch.',

    stage2:
      'I launched aboard the Mars 2020 mission on July 30, 2020, traveled through deep space attached to Perseverance, and landed on Mars on February 18, 2021.',

    stage3:
      'After being deployed on the Martian surface, I completed my first powered flight on April 19, 2021, at Wright Brothers Field. I eventually completed 72 flights across the Jezero Crater region.',

    scientificFindings:
      'I demonstrated that powered flight and autonomous navigation were possible in the extremely thin Martian atmosphere. My aerial observations also helped researchers examine terrain and plan rover routes.',

    importantExperiments:
      'My flight program tested rotor performance, autonomous navigation, flight control, altitude, speed, and the ability to operate across different Martian environmental conditions.',

    majorAchievements:
      'I became the first aircraft to achieve powered, controlled flight on another planet. I completed 72 flights, traveling approximately 17 kilometers in total.',

    contributions:
      'I demonstrated that aerial vehicles could support planetary exploration by scouting terrain, observing geological features, and helping future missions plan their routes.',

    missionEndDate: 'January 25, 2024.',

    endingReason:
      'During my 72nd flight, I sustained damage to one or more rotor blades. NASA later confirmed that I could no longer fly and officially concluded my mission.',

    lastCommunication:
      'January 25, 2024, when the final communication and images confirming my rotor damage were received through Perseverance.',

    finalFate:
      'I remain stationary on the Martian surface in Jezero Crater, near the location of my final flight.',

    currentStatus:
      'Inactive as an aircraft. I remain on Mars and can no longer perform flights.',

    stillImportant:
      'I proved that powered, controlled flight is possible on another planet and provided valuable experience for future aerial exploration missions.',

    longTermImpact:
      'My successful flights helped establish the potential for future robotic aircraft to explore areas that are difficult for surface rovers to reach.',

    humanityLearned:
      'Humanity learned that an autonomous aircraft could fly in the extremely thin atmosphere of Mars, navigate independently, and support the exploration of another world.',

    officialImages: [],

    animation: '',
    interactive3D: '',
    officialVideo: '',

    locationImagesMaps: 'Jezero Crater, Mars; Wright Brothers Field',

    imageCredits: 'NASA / JPL-Caltech / AeroVironment'
  },

  kepler: {
    equipmentName: 'Kepler Space Telescope',
    missionName: 'Kepler / K2',
    equipmentType: 'Space Telescope',
    launchDate: 'March 7, 2009',
    destination: 'Earth-trailing heliocentric orbit',

    shortIntroduction:
      'I am Kepler, NASA’s space telescope built to discover planets beyond our Solar System. I changed humanity’s understanding of how common planets are around other stars.',

    whyCreated:
      'I was created to search for Earth-size and smaller planets orbiting other stars, especially planets located in or near their stars’ habitable zones.',

    mainObjective:
      'My primary objective was to determine how frequently Earth-size planets occur around Sun-like stars in the Milky Way.',

    scientificRole:
      'I continuously monitored the brightness of thousands of stars, searching for tiny, repeated dips in starlight caused by planets passing in front of their stars.',

    massDimensions:
      'I had a launch mass of approximately 1,052 kilograms and a telescope aperture of 0.95 meters.',

    scientificInstruments:
      'I carried a photometer with a 0.95-meter telescope and a large-format CCD imaging system designed to measure changes in stellar brightness.',

    powerSource:
      'I used solar panels to generate electrical power for my scientific instruments and spacecraft systems.',

    specialTechnologies:
      'I used the transit method to detect exoplanets by measuring periodic decreases in the brightness of distant stars. My precision photometer could detect very small changes in starlight.',

    stage1:
      'I was launched aboard a Delta II rocket from Cape Canaveral Air Force Station in Florida on March 7, 2009.',

    stage2:
      'I entered an Earth-trailing heliocentric orbit, allowing me to observe a large field of stars without interruptions from Earth occultations.',

    stage3:
      'I began my science observations in 2009. After the failure of two reaction wheels in 2013, my mission continued as the K2 extended mission, observing different regions of the sky.',

    scientificFindings:
      'I helped establish that planets are extremely common in the Milky Way and discovered thousands of confirmed exoplanets, including many systems with multiple planets.',

    importantExperiments:
      'I repeatedly measured the brightness of stars to identify planetary transits and distinguish possible exoplanet signals from stellar activity and instrumental effects.',

    majorAchievements:
      'I discovered more than 2,600 confirmed exoplanets and transformed the field of exoplanet science.',

    contributions:
      'My observations showed that planets are common throughout the galaxy and provided an important foundation for future searches for potentially habitable worlds.',

    missionEndDate: 'October 30, 2018.',

    endingReason:
      'My mission ended after I ran out of the fuel needed to point accurately toward my targets and communicate with Earth.',

    lastCommunication:
      'NASA sent my final commands on November 15, 2018, after the mission had officially ended.',

    finalFate:
      'I remain in my Earth-trailing heliocentric orbit, continuing to travel around the Sun without active operations.',

    currentStatus:
      'Retired; no longer collecting scientific observations.',

    stillImportant:
      'My discoveries continue to help scientists understand planetary systems and guide the search for planets beyond our Solar System.',

    longTermImpact:
      'I changed exoplanet research by demonstrating that small planets are common and by providing a large catalog of planetary candidates for further study.',

    humanityLearned:
      'Humanity learned that planets are widespread in our galaxy and that many stars host planetary systems.',

    officialImages: [
  'https://images-assets.nasa.gov/image/PIA11733/PIA11733~large.jpg',
  'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia11/pia11188/PIA11188.jpg',
  'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia11/pia11824/PIA11824.jpg',
],

    animation: '',
    interactive3D: '',
    officialVideo: '',

    locationImagesMaps: 'Earth-trailing heliocentric orbit around the Sun',

    imageCredits: 'NASA / Ames Research Center'
  },

  'pioneer-10': {
    equipmentName: 'Pioneer 10',
    missionName: 'Pioneer 10',
    equipmentType: 'Deep Space Probe',
    launchDate: 'March 2, 1972',
    destination: 'Jupiter and the outer Solar System',

    shortIntroduction:
      'I am Pioneer 10, the first spacecraft to travel through the asteroid belt and make close-up observations of Jupiter. I opened a new path for humanity’s exploration of the outer Solar System.',

    whyCreated:
      'I was designed to investigate Jupiter and test whether a spacecraft could safely travel through the asteroid belt and operate in the environment beyond Mars.',

    mainObjective:
      'My primary objective was to perform the first close-up scientific investigation of Jupiter and its surrounding environment.',

    scientificRole:
      'I studied Jupiter, its atmosphere, magnetic field, radiation environment, and the interplanetary space between the planets.',

    massDimensions:
      'I had a launch mass of approximately 258 kilograms and a large high-gain antenna used for communication with Earth.',

    scientificInstruments:
      'I carried instruments including an imaging photopolarimeter, magnetometer, plasma analyzer, charged-particle detectors, cosmic-ray instruments, and a meteoroid detector.',

    powerSource:
      'I used four radioisotope thermoelectric generators (RTGs) to produce electrical power from the heat generated by radioactive decay.',

    specialTechnologies:
      'I used a high-gain antenna, RTG power systems, and a protective design that allowed me to operate during my journey through Jupiter’s intense radiation environment.',

    stage1:
      'I launched aboard an Atlas-Centaur rocket from Cape Canaveral, Florida, on March 2, 1972.',

    stage2:
      'I traveled through the asteroid belt, becoming the first spacecraft to cross it successfully, and continued toward Jupiter.',

    stage3:
      'I made my closest approach to Jupiter on December 3, 1973, returning important observations of the planet before continuing outward from the Solar System.',

    scientificFindings:
      'I revealed important details about Jupiter’s atmosphere, magnetic field, radiation belts, and moons, providing the first close-up scientific observations of the giant planet.',

    importantExperiments:
      'I measured Jupiter’s magnetic field, radiation environment, energetic particles, and the properties of interplanetary space during my journey.',

    majorAchievements:
      'I became the first spacecraft to cross the asteroid belt and the first to make close-up observations of Jupiter.',

    contributions:
      'My successful journey demonstrated that spacecraft could travel safely through the asteroid belt and explore the outer Solar System.',

    missionEndDate: 'January 23, 2003 (last detectable signal).',

    endingReason:
      'My mission ended after my radioisotope power supply weakened and the signal became too faint for reliable communication with Earth.',

    lastCommunication:
      'January 23, 2003, when my last detectable signal was received by NASA.',

    finalFate:
      'I continue traveling outward from the Solar System on a trajectory away from the Sun.',

    currentStatus:
      'Inactive; no longer communicating with Earth.',

    stillImportant:
      'I remain a landmark mission that demonstrated the possibility of exploring the giant planets and the distant outer Solar System.',

    longTermImpact:
      'My mission helped establish the scientific and engineering foundation for later missions to Jupiter, Saturn, and beyond.',

    humanityLearned:
      'Humanity learned more about Jupiter and discovered that spacecraft could safely cross the asteroid belt and explore the outer Solar System.',

    officialImages: [
  'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/p/pioneer10_art-3.jpg',
  'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/6/668761main_ac73-9341.jpg',
  'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/6/667318main_jpl_pioneer_galaxy_full-1.jpg',
],

    animation: '',
    interactive3D: '',
    officialVideo: '',

    locationImagesMaps: 'Jupiter flyby trajectory and outward path from the Solar System',

    imageCredits: 'NASA / Ames Research Center'
  },

  'near-shoemaker': {
    equipmentName: 'NEAR Shoemaker',
    missionName: 'Near Earth Asteroid Rendezvous (NEAR)',
    equipmentType: 'Asteroid Orbiter and Lander',
    launchDate: 'February 17, 1996',
    destination: '433 Eros, Near-Earth Asteroid',

    shortIntroduction:
      'I am NEAR Shoemaker, the first spacecraft to orbit an asteroid and the first to successfully land on one. I helped reveal the structure and composition of the asteroid Eros.',

    whyCreated:
      'I was created to study near-Earth asteroids and investigate their physical properties, composition, and evolution.',

    mainObjective:
      'My main objective was to orbit and study asteroid 433 Eros, collecting detailed information about its surface, composition, gravity, and internal structure.',

    scientificRole:
      'I mapped the asteroid, measured its elemental composition, studied its geology, and investigated the relationship between asteroids and the early Solar System.',

    massDimensions:
      'I had a launch mass of approximately 805 kilograms, including propellant. My spacecraft body carried solar panels and a high-gain antenna.',

    scientificInstruments:
      'I carried a multispectral imager, near-infrared spectrometer, X-ray/gamma-ray spectrometer, magnetometer, laser rangefinder, and radio science equipment.',

    powerSource:
      'I used solar panels to generate electrical power during my journey and operations around Eros.',

    specialTechnologies:
      'I used autonomous navigation and a laser rangefinder to map the asteroid and support close orbital operations. My mission was later extended to include a controlled descent to the surface.',

    stage1:
      'I launched aboard a Delta II rocket from Cape Canaveral Air Station, Florida, on February 17, 1996.',

    stage2:
      'After traveling through space and performing a flyby of asteroid Mathilde, I reached asteroid Eros and entered orbit on February 14, 2000.',

    stage3:
      'I mapped Eros from orbit for about a year before descending toward the surface. I successfully touched down on February 12, 2001, and continued transmitting data from the asteroid.',

    scientificFindings:
      'I revealed that Eros is an irregular, rocky body with a heavily cratered surface and a complex geological history. My measurements also provided important information about its composition and density.',

    importantExperiments:
      'I mapped the asteroid’s surface, measured its elemental composition, studied its magnetic properties, and used laser ranging to determine its shape and topography.',

    majorAchievements:
      'I became the first spacecraft to orbit an asteroid and the first spacecraft to successfully land on an asteroid.',

    contributions:
      'My observations helped scientists understand the physical properties of near-Earth asteroids and improved knowledge of the small bodies that preserve clues about the early Solar System.',

    missionEndDate: 'February 28, 2001.',

    endingReason:
      'My mission ended after I completed the planned observations from the surface of Eros and communication with Earth ceased.',

    lastCommunication:
      'February 28, 2001, when my final transmission was received from the surface of Eros.',

    finalFate:
      'I remain on the surface of asteroid Eros, where I made my final landing.',

    currentStatus:
      'Inactive; permanently located on the surface of asteroid Eros.',

    stillImportant:
      'I demonstrated that spacecraft could orbit and land on small asteroids, opening new possibilities for future asteroid exploration.',

    longTermImpact:
      'My mission provided detailed observations of Eros and helped establish the scientific and engineering methods used in later small-body exploration missions.',

    humanityLearned:
      'Humanity learned more about the composition, geology, and evolution of near-Earth asteroids and how spacecraft can operate around these small worlds.',

    oofficialImages: [
  'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA03143.jpg',
  'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA02904.jpg',
  'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA02464.jpg',
],

    animation: '',
    interactive3D: '',
    officialVideo: '',

    locationImagesMaps: 'Asteroid 433 Eros',

    imageCredits: 'NASA / Johns Hopkins University Applied Physics Laboratory'
  }
};


// ==========================================
// SHARED COMPONENTS
// ==========================================

function renderNavbar(backRoute, backLabel = 'BACK') {
  return `
    <nav class="navbar">
      <a href="#home" class="logo">LEGACY<span>.</span></a>

      <div class="nav-links">
        <a href="#${backRoute}">${backLabel}</a>
      </div>

      <a href="#home" class="nav-cta">HOME ↗</a>
    </nav>
  `;
}

function renderFooter() {
  return `
    <footer>
      <a href="#home" class="logo">LEGACY<span>.</span></a>
      <p>MY MISSION ENDED. MY LEGACY DIDN'T.</p>
      <span>NASA SPACE APPS CHALLENGE 2026</span>
    </footer>
  `;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });
}

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
          <p class="eyebrow"></p>

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
              <h3>MARS</h3>
              <span class="card-link">EXPLORE MARTIAN LEGACY ↗</span>
            </div>
          </a>
        </div>
      </section>

      ${renderFooter()}
    </main>
  `;

  scrollToTop();
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

  const renderEquipmentCard = (item, index) => `
    <article
      class="equipment-card"
      data-story="${item.story}"
      role="button"
      tabindex="0"
      aria-label="Explore ${item.name}"
    >
      <div class="equipment-model-stage">
        <div class="equipment-model-placeholder">
          <span class="model-orbit"></span>
          <span class="model-glow"></span>
          <span class="model-label">MODEL PREVIEW</span>
        </div>

        <span class="equipment-index">
          ${String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div class="equipment-card-info">
        <p class="eyebrow">${item.mission}</p>
        <h3>${item.name}</h3>
        <p class="equipment-description">${item.description}</p>

        <div class="equipment-card-bottom">
          <span>${item.type}</span>
          <span class="equipment-open">EXPLORE ↗</span>
        </div>
      </div>
    </article>
  `;

  const renderEquipmentSection = (section) => `
    <div class="equipment-subsection">
      <div class="section-heading">
        <p class="eyebrow">${section.subtitle}</p>
        <h2>${section.title}</h2>
      </div>

      <div class="equipment-grid">
        ${section.equipment
          .map((item, index) => renderEquipmentCard(item, index))
          .join('')}
      </div>
    </div>
  `;

  const equipmentHTML = world.sections
    ? world.sections.map(renderEquipmentSection).join('')
    : `
      <div class="equipment-grid">
        ${world.equipment
          .map((item, index) => renderEquipmentCard(item, index))
          .join('')}
      </div>
    `;

  app.innerHTML = `
    ${renderNavbar('worlds', 'CHANGE WORLD ↗')}

    <main class="world-page">
      <section class="world-intro">
        <p class="eyebrow">${world.status}</p>
        <h1>${world.name}</h1>
        <h2>${world.subtitle}</h2>

        <p class="world-description">${world.description}</p>

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

        ${equipmentHTML}
      </section>

      ${renderFooter()}
    </main>
  `;

  scrollToTop();
}


// ==========================================
// SOJOURNER — CINEMATIC STORY
// ==========================================


function renderSojournerStory(data, worldKey) {
  const world = worlds[worldKey];

  if (!data || !world) {
    renderHome();
    return;
  }

  const images = Array.isArray(data.officialImages)
    ? data.officialImages.filter(Boolean)
    : [];

  const heroImage = images[0] || '';
  const secondImage = images[1] || images[0] || '';

  const displayName = data.equipmentName || 'UNKNOWN EQUIPMENT';
  const missionName = data.missionName || 'MISSION ARCHIVE';

  const fact = (label, value) => {
    if (!value || !String(value).trim()) return '';

    return `
      <div>
        <small>${label}</small>
        <strong>${value}</strong>
      </div>
    `;
  };

  const info = (label, value) => {
    if (!value || !String(value).trim()) return '';

    return `
      <article>
        <span>${label}</span>
        <p>${value}</p>
      </article>
    `;
  };

  const stages = [
    {
      title: 'THE BEGINNING',
      buttonTitle: 'MISSION PREPARATION',
      buttonDate: data.launchDate || 'STAGE 01',
      heading: 'THE<br /><i>BEGINNING.</i>',
      description: data.stage1,
      scene: 'launch',
      visualLabel: 'EARTH / LAUNCH SEQUENCE',
      coordinate: 'DEPARTURE FROM EARTH',
      date: data.launchDate || 'STAGE 01'
    },
    {
      title: 'THE JOURNEY',
      buttonTitle: 'THE TRANSIT',
      buttonDate: 'STAGE 02',
      heading: 'BEYOND<br /><i>EARTH.</i>',
      description: data.stage2,
      scene: 'transit',
      visualLabel: 'DEEP SPACE / THE JOURNEY',
      coordinate: `DESTINATION: ${data.destination || 'UNKNOWN'}`,
      date: 'IN TRANSIT'
    },
    {
      title: 'THE ARRIVAL',
      buttonTitle: 'REACHING THE DESTINATION',
      buttonDate: 'STAGE 03',
      heading: 'A NEW WORLD.<br /><i>A NEW CHAPTER.</i>',
      description: data.stage3,
      scene: 'arrival',
      visualLabel: 'MISSION / DESTINATION',
      coordinate: data.destination || 'DESTINATION',
      date: 'MISSION ARRIVAL'
    }
  ];

  const galleryHTML = images.length
    ? `
      <div class="s-gallery">
        ${images.map((url, index) => `
          <a
            href="${url}"
            target="_blank"
            rel="noopener noreferrer"
            class="s-gallery-item"
          >
            <img
              src="${url}"
              alt="${displayName} NASA archive image ${index + 1}"
              loading="lazy"
            >
            <span>ARCHIVE ${String(index + 1).padStart(2, '0')} ↗</span>
          </a>
        `).join('')}
      </div>
    `
    : '';

  const mediaHTML = `
    ${data.animation ? `
      <div class="s-animation">
        <span>MISSION ANIMATION</span>
        <img
          src="${data.animation}"
          alt="${displayName} mission animation"
          loading="lazy"
        >
      </div>
    ` : ''}

    ${data.interactive3D ? `
      <a
        class="s-media-link"
        href="${data.interactive3D}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>INTERACTIVE 3D MODEL</span>
        <strong>EXPLORE THE MODEL ↗</strong>
      </a>
    ` : ''}

    ${data.officialVideo ? `
      <a
        class="s-media-link"
        href="${data.officialVideo}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>OFFICIAL VIDEO</span>
        <strong>WATCH THE VIDEO ↗</strong>
      </a>
    ` : ''}

    ${data.locationImagesMaps ? `
      <div class="s-location">
        <span>MISSION LOCATION</span>
        <strong>${data.locationImagesMaps}</strong>
      </div>
    ` : ''}
  `;

  const hasMedia = Boolean(
    data.animation ||
    data.interactive3D ||
    data.officialVideo ||
    data.locationImagesMaps
  );

  app.innerHTML = `
    <div class="sojourner-page">

      ${renderNavbar(worldKey, `BACK TO ${world.name}`)}

      <nav class="breadcrumb">
        <a href="#home">HOME</a>
        <span>/</span>
        <a href="#${worldKey}">${world.name}</a>
        <span>/</span>
        <span class="current">${displayName}</span>
      </nav>

      <!-- HERO -->
      <section
        class="s-hero"
        style="${heroImage ? `--hero-image: url('${heroImage}')` : ''}"
      >
        <div class="s-hero-overlay"></div>

        <div class="s-hero-content">
          <p class="s-kicker">LEGACY ARCHIVE / ${world.name}</p>
          <p class="s-mission">${missionName}</p>

          <h1>${displayName}<span>.</span></h1>

          <p class="s-intro">${data.shortIntroduction || ''}</p>

          <a href="#s-profile" class="s-explore">
            EXPLORE MY JOURNEY ↓
          </a>
        </div>

        <div class="s-hero-bottom">
          <span>${data.equipmentType || 'SPACE EQUIPMENT'}</span>
          <span>${data.launchDate || 'MISSION ARCHIVE'}</span>
        </div>

        <span class="s-hero-index">01 / 08</span>
      </section>

      <!-- PROFILE -->
      <section class="s-profile" id="s-profile">
        <div class="s-section-heading">
          <span>01 / MISSION IDENTIFICATION</span>
          <h2>THE MACHINE.<br /><i>THE MISSION.</i></h2>
        </div>

        <div class="s-profile-grid">
          <div class="s-profile-image">
            ${heroImage ? `
              <img
                src="${heroImage}"
                alt="${displayName}"
                loading="lazy"
              >
            ` : ''}
            <span>${data.imageCredits || 'NASA ARCHIVE'}</span>
          </div>

          <div class="s-facts">
            ${fact('MISSION', data.missionName)}
            ${fact('EQUIPMENT TYPE', data.equipmentType)}
            ${fact('LAUNCH DATE', data.launchDate)}
            ${fact('DESTINATION', data.destination)}
            ${fact('MASS & DIMENSIONS', data.massDimensions)}
            ${fact('POWER SOURCE', data.powerSource)}
          </div>
        </div>
      </section>

      <!-- PURPOSE -->
      <section class="s-purpose">
        <span class="s-label">02 / MISSION PURPOSE</span>

        <h2>BUILT TO<br /><i>EXPLORE THE UNKNOWN.</i></h2>

        <div class="s-purpose-grid">
          ${info('WHY IT WAS CREATED', data.whyCreated)}
          ${info('MAIN OBJECTIVE', data.mainObjective)}
          ${info('SCIENTIFIC ROLE', data.scientificRole)}
          ${info('SPECIAL TECHNOLOGIES', data.specialTechnologies)}
        </div>

        ${data.scientificInstruments ? `
          <div class="s-instruments">
            <span>SCIENTIFIC INSTRUMENTS</span>
            <p>${data.scientificInstruments}</p>
          </div>
        ` : ''}
      </section>

      <!-- INTERACTIVE JOURNEY -->
      <section class="s-timeline" id="s-journey">
        <div class="s-section-heading">
          <span>03 / INTERACTIVE MISSION TIMELINE</span>
          <h2>THE JOURNEY<br /><i>THROUGH SPACE.</i></h2>
          <p>Select a stage to explore the moments that defined this mission.</p>
        </div>

        <div class="s-journey-interface">

          <div class="s-journey-controls">
            <span class="s-journey-overline">MISSION CHRONOLOGY</span>

            ${stages.map((stage, index) => `
              <button
                class="s-journey-btn ${index === 0 ? 'active' : ''}"
                data-journey-stage="${index}"
                aria-pressed="${index === 0}"
              >
                <span class="s-journey-number">
                  ${String(index + 1).padStart(2, '0')}
                </span>

                <span class="s-journey-btn-text">
                  <small>${stage.buttonDate}</small>
                  <strong>${stage.buttonTitle}</strong>
                </span>

                <span class="s-journey-arrow">↗</span>
              </button>
            `).join('')}

            <div class="s-journey-progress">
              <div
                class="s-journey-progress-fill"
                id="s-journey-progress"
              ></div>
            </div>

            <span class="s-journey-counter" id="s-journey-counter">
              01 — 03
            </span>
          </div>

          <div class="s-journey-display">

            <div class="s-journey-visual launch" id="s-journey-visual">
              <div class="s-scene-stars"></div>
              <div class="s-scene-orbit"></div>
              <div class="s-scene-planet"></div>
              <div class="s-scene-object"></div>

              <span class="s-scene-label" id="s-scene-label">
                ${stages[0].visualLabel}
              </span>

              <span class="s-scene-coordinate" id="s-scene-coordinate">
                ${stages[0].coordinate}
              </span>
            </div>

            <div class="s-journey-information" id="s-journey-information">

              <span
                class="s-journey-stage-label"
                id="s-journey-stage-label"
              >
                STAGE 01 / ${stages[0].title}
              </span>

              ${stages.map((stage, index) => `
                <div
                  class="s-journey-panel ${index === 0 ? 'active' : ''}"
                  data-journey-panel="${index}"
                >
                  <h3>${stage.heading}</h3>
                  <p>${stage.description || 'No information available for this stage.'}</p>
                </div>
              `).join('')}

              <div class="s-journey-bottom">
                <span>${displayName} / ${missionName}</span>
                <span id="s-journey-stage-date">
                  ${stages[0].date}
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- SCIENCE -->
      <section
        class="s-discoveries"
        style="${heroImage ? `--hero-image: url('${heroImage}')` : ''}"
      >
        <div class="s-section-heading">
          <span>04 / SCIENCE & DISCOVERY</span>
          <h2>WHAT WE<br /><i>DISCOVERED.</i></h2>
        </div>

        <div class="s-discovery-grid">
          <article class="s-discovery-main">
            <span>SCIENTIFIC FINDINGS</span>
            <h3>CLUES FROM<br />ANOTHER WORLD.</h3>
            <p>${data.scientificFindings || ''}</p>
          </article>

          ${info('IMPORTANT EXPERIMENTS', data.importantExperiments)}
          ${info('MAJOR ACHIEVEMENTS', data.majorAchievements)}
          ${info('CONTRIBUTIONS TO SCIENCE', data.contributions)}
        </div>
      </section>

      <!-- FINAL CHAPTER -->
      <section class="s-final">
        ${secondImage ? `
          <div class="s-final-image">
            <img
              src="${secondImage}"
              alt="${displayName} mission archive"
              loading="lazy"
            >
          </div>
        ` : ''}

        <div class="s-final-content">
          <span class="s-label">05 / THE FINAL CHAPTER</span>

          <h2>EVERY MISSION<br />HAS A <i>LAST CHAPTER.</i></h2>

          <p>${data.endingReason || ''}</p>

          <div class="s-final-facts">
            ${fact('MISSION END', data.missionEndDate)}
            ${fact('LAST COMMUNICATION', data.lastCommunication)}
            ${fact('FINAL FATE', data.finalFate)}
            ${fact('CURRENT STATUS', data.currentStatus)}
          </div>
        </div>
      </section>

      <!-- LEGACY -->
      <section class="s-legacy">
        <span class="s-label">06 / BEYOND THE MISSION</span>

        <h2>THE MISSION ENDED.<br /><i>THE LEGACY DIDN'T.</i></h2>

        <div class="s-legacy-grid">
          ${info('WHY IT STILL MATTERS', data.stillImportant)}
          ${info('LONG-TERM IMPACT', data.longTermImpact)}

          ${data.humanityLearned ? `
            <article class="s-humanity">
              <span>WHAT HUMANITY LEARNED</span>
              <p>${data.humanityLearned}</p>
            </article>
          ` : ''}
        </div>
      </section>

      <!-- ARCHIVE -->
      <section class="s-archive">
        <span class="s-label">07 / THE MISSION ARCHIVE</span>

        <h2>THE EVIDENCE<br /><i>REMAINS.</i></h2>

        ${galleryHTML}

        ${hasMedia ? `
          <div class="s-media-grid">
            ${mediaHTML}
          </div>
        ` : ''}

        ${data.imageCredits ? `
          <p class="s-credits">
            IMAGE CREDITS: ${data.imageCredits}
          </p>
        ` : ''}
      </section>

      <!-- CLOSING -->
      <div class="s-closing">
        <p>THE SURFACE REMEMBERS.</p>
        <h2>THE LEGACY<br /><i>LIVES ON.</i></h2>
        <span>${displayName} / ${missionName}</span>
      </div>

      ${renderFooter()}

    </div>
  `;

  updateJourneyStage(0);
  scrollToTop();
}


// ==========================================
// GENERIC EQUIPMENT STORY
// ==========================================

function renderEquipmentStory(item, worldKey) {
  if (!item || !item.story) {
    console.error('Equipment item or story is missing:', item);
    return;
  }

  const data = equipmentData[item.story];

  if (!data) {
    console.error(
      `No equipment data found for story: ${item.story}`,
      equipmentData
    );
    return;
  }

  renderSojournerStory(data, worldKey);
}


// ==========================================
// SOJOURNER INTERACTIVE JOURNEY
// ==========================================


function updateJourneyStage(stageIndex) {
  const buttons = app.querySelectorAll('.s-journey-btn');
  const panels = app.querySelectorAll('.s-journey-panel');

  if (
    !buttons.length ||
    !panels.length ||
    stageIndex < 0 ||
    stageIndex >= buttons.length
  ) {
    return;
  }

  const button = buttons[stageIndex];
  const panel = panels[stageIndex];

  const visual = app.querySelector('#s-journey-visual');
  const information = app.querySelector('#s-journey-information');
  const progress = app.querySelector('#s-journey-progress');
  const counter = app.querySelector('#s-journey-counter');
  const stageLabel = app.querySelector('#s-journey-stage-label');
  const sceneLabel = app.querySelector('#s-scene-label');
  const coordinate = app.querySelector('#s-scene-coordinate');
  const stageDate = app.querySelector('#s-journey-stage-date');

  if (
    !visual ||
    !information ||
    !progress ||
    !counter ||
    !stageLabel ||
    !sceneLabel ||
    !coordinate ||
    !stageDate ||
    !panel
  ) {
    return;
  }

  buttons.forEach((item, index) => {
    const active = index === stageIndex;

    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });

  panels.forEach((item, index) => {
    item.classList.toggle('active', index === stageIndex);
  });

  const stageNames = [
    'THE BEGINNING',
    'THE JOURNEY',
    'THE ARRIVAL'
  ];

  const sceneNames = [
    'launch',
    'transit',
    'arrival'
  ];

  visual.className = `s-journey-visual ${sceneNames[stageIndex]}`;

  stageLabel.textContent =
    `STAGE ${String(stageIndex + 1).padStart(2, '0')} / ${stageNames[stageIndex]}`;

  sceneLabel.textContent = [
    'EARTH / LAUNCH SEQUENCE',
    'DEEP SPACE / THE JOURNEY',
    'MISSION / DESTINATION'
  ][stageIndex];

  coordinate.textContent = [
    'DEPARTURE FROM EARTH',
    'IN TRANSIT',
    'DESTINATION REACHED'
  ][stageIndex];

  stageDate.textContent = [
    button.querySelector('small')?.textContent || 'STAGE 01',
    'IN TRANSIT',
    'MISSION ARRIVAL'
  ][stageIndex];

  progress.style.width =
    `${((stageIndex + 1) / buttons.length) * 100}%`;

  counter.textContent =
    `${String(stageIndex + 1).padStart(2, '0')} — ${String(buttons.length).padStart(2, '0')}`;

  information.classList.remove('journey-reveal');
  void information.offsetWidth;
  information.classList.add('journey-reveal');
}

// ==========================================
// NAVIGATION
// ==========================================

function navigate() {
  const route = window.location.hash.slice(1);

  const pageRoutes = {
    home: renderHome,
    moon: () => renderWorld('moon'),
    mars: () => renderWorld('mars')
  };

  if (pageRoutes[route]) {
    pageRoutes[route]();
    return;
  }

  // Search equipment in both regular lists and grouped sections.
  for (const [worldKey, world] of Object.entries(worlds)) {
    const allEquipment = world.sections
      ? world.sections.flatMap((section) => section.equipment)
      : world.equipment || [];

    const item = allEquipment.find(
      (equipment) => equipment.story === route
    );

    if (item) {
      renderEquipmentStory(item, worldKey);
      return;
    }
  }

  if (!route) {
    renderHome();
    return;
  }

  const currentSection = app.querySelector(`#${CSS.escape(route)}`);

  if (currentSection) {
    currentSection.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  renderHome();

  requestAnimationFrame(() => {
    const targetSection = app.querySelector(`#${CSS.escape(route)}`);
    targetSection?.scrollIntoView({ behavior: 'smooth' });
  });
}

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

app.addEventListener('keydown', (event) => {
  const card = event.target.closest('.equipment-card');

  if (!card) return;

  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();

    const story = card.dataset.story;

    if (story) {
      window.location.hash = story;
    }
  }
});

// ==========================================
// INTERACTIVE JOURNEY BUTTONS
// ==========================================

app.addEventListener('click', (event) => {
  const button = event.target.closest('.s-journey-btn');

  if (!button) return;

  const stageIndex = Number(button.dataset.journeyStage);

  updateJourneyStage(stageIndex);
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

// ==========================================
// START APPLICATION
// ==========================================

window.addEventListener('hashchange', navigate);

navigate();

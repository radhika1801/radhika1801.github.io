/* =============================================================================
   data.js — All site content lives here. Edit this file to update the site.

   TO ADD A PROJECT:
   1. Copy an existing entry, give it a unique `id`.
   2. Image paths are relative to the site root (e.g. 'assets/digital/...')
   ============================================================================= */

const PROJECTS = [

  {
    id: 'tellai',
    title: 'TellAi',
    tagline: 'a rotary-phone storytelling machine that tells kids AI-generated stories',
    tags: ['physical-computing', 'ai', 'arduino'],
    year: '2026',
    tools: 'Arduino, Deepgram STT, Claude, ElevenLabs TTS',
    description: [
      'A participation machine built into a vintage rotary phone - dial a character and an emotion, and it calls you back with an AI-generated story, voiced through the handset via Deepgram, Claude, and ElevenLabs.'
    ],
    coverImage: 'assets/digital/projects/project-8/project-8.jpg',
    images: [
      { src: 'assets/digital/projects/project-8/project-8.jpg', caption: '' },
      { src: 'assets/digital/projects/project-8/image-1.jpg', caption: '' },
      { src: 'assets/digital/projects/project-8/image-2.jpg', caption: '' },
      { src: 'assets/digital/projects/project-8/image-4.jpg', caption: 'System diagram: input handling → Deepgram STT → Claude → ElevenLabs TTS' }
    ],
    links: []
  },

  {
    id: 'pulse-proximity',
    title: 'Pulse Proximity',
    tagline: 'interactive installation exploring coral reef communication collapse',
    tags: ['installation', 'arduino', 'web'],
    year: '2025',
    tools: 'Arduino, Three.js, Servo Motors',
    description: [
      'An interactive installation exploring coral reef communication collapse. Arduino sensors detect visitor proximity, triggering color transitions from vibrant health to bleached states - drawing a parallel between ecosystem degradation and the erosion of human connection.'
    ],
    coverImage: 'assets/digital/projects/project-1-thumb.jpg',
    images: [
      { src: 'assets/digital/projects/project-1/hero.jpg', caption: '' },
      { src: 'assets/digital/projects/project-1/image-1.jpg', caption: '' },
      { src: 'assets/digital/projects/project-1/image-2.jpg', caption: '' },
      { src: 'assets/digital/projects/project-1/image-3.jpg', caption: '' },
      { src: 'assets/digital/projects/project-1/image-4.jpg', caption: '' },
      { src: 'assets/digital/projects/project-1/image-5.jpg', caption: '' },
      { src: 'assets/digital/projects/project-1/image-6.jpg', caption: '' }
    ],
    links: [{ text: 'View Project', url: 'https://radhika1801.github.io/coral/' }]
  },

  {
    id: 'portal-to-rajasthan',
    title: 'Portal To Rajasthan',
    tagline: 'Rajasthani-inspired virtual doorway blending cultural architecture with technology',
    tags: ['installation', 'arduino'],
    year: '2025',
    tools: 'Unity, Arduino, Pressure Mat, Laser Cutting',
    description: [
      'A Rajasthani-inspired virtual doorway where stepping on a pressure mat transforms traditional motifs into abstract digital patterns. The physical act of crossing a threshold becomes a meditation on cultural identity and belonging.'
    ],
    coverImage: 'assets/digital/projects/project-2-thumb.jpg',
    images: [
      { src: 'assets/digital/projects/project-2/hero.jpg', caption: '' },
      { src: 'assets/digital/projects/project-2/image-1.jpg', caption: '' },
      { src: 'assets/digital/projects/project-2/image-2.jpg', caption: '' },
      { src: 'assets/digital/projects/project-2/image-3.jpg', caption: '' },
      { src: 'assets/digital/projects/project-2/image-4.jpg', caption: '' },
      { src: 'assets/digital/projects/project-2/image-5.jpg', caption: '' },
      { src: 'assets/digital/projects/project-2/image-6.jpg', caption: '' }
    ],
    links: [{ text: 'View Documentation', url: 'https://www.notion.so/courtneysnavely/Radhika-1eb8a42496588073ab3fe11c1ccd9be0' }]
  },


  {
    id: 'coffee-omakase',
    title: 'Coffee Omakase',
    tagline: 'interactive specialty coffee tasting flight guided by the omakase principle',
    tags: ['web', 'code'],
    year: '2025',
    tools: 'HTML, CSS, JavaScript',
    description: [
      'An interactive tasting flight applying the omakase principle to specialty coffee - five single-origin coffees curated from light and bright to deep and earthy, guiding users through flavor profiles across Ethiopia, Kenya, Guatemala, Colombia, and Sumatra.'
    ],
    coverImage: 'assets/digital/projects/project-7-thumb.jpg',
    images: [
      { src: 'assets/digital/projects/project-7/hero.jpg', caption: '' }
    ],
    links: [{ text: 'View Project', url: 'https://radhika1801.github.io/coffee-omakase/' }]
  }

];

/* ─── PHOTOGRAPHY ────────────────────────────────────────────────────────────
   Collections: fairbanks (14), hongkong (18), jaipur (16)
   To add more photos: increase the count and add the image file to assets/.
   ─────────────────────────────────────────────────────────────────────────── */

// Build photo list from collections
const PHOTO_COLLECTIONS = {
  fairbanks: {
    label: 'Fairbanks, Alaska', path: 'assets/photography/fairbanks/',
    files: [
      'fairbanks.JPG',
      'fb1.jpg','fb2.jpg','fb3.jpg','fb4.jpg','fb5.jpg','fb6.jpg','fb7.jpg',
      'fb8.jpg','fb9.jpg','fb10.jpg','fb11.jpg','fb12.jpg','fb13.jpg','fb14.jpg'
    ]
  },
  hongkong:  { label: 'Hong Kong, SAR', count: 18, prefix: 'hk', path: 'assets/photography/hongkong/' },
  jaipur: {
    label: 'Jaipur, India', path: 'assets/photography/jaipur/',
    files: [
      'j7.jpg',
      'j1.jpg','j2.jpg','j3.jpg','j4.jpg','j5.jpg','j6.jpg',
      'j8.jpg','j9.jpg','j10.jpg','j11.jpg','j12.jpg','j13.jpg','j14.jpg','j15.jpg','j16.jpg'
    ]
  },

  bryceandzion: {
    label: 'Bryce & Zion National Park, Utah',
    path: 'assets/photography/bryceandzion/',
    files: [
      '_DSC3298.jpeg',
      '_DSC3069.jpeg','_DSC3096.jpeg','_DSC3152.jpeg','_DSC3161.jpeg','_DSC3214.jpeg',
      '_DSC3223.jpeg','_DSC3232.jpeg','_DSC3351.jpeg','_DSC3369.jpeg'
    ]
  },

  lowerantelopecanyon: {
    label: 'Lower Antelope Canyon, Arizona',
    path: 'assets/photography/lowerantelopecanyon/',
    files: [
      '000053720029.jpg','_DSC3434.jpeg','_DSC3449.jpeg',
      '_DSC3468.jpeg','_DSC3530.jpeg','_DSC3535.jpeg'
    ]
  },

  valleyoffire: {
    label: 'Valley of Fire State Park, Utah',
    path: 'assets/photography/valleyoffire/',
    files: [
      '000053740034.jpg','000053740036.jpg','_DSC2823.jpeg','_DSC2836.jpeg','_DSC2861.jpeg',
      '_DSC2869.jpeg','_DSC2892.jpeg','_DSC2930.jpeg','_DSC3007.jpeg','_DSC3194.jpeg'
    ]
  }
};

// Build flat PHOTOS array from collections
const PHOTOS = (function () {
  var list = [];
  Object.keys(PHOTO_COLLECTIONS).forEach(function (key) {
    var col = PHOTO_COLLECTIONS[key];
    if (col.files) {
      col.files.forEach(function (f, i) {
        list.push({ id: key + '-' + i, collection: key, label: col.label,
                    src: col.path + f, thumb: col.path + f });
      });
    } else {
      for (var i = 1; i <= col.count; i++) {
        list.push({ id: key + '-' + i, collection: key, label: col.label,
                    src: col.path + col.prefix + i + '.jpg',
                    thumb: col.path + col.prefix + i + '.jpg' });
      }
    }
  });
  // Shuffle for a mixed display
  for (var i = list.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = list[i]; list[i] = list[j]; list[j] = tmp;
  }
  return list;
})();

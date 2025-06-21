// Updated color palettes - Now includes a fifth palette
const colorPalettes = [
  {
    '--color-primary': '#5A5A5C',
    '--color-bg': '#1C1C1C',
    '--color-bg-container': '#2A2A2A',
    '--color-bg-accent': 'rgba(90, 90, 92, 0.16)',
    '--color-text-primary': '#E8E8E8',
    '--color-text-secondary': '#A3A3A3',
    '--color-text-accent': '#5A5A5C',
  },
  {
    '--color-primary': '#F55454',
    '--color-bg': '#1C1C1C',
    '--color-bg-container': '#2A2A2A',
    '--color-bg-accent': 'rgba(245, 84, 84, .16)',
    '--color-text-primary': '#E8E8E8',
    '--color-text-secondary': '#A3A3A3',
    '--color-text-accent': '#F55454',
  },
  {
    '--color-primary': '#70CDFF',
    '--color-bg': '#1C1C1C',
    '--color-bg-container': '#2A2A2A',
    '--color-bg-accent': 'rgba(112, 205,255, .16)',
    '--color-text-primary': '#E8E8E8',
    '--color-text-secondary': '#A3A3A3',
    '--color-text-accent': '#70CDFF',
  },
  {
    '--color-primary': '#AEFF93',
    '--color-bg': '#1C1C1C',
    '--color-bg-container': '#2A2A2A)',
    '--color-bg-accent': 'rgba(174, 255, 147, .16',
    '--color-text-primary': '#E8E8E8',
    '--color-text-secondary': '#A3A3A3',
    '--color-text-accent': '#AEFF93',
  },
  {
    '--color-primary': '#CB98FF',
    '--color-bg': '#1C1C1C',
    '--color-bg-container': '#2A2A2A',
    '--color-bg-accent': 'rgba(203, 152, 255, .16)',
    '--color-text-primary': '#E8E8E8',
    '--color-text-secondary': '#A3A3A3',
    '--color-text-accent': '#CB98FF',
  },
  {
    '--color-primary': '#FFFF76',
    '--color-bg': '#1C1C1C',
    '--color-bg-container': '#2A2A2A',
    '--color-bg-accent': 'rgba(255, 255, 118, .16)',
    '--color-text-primary': '#E8E8E8',
    '--color-text-secondary': '#A3A3A3',
    '--color-text-accent': '#FFFF76',
  }
  
];

// Function to apply the selected color palette
function applyPalette(paletteIndex) {
  const palette = colorPalettes[paletteIndex];
  const root = document.documentElement;

  // Loop through the palette and update the CSS variables
  for (const [key, value] of Object.entries(palette)) {
    root.style.setProperty(key, value);
  }

  // Store the selected palette index in localStorage to persist the choice
  localStorage.setItem('selectedPalette', paletteIndex);

  // Hide the palette options container after selection
  document.querySelector('.palette-floating-container').classList.remove('active');
}

// Function to load the previously selected palette
function loadPalette() {
  const savedPalette = localStorage.getItem('selectedPalette');
  
  // If no saved palette, apply the first palette by default
  if (savedPalette === null) {
    applyPalette(0);
  } else {
    applyPalette(parseInt(savedPalette, 10)); // Apply saved palette
  }
}

// Add event listeners to each color box
document.querySelectorAll('.palette-box').forEach(box => {
  box.addEventListener('click', (e) => {
    const paletteIndex = e.target.getAttribute('data-palette');
    if (paletteIndex !== null) {
      applyPalette(parseInt(paletteIndex, 10)); // Apply the selected palette
    }
  });
});

// Toggle the visibility of the palette options when the icon is clicked
const paletteIcon = document.querySelector('.palette-floating-icon');
const paletteContainer = document.querySelector('.palette-floating-container');

// Show or hide the options container when the floating icon is clicked
paletteIcon.addEventListener('click', (e) => {
  e.stopPropagation();  // Prevent click from propagating to the document
  paletteContainer.classList.toggle('active');
});

// Close the options if the user clicks outside the floating icon and the options
document.addEventListener('click', (e) => {
  const isClickInside = paletteContainer.contains(e.target) || paletteIcon.contains(e.target);
  if (!isClickInside) {
    paletteContainer.classList.remove('active');  // Hide the options if clicked outside
  }
});

// Load the saved palette when the page is loaded
window.addEventListener('DOMContentLoaded', loadPalette);

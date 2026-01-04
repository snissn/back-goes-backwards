const controlsHTML = `
  <div class="label">Inhale Duration (ms)</div>
  <input type="range" id="inhaleSlider" min="1000" max="8000" />
  <div class="label">Hold After Inhale (ms)</div>
  <input type="range" id="holdInSlider" min="0" max="8000" />
  <div class="label">Exhale Duration (ms)</div>
  <input type="range" id="exhaleSlider" min="1000" max="8000" />
  <div class="label">Hold After Exhale (ms)</div>
  <input type="range" id="holdExSlider" min="0" max="8000" />
`;

const defaultSettings = {
  inhale: 4000,
  holdIn: 2000,
  exhale: 4000,
  holdEx: 2000
};

export function initControls() {
  const div = document.getElementById('controls');
  div.innerHTML = controlsHTML;
  let settings = JSON.parse(localStorage.getItem('breathSettings')) || defaultSettings;
  Object.keys(settings).forEach(key => {
    const slider = document.getElementById(key + 'Slider');
    slider.value = settings[key];
    slider.addEventListener('input', saveSettings);
    slider.addEventListener('input', () => lastInteraction());
  });
  div.addEventListener('mouseenter', () => {
    div.classList.remove('hidden');
    lastInteraction();
  });
  div.addEventListener('mousemove', lastInteraction);
  return div;
}

let lastInteractionTime = Date.now();
export function getDurations() {
  return {
    inhale: parseInt(document.getElementById('inhaleSlider').value),
    holdIn: parseInt(document.getElementById('holdInSlider').value),
    exhale: parseInt(document.getElementById('exhaleSlider').value),
    holdEx: parseInt(document.getElementById('holdExSlider').value)
  };
}

export function styleControls(div, bgColor, labelColor) {
  div.style.backgroundColor = bgColor.toString('#rrggbb');
  div.style.color = labelColor.toString('#rrggbb');
}

function saveSettings() {
  const settings = getDurations();
  localStorage.setItem('breathSettings', JSON.stringify(settings));
}

function lastInteraction() {
  lastInteractionTime = Date.now();
}

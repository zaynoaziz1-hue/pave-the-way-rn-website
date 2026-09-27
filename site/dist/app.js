const mediaRoot = 'assets/pave-the-way/';
const projects = {
  2: ['A poolside<br>perspective.', 'A fresh paver surround brings a new finish to this lakeside pool deck.', 'Pool deck'],
  5: ['A welcome<br>worth coming home to.', 'A new paver driveway gives this home a crisp, cohesive approach.', 'Driveway'],
  1: ['A fresh step<br>outside.', 'A finished paver lanai connects the home with its outdoor space.', 'Lanai'],
  4: ['Room to<br>enjoy the outdoors.', 'A stone patio transforms an unfinished side yard into usable outdoor space.', 'Patio'],
  3: ['Curb appeal,<br>reimagined.', 'A rich-toned paver driveway replaces the prepared base with a finished entrance.', 'Paver driveway']
};
const slider = document.querySelector('#compare-range');
const comparison = document.querySelector('#comparison');
slider.addEventListener('input', () => comparison.style.setProperty('--split', `${slider.value}%`));
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.project;
    const [title, description, label] = projects[id];
    document.querySelector('#project-title').innerHTML = title;
    document.querySelector('#project-description').textContent = description;
    for (const stage of ['before','after']) {
      const img = document.querySelector(`#${stage}-image`);
      img.src = `${mediaRoot}${stage}${id}.webp`;
      img.alt = `${label} ${stage} installation`;
    }
    document.querySelectorAll('[data-project]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    slider.value = 50;
    comparison.style.setProperty('--split', '50%');
  });
});
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); navigation.classList.toggle('open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
const video = document.querySelector('#hero-video');
const motion = document.querySelector('#motion-toggle');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
let manuallyPaused = false;
function syncMotion() { motion.innerHTML = video.paused ? '▶ <span>Play film</span>' : 'Ⅱ <span>Pause film</span>'; motion.setAttribute('aria-label', video.paused ? 'Play background video' : 'Pause background video'); }
video.addEventListener('playing', () => {video.classList.add('playing');syncMotion();});
video.addEventListener('pause', syncMotion);
video.addEventListener('error', () => {video.classList.remove('playing');motion.hidden=true;});
motion.addEventListener('click', () => { if(video.paused) {manuallyPaused=false;video.play().catch(syncMotion);} else {manuallyPaused=true;video.pause();} });
if (!reduceMotion.matches) video.play().catch(syncMotion);
reduceMotion.addEventListener('change', e => { if(e.matches) video.pause(); });
new IntersectionObserver(([entry]) => { if(!entry.isIntersecting) video.pause(); else if(!manuallyPaused && !reduceMotion.matches && document.visibilityState === 'visible') video.play().catch(syncMotion); }, {threshold:.05}).observe(document.querySelector('.hero'));
document.addEventListener('visibilitychange', () => { if(document.hidden) video.pause(); });
document.querySelector('#year').textContent = new Date().getFullYear();

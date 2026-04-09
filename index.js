// patent slider
let patentCurrentIndex = 0;
const patentCards = document.querySelectorAll('.patent-card');
const patentTrack = document.getElementById('patent-track');

function updatePatentSlider() {
  if (patentTrack && patentCards.length > 0) {
    const offset = -patentCurrentIndex * 100;
    patentTrack.style.transform = `translateX(${offset}%)`;
  }
}

if (document.getElementById('pat-next')) {
  document.getElementById('pat-next').addEventListener('click', () => {
    patentCurrentIndex = (patentCurrentIndex + 1) % patentCards.length;
    updatePatentSlider();
  });
}

if (document.getElementById('pat-prev')) {
  document.getElementById('pat-prev').addEventListener('click', () => {
    patentCurrentIndex = (patentCurrentIndex - 1 + patentCards.length) % patentCards.length;
    updatePatentSlider();
  });
}

// achievements slider
let achCurrentIndex = 0;
const achCards = document.querySelectorAll('.ach-card');
const achTrack = document.getElementById('ach-track');
const achDots = document.getElementById('ach-dots');
const achFill = document.getElementById('ach-fill');

// generate dots
function generateAchievementDots() {
  if (achDots) {
    achCards.forEach((_, index) => {
      const dot = document.createElement('span');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goAchievementSlide(index));
      achDots.appendChild(dot);
    });
  }
}

function updateAchievementSlider() {
  if (achTrack && achCards.length > 0) {
    const offset = -achCurrentIndex * 100;
    achTrack.style.transform = `translateX(${offset}%)`;
  }
  
  // update dots
  if (achDots) {
    document.querySelectorAll('.slider-dots span').forEach((dot, index) => {
      dot.classList.toggle('active', index === achCurrentIndex);
    });
  }

  // update progress bar
  if (achFill && achCards.length > 0) {
    const progress = ((achCurrentIndex + 1) / achCards.length) * 100;
    achFill.style.width = progress + '%';
  }
}

function goAchievementSlide(index) {
  achCurrentIndex = index;
  updateAchievementSlider();
}

if (document.getElementById('ach-next')) {
  document.getElementById('ach-next').addEventListener('click', () => {
    achCurrentIndex = (achCurrentIndex + 1) % achCards.length;
    updateAchievementSlider();
  });
}

if (document.getElementById('ach-prev')) {
  document.getElementById('ach-prev').addEventListener('click', () => {
    achCurrentIndex = (achCurrentIndex - 1 + achCards.length) % achCards.length;
    updateAchievementSlider();
  });
// milestone slider
let msCurrentIndex = 5; // Default to 2023
const msCards = document.querySelectorAll('.milestone-card');
const msTrack = document.getElementById('ms-track');
const msFill = document.getElementById('ms-fill');

function updateMilestoneSlider() {
  if (msTrack && msCards.length > 0) {
    const offset = -msCurrentIndex * 100;
    msTrack.style.transform = `translateX(${offset}%)`;
  }

  // update timeline dots
  document.querySelectorAll('.tl-year').forEach((year, index) => {
    year.classList.toggle('active', index === msCurrentIndex);
  });

  // update progress bar
  if (msFill && msCards.length > 0) {
    const progress = ((msCurrentIndex + 1) / msCards.length) * 100;
    msFill.style.width = progress + '%';
  }
}

function goMilestone(index) {
  msCurrentIndex = index;
  updateMilestoneSlider();
}

if (document.getElementById('ms-next')) {
  document.getElementById('ms-next').addEventListener('click', () => {
    msCurrentIndex = (msCurrentIndex + 1) % msCards.length;
    updateMilestoneSlider();
  });
}

if (document.getElementById('ms-prev')) {
  document.getElementById('ms-prev').addEventListener('click', () => {
    msCurrentIndex = (msCurrentIndex - 1 + msCards.length) % msCards.length;
    updateMilestoneSlider();
  });
}

// events gallery
function setEvent(button, eventType) {
  document.querySelectorAll('.events-tabs button').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

}

// initialize achievements dots
generateAchievementDots();

// initialize milestone slider
updateMilestoneSlider(); }

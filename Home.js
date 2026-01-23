const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", "inactive");
};

const toggleDarkmode = () => localStorage.getItem("darkmode") === "active" ? disableDarkmode() : enableDarkmode();

// Dark mode will be applied in the window.onload handler below



const changeFont = fontName => {
  document.body.style.fontFamily = fontName;
  localStorage.setItem('selectedFont', fontName);
};

// Save the toggled light mode to local storage
const savelightmode = () => localStorage.setItem('lightModeColor', document.getElementById("mode").style.backgroundColor);
//apply saved functions to the page
window.onload = function() {
  // Apply dark mode if previously enabled
  if (localStorage.getItem("darkmode") === "active") {
    enableDarkmode();
  }

  // Apply saved font
  const savedFont = localStorage.getItem('selectedFont');
  if (savedFont) {
    document.body.style.fontFamily = savedFont;
  }

  // Apply saved light mode color
  const mode = document.getElementById("mode");
  const savedColor = localStorage.getItem('lightModeColor');
  if (savedColor && mode) {
    mode.style.backgroundColor = savedColor;
    mode.style.color = (savedColor === "rgb(21, 23, 131)") ? "white" : "black";
  }

  // Go to top of page button functions
  const mybutton = document.getElementById("myBtn");
  window.onscroll = () => {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    mybutton.style.display = scroll > 20 ? "block" : "none";
  };
  window.topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Filter items on page load
  filterItems();
}

//onclick show dropdown
const toggleDropdown = () => {
  const dropdown = document.getElementById("fontDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
};

//Hide dropdown when clicking outside
document.addEventListener('click', event => {
  const dropdown = document.getElementById("fontDropdown");
  const btn = document.querySelector('.dropbtn');
  if (!btn.contains(event.target)) {
    dropdown.style.display = "none";
  }
});
// boat biographies 
const items = [
  { id: 'NS14', title: 'NS14', image: 'https://imgs.yachthub.com/3/2/8/3/6/7/0_4.jpg' },
  { id: 'MG14', title: 'MG14', image: 'https://static.wixstatic.com/media/0ff8c6_a4c00201f49549c09812d438bcc6b6ff~mv2.jpg/v1/fill/w_480,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0ff8c6_a4c00201f49549c09812d438bcc6b6ff~mv2.jpg' },
  { id: 'RS Quest', title: 'RS Quest', image: 'https://images.squarespace-cdn.com/content/v1/62207344582c7d0bad231380/631d59c7-16ad-4bcd-99f6-44fe94b139e0/Quest-diagram-Rot-627x812.jpg' },
  { id: 'Laser', title: 'Laser', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2f92wiLkxIKiSmz0y4vT9Ph7iF0FMSDwV0oc3dJXvngKlZHOMat1Om6D5tF87twgckNAvCpYdWC1P1-27PvFviOeVc2OITcvGtylvQ&s=10' }
];

function filterItems() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const resultsGrid = document.getElementById('resultsGrid');
  resultsGrid.innerHTML = items.filter(item => item.title.toLowerCase().includes(searchInput)).map(item => `
    <div class="result-item" onclick="openBoat(event, '${item.id}')">
      <h4>${item.title}</h4>
      <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 150px; object-fit: contain; border-radius: 4px;">
    </div>`).join('');
}

function openBoat(evt, boatName) {
  document.getElementById('resultsGrid').style.display = 'none';
  
  Array.from(document.getElementsByClassName('tabcontent')).forEach(el => el.style.display = 'none');
  Array.from(document.getElementsByClassName('tablinks')).forEach(el => el.className = el.className.replace(' active', ''));
  
  const element = document.getElementById(boatName);
  if (element) {
    element.style.display = 'block';
  }
  if (evt.currentTarget) {
    evt.currentTarget.className += ' active';
  }
}

function showResults() {
  document.getElementById('resultsGrid').style.display = 'grid';
  Array.from(document.getElementsByClassName('tabcontent')).forEach(el => el.style.display = 'none');
}
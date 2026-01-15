let darkmode = localStorage.getItem("darkmode");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", "inactive");
};

function toggleDarkmode() {
  let darkmode = localStorage.getItem("darkmode");
  if (darkmode === "active") {
    disableDarkmode();
  } else {
    enableDarkmode();
  }
}

// Dark mode will be applied in the window.onload handler below



// Change text to the selected font
function changeFont(fontName) {
    document.body.style.fontFamily = fontName;
    localStorage.setItem('selectedFont', fontName);
}

// Save the toggled light mode to local storage
function savelightmode() {
    const mode = document.getElementById("mode");
    const currentColor = mode.style.backgroundColor;
    localStorage.setItem('lightModeColor', currentColor);
    
}
//apply saved functions to the page
window.onload = function() {
  // Apply dark mode if previously enabled
  let darkmode = localStorage.getItem("darkmode");
  if (darkmode === "active") {
    enableDarkmode();
  }

  // Apply saved font
  const savedFont = localStorage.getItem('selectedFont');
  if (savedFont) {
    document.body.style.fontFamily = savedFont;
  }

  // Apply saved light mode color
  const savedColor = localStorage.getItem('lightModeColor');
  const mode = document.getElementById("mode");
  if (savedColor && mode) {
    mode.style.backgroundColor = savedColor;
    mode.style.color = (savedColor === "rgb(21, 23, 131)") ? "white" : "black";
  }

  // Go to top of page button functions
  let mybutton = document.getElementById("myBtn");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  window.topFunction = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

//onclick show dropdown
function toggleDropdown() {
 var dropdown = document.getElementById("fontDropdown");
 dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}
//Hide dropdown when clicking outside
document.addEventListener('click', function(event) {
 var dropdown = document.getElementById("fontDropdown");
 var btn = document.querySelector('.dropbtn');
 if (!btn.contains(event.target)) {
 dropdown.style.display = "none";
 }
});
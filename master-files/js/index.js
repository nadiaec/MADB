/* This code was taken from w3schools */
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/*----------------------------------------------------------------------------------*/
/* This code was taken from w3schools */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/*----------------------------------------------------------------------------------*/
function toggleMenu() {
  document.querySelector('.mobile-menu').classList.toggle('active');
}

/*---------------------------------------------------------------------------------*/

document.querySelector(".collapsible").addEventListener("click", function() {
  const content = this.nextElementSibling;
  const arrow = this.querySelector(".arrow");
  
  content.classList.toggle("active");
  arrow.classList.toggle("rotate");
});
/*---------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".feature").forEach(feature => {
      feature.addEventListener("click", function (event) {
          // Prevent clicking inside .collapse-content from triggering navigation
          if (!event.target.closest(".collapse-content") && !event.target.closest(".collapsible")) {
              window.location.href = this.getAttribute("data-link");
          }
      });
  });
});

/*---------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  let interval;

  window.startTimer = function () {
    clearInterval(interval);
    let time = 300; // 5 minutes in seconds
    const timerDisplay = document.getElementById("timer");

    interval = setInterval(() => {
      const minutes = String(Math.floor(time / 60)).padStart(2, '0');
      const seconds = String(time % 60).padStart(2, '0');
      timerDisplay.textContent = `${minutes}:${seconds}`;
      time--;

      if (time < 0) {
        clearInterval(interval);
        timerDisplay.textContent = "Time's up!";
      }
    }, 1000);
  };
});

var smallScreens = document.querySelectorAll('.small-screen');


function toggleSmallScreen(smallScreen) {
  if (smallScreen.style.display === 'block') {
    smallScreen.style.display = 'none';
  } else {
    smallScreens.forEach(function (screen) {
      screen.style.display = 'none';
    });
    smallScreen.style.display = 'block';
  }
}
document.getElementById("showButton").addEventListener("click", function () {
  toggleSmallScreen(document.getElementById("smallScreen"));
});

document.getElementById("showButton2").addEventListener("click", function () {
  toggleSmallScreen(document.getElementById("smallScreen2"));
});

document.getElementById("showButton3").addEventListener("click", function () {
  toggleSmallScreen(document.getElementById("smallScreen3"));
});


window.addEventListener('click', function (event) {
  if (!event.target.matches('.small-screen, button')) {
    smallScreens.forEach(function (screen) {
      screen.style.display = 'none';
    });
  }
});
document.querySelectorAll('button svg').forEach(function (svg) {
  svg.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});
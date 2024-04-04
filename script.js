
const buttonss = document.querySelectorAll(".chbutton");

// Add click event listeners to each button
buttonss.forEach(function (button) {
  button.addEventListener("click", function () {
    // Remove "active" class from all buttons
    buttonss.forEach(function (btn) {
      btn.classList.remove("active");
    });

    // Add "active" class to the clicked button
    button.classList.add("active");
  });
});


function showComponent(componentId) {
  var components = document.getElementsByClassName('component');

  for (var i = 0; i < components.length; i++) {
    components[i].style.display = 'none';
  }

  var selectedComponent = document.getElementById(componentId);
  if (selectedComponent) {
    selectedComponent.style.display = 'block';
  }

  // Hide the navigation when 'watch' is selected
  var navigationComponent = document.getElementById('navigation');
  if (componentId === 'watch') {
    navigationComponent.style.display = 'none';
  } else {
    navigationComponent.style.display = 'flex';
  }
}

// cookie popup

const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");
const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};
//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);


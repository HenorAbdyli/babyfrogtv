
// function showComponent(componentId) {
//     var components = document.getElementsByClassName('component');
//     for (var i = 0; i < components.length; i++) {
//         components[i].style.display = 'none';
//     }

//     var selectedComponent = document.getElementById(componentId);
//     if (selectedComponent) {
//         selectedComponent.style.display = 'block';
//     }
// }
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
const mobileMenuIcon = document.querySelector('#mobile-menu-icon');
const mobileMenuList = document.querySelector('#mobile-menu-list');
const mobileExitMenuIcon = document.querySelector('#mobile-exit-menu-icon');

// Clicking on the hamburger menu drops down the main menu
mobileMenuIcon.addEventListener('click', function() {
  // 1. Unhide menu links/list
  mobileMenuList.classList.remove('hide');

  // 2. Hide hamburger menu icon
  mobileMenuIcon.classList.add('hide');

  // 3. Show exit menu icon
  mobileExitMenuIcon.classList.remove('hide');
});

// Clicking on the exit menu restores the menu back to default
mobileExitMenuIcon.addEventListener('click', function() {
  // 1. Hide menu links/list
  mobileMenuList.classList.add('hide');
  // 2. Show hamburger menu icon
  mobileMenuIcon.classList.remove('hide');
  // 3. Hide the exit menu icon
  mobileExitMenuIcon.classList.add('hide');
});

// TODO: Click on the Topics menu hides the topics
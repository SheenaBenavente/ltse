const mobileMenuIcon = document.querySelector('#mobile-menu-icon');
const mobileMenuList = document.querySelector('#mobile-menu-list');
const mobileExitMenuIcon = document.querySelector('#mobile-exit-menu-icon');

mobileMenuIcon.addEventListener('click', function() {
  // 1. Unhide menu links/list
  mobileMenuList.classList.remove('hide');

  // 2. Hide hamburger menu icon
  mobileMenuIcon.classList.add('hide');

  // 3. Show exit menu icon
  mobileExitMenuIcon.classList.remove('hide');
});

// TODO: Clicking on the exit menu icon should restore things back to default
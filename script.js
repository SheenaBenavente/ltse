const mobileMenuIcon = document.querySelector('#mobile-menu-icon');
const mobileMenuList = document.querySelector('#mobile-menu-list');
const mobileExitMenuIcon = document.querySelector('#mobile-exit-menu-icon');

const topicsMenuListIcon = document.querySelector('#topics-menu-open');
const topicsMenuList = document.querySelector('#topics-menu-list')
const topicsExitMenuIcon = document.querySelector('#topics-menu-close');

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

// Click on the Topics menu hides the topics

topicsMenuListIcon.addEventListener('click', function() {
  // 1. Unhide topics menu links/list
  topicsMenuList.classList.remove('hide');

  // 2. Show topics menu close icon
  topicsMenuListIcon.classList.add('hide');

  // 3. Hide the exit menu icon
  topicsExitMenuIcon.classList.remove('hide');
});

//Click on the Topics exit menu to hide the topics
topicsExitMenuIcon.addEventListener('click', function() {
  // 1. Hide topics links/list
  topicsMenuList.classList.add('hide');

  // 2. Show topics menu icon
  topicsMenuListIcon.classList.remove('hide');
  
  // 3. Hide the topics exit menu icon
  topicsExitMenuIcon.classList.add('hide');
})
// dashboard.js

document.addEventListener('DOMContentLoaded', function () {
  // Sidebar toggling functionality
  const sidebarMenu = document.getElementById('sidebarMenu');
  const mainNavbar = document.getElementById('main-navbar');
  const toggleButton = document.querySelector('.navbar-toggler');

  toggleButton.addEventListener('click', function () {
    sidebarMenu.classList.toggle('show');
    mainNavbar.classList.toggle('sidebar-open');
  });

  // Tab click handlers
  const tabs = document.querySelectorAll('.list-group-item-action');
  const iframe = document.getElementById('dashboard-iframe');

  tabs.forEach((tab) => {
    tab.addEventListener('click', function (event) {
      event.preventDefault();
      const tabSrc = tab.getAttribute('data-tab-src');
      iframe.src = tabSrc;

      // Update the active tab
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});

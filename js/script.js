document.addEventListener('DOMContentLoaded', function() {
  // Navbar
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close-button");
  const menuBtn = document.getElementById("menu-button");
  
  function showSidebar() {
    sidebar.classList.remove('hidden');
  }
  
  function hideSidebar() {
    sidebar.classList.add('hidden')
  }
  
  menuBtn.addEventListener("click", showSidebar);
  closeBtn.addEventListener("click", hideSidebar);
  sidebar.addEventListener("click", hideSidebar);


  // Shop Section Tab Layout
  const tabs = document.querySelectorAll('[data-tab-target]');
  const activeClass = "text-cyan-500 border-b-2 border-cyan-500 hover:text-cyan-600";

  // This sets the first tab as active on page load
  tabs[0].classList.add(...activeClass.split(' '));
  document.querySelector('#athletics').classList.remove('hidden');

  // This adds click event listeners to each tab
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      // console.log(target);

      // Hide all tab contents and remove active classes from all tabs
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
      });

      // Remove the hidden class from the clicked tab-content
      target.classList.remove('hidden');

      // Add the active class to only the clicked tab and remove from others
      tabs.forEach(t => {
        t.classList.remove(...activeClass.split(' '));
      });
      
      tab.classList.add(...activeClass.split(' '));
    });
  });
})
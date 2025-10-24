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
})
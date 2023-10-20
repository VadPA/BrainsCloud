const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page');
const body = document.body;

burger.addEventListener('click', e => {
  if (body.classList.contains('show-sidebar')) {
    closeSidebar();
  } else {
    showSidebar();
  }
});

function showSidebar() {
  const mask = document.createElement('div');
  mask.classList.add('page__mask');
  mask.addEventListener('click', closeSidebar);
  page.appendChild(mask);

  body.classList.add('show-sidebar');
}

function closeSidebar() {
  const mask = document.querySelector('.page__mask')
  body.classList.remove('show-sidebar')
  page.removeChild(mask);
}
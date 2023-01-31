let menu = document.querySelector('.menu'),
  menu_lines = document.querySelectorAll('.menu .lines')[0],
  menu_lines1 = document.querySelectorAll('.menu .lines')[1],
  menu_lines2 = document.querySelectorAll('.menu .lines')[2],
  lists = document.querySelector('.header_list');

menu.addEventListener('click', function(){
  lists.classList.toggle('active')
  menu_lines.classList.toggle('active')
  menu_lines1.classList.toggle('active')
  menu_lines2.classList.toggle('active')
  document.body.classList.toggle('active')
})
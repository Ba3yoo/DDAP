const navbar = document.querySelector('nav')
const menu = navbar.querySelector('ul')
const openBtn = navbar.querySelector('.fa-bars')
const closeBtn = menu.querySelector('.fa-times')

openBtn.onclick = () => menu.classList.toggle('menu')
closeBtn.onclick = () => menu.classList.toggle('menu')

// // Mendapatkan elemen-elemen yang dibutuhkan
// const menuToggle = document.querySelector('.fa-solid');
// const navMenu = document.querySelector('nav ul');

// // Menambahkan event listener ke menu toggle
// menuToggle.addEventListener('click', () => {
//   navMenu.classList.toggle('menu'); // Menambahkan atau menghapus class 'menu'
// });

const mobileMenuIcon = document.querySelector('.mobile_menu_icon');
const mobileMenuList = document.querySelector('.mobile_menu_list');

mobileMenuIcon.addEventListener('click', function() {
    // mobileMenuIcon.classlist.toggle('show');
    mobileMenuList.classList.toggle('show');
});

// mobileMenuIcon.addEventListener('click', function() {
//   mobileMenuIcon.classlist.toggle('show');
//   // mobileMenuList.classList.toggle('show');
// });
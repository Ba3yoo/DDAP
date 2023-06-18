const mobileMenuIcon = document.querySelector('.mobile_menu_icon');
const mobileMenuList = document.querySelector('.mobile_menu_list');

mobileMenuIcon.addEventListener('click', function() {
    mobileMenuList.classList.toggle('show');
});
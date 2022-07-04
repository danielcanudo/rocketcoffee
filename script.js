const menuopen = document.getElementById('menu-open');
const navmenu = document.getElementsByTagName('nav');
const menuclose = document.getElementById('menu-close');

menuopen.onclick = () => {
    navmenu[0].classList.add('show');
    menuopen.style.display = 'none';
    menuclose.style.display = 'block';
}

menuclose.onclick = () => {
    navmenu[0].classList.remove('show');
    menuopen.style.display = 'block';
    menuclose.style.display = 'none';
}
const navTrigger = document.querySelectorAll('.menu__trigger');
const menu = document.querySelector('.header .nav');

navTrigger.forEach((btn) => {
	btn.addEventListener('click', () => {
		menu.classList.toggle('active');
	});
});

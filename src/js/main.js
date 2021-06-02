// selector function
function $(selected) {
	const self = document.querySelector(selected);
	return self;
}
function $all(selected) {
	const self = document.querySelectorAll(selected);
	return self;
}

// menu active class
const menuLink = $all('.nav__menu-link');

menuLink.forEach((link) => {
	link.addEventListener('click', function () {
		menuLink.forEach((btn) => {
			btn.classList.remove('active');
		});

		this.classList.add('active');
	});
});

// Mobile menu
const navTrigger = $all('.menu__trigger');
const menu = $('.header .nav');

navTrigger.forEach((btn) => {
	btn.addEventListener('click', () => {
		menu.classList.toggle('active');
	});
});

// sticky nav
const nav = $('.header .nav');
const stickyNav = (entries) => {
	const [entry] = entries;
	if (!entry.isIntersecting) nav.classList.add('sticky');
	else nav.classList.remove('sticky');
};
const header = $('.header');
const navHeight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// tabbed component

const tabs = $all('.faq__tab');
const tabContainer = $('.faq__tab-container');
const tabContent = $all('.faq__content');

tabContainer.addEventListener('click', function (e) {
	const clicked = e.target.closest('.faq__tab');

	if (!clicked) return;

	// removeing active classes
	tabs.forEach((tab) => tab.classList.remove('faq__tab--active'));
	tabContent.forEach((tab) => tab.classList.remove('faq__content--active'));

	// activate tabs
	clicked.classList.add('faq__tab--active');
	$(`.faq__content--${clicked.dataset.tab}`).classList.add('faq__content--active');
});

// accordion

const accordionItems = $all('.accordion__item');
const accordionTitles = $all('.accordion__item-title');

accordionTitles.forEach((btn) => {
	btn.addEventListener('click', function () {
		this.closest('.accordion__item').classList.toggle('active');
	});
});

// popup
const popupTrigger = document.querySelectorAll('.popup__trigger');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');

// if you want to change the video just replace the url
const videoUrl = 'https://umustsee.net/UAO1MC';

const videoMarkup = `
					<iframe
						class="embed-responsive-item"
						src="${videoUrl}"
						allowfullscreen
					></iframe>
				`;

popupTrigger.forEach((btn) => {
	btn.addEventListener('click', function () {
		popup.classList.toggle('active');
		if (popup.classList.contains('active')) {
			popupContainer.insertAdjacentHTML('afterbegin', videoMarkup);
		} else {
			popupContainer.innerHTML = '';
		}
	});
});

// sub heading text
const subHeads = document.querySelectorAll('.first__big');

subHeads.forEach((head) => {
	const text = head.innerHTML;
	const textArr = text.replace(/(\r\n\t|\n|\r|\t)/gm, '').split(' ');
	const markup = textArr
		.map((el) => {
			return `<span class="first__word">${el[0]}</span>${el.slice(1)}`;
		})
		.join(' ');
	head.innerHTML = '';
	head.insertAdjacentHTML('afterbegin', markup);
});


// =============================
// Click me button
// =============================
// const clickMe = document.querySelector('.click__me');

// clickMe.addEventListener('click', function(e){
// 	// e.preventDefault()
// 	window.open(`https://www.facebook.com/LifeVestEnterprises`);
// 	// window.open(`https://www.instagram.com/lifevest.enterprises`);
// })
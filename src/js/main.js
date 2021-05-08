// selector function
function $(selected) {
	const self = document.querySelector(selected);
	return self;
}
function $all(selected) {
	const self = document.querySelectorAll(selected);
	return self;
}

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
	tabContent.forEach((tab) =>
		tab.classList.remove('faq__content--active')
	);

	// activate tabs
	clicked.classList.add('faq__tab--active');
	$(`.faq__content--${clicked.dataset.tab}`).classList.add(
		'faq__content--active'
	);
});


// accordion 

const accordionItems = $all('.accordion__item');
const accordionTitles = $all('.accordion__item-title');

accordionTitles.forEach(btn => {
	btn.addEventListener('click', function(){
		accordionItems.forEach(item => item.classList.remove('active'));
		this.closest('.accordion__item').classList.add('active');
	})
})


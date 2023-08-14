import SwiperCore, {
	Autoplay,
	EffectCreative,
	EffectFade,
	Grid,
	Mousewheel,
	Navigation,
	Pagination,
	Virtual,
} from "swiper";
SwiperCore.use([
	Mousewheel,
	Pagination,
	Navigation,
	EffectFade,
	Autoplay,
	Grid,
	EffectCreative,
	Virtual,
]);

const servicesSliderProps = {
	slidesPerView: 3,
	spaceBetween: 40,
	watchSlidesProgress: true,
	noSwipingSelector: "a",
	loop: false,
	speed: 1000,
	watchOverflow: true,
	navigation: false,
	breakpoints: {
	  // when window width is >= 320px
	  0: {
			slidesPerView: 1.2,
			spaceBetween: 20,
	  },
	  // when window width is >= 480px
	  767: {
			slidesPerView: 3,
			spaceBetween: 30,
	  },
	  // when window width is >= 640px
	  1024: {
			slidesPerView: 3,
			spaceBetween: 40,
	  },
	},
};

export {
	servicesSliderProps
};

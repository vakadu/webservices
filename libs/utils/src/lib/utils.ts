import { MouseEvent } from 'react';

export function initCursor() {

	// The cursor is set to the center of the window by dividing 
	// the window's inner width and inner height by 2 and assigning the results 
	// to mouseX and mouseY variables, respectively.
	let mouseX = window.innerWidth/2;
	let mouseY = window.innerHeight/2;

	const cursor = {
		el: document.querySelector('.cursor') as HTMLElement,
		x: window.innerWidth/2,
		y: window.innerHeight/2,
		w: 30,
		h: 30,

		// This method updates the position of the cursor element on the page based 
		// on the current cursor coordinates (x and y) and uses CSS transform property 
		// to translate the cursor element to the new position
		update: function() {
			const l = this.x - this.w/2;
			const t = this.y - this.h/2;
			this.el.style.transform = "translate3d(" + l + "px," + t + "px, 0)";
		}
	};

	// An event listener is added to the window object to track the mouse movement. 
	// Whenever the user moves the mouse, the mousemove event is triggered, 
	// and the mouseX and mouseY variables are updated with the current mouse coordinates.
	window.addEventListener("mousemove", (e) => {
		mouseX = e.clientX;
		mouseY = e.clientY;
	});

	const link = document.querySelectorAll(
		"a, .swiper-pagination, .swiper-button-prev, .swiper-button-next, button, .button, .btn, .lnk"
	);
	link.forEach((link) => {
		link.addEventListener("mouseenter", () => {
			cursor.el.classList.add("cursor-zoom");
		});
		link.addEventListener("mouseleave", () => {
			cursor.el.classList.remove("cursor-zoom");
		})
	})

	setInterval(move, 1000 / 60);

	// A move function is defined, which is called repeatedly at a frequency of 
	// 60 times per second (approximated using setInterval). Inside the move function, 
	// the cursor's x and y properties are updated gradually (smoothed) using 
	// linear interpolation (lerp function) towards the current mouse 
	// coordinates (mouseX and mouseY). This creates a smooth transition effect for
	//  the cursor movement.
	function move() {
		cursor.x = lerp(cursor.x, mouseX, 0.1);
		cursor.y = lerp(cursor.y, mouseY, 0.1);

		// The cursor.update() method is called within the move function to update 
		// the position of the cursor element on the page based on the updated 
		// x and y coordinates.
		cursor.update();
	}
	
	// This function calculates a linear interpolation between two values (start and end) 
	// based on a given amount (amt). It is used to smooth out the cursor movement 
	// by gradually transitioning between the previous and current mouse coordinates.
	function lerp(start: number, end: number, amt: number) {
		return (1 - amt) * start + amt * end;
	}
}

export function stickyNav() {
	const offset = window.scrollY;
	const sticky = document.querySelectorAll(".header");
	sticky.forEach((stick) => {
		if (stick) {
			if (offset > 100) {
				stick.classList.add("header-in", "sticky-header");
			} else {
				stick.classList.remove("header-in", "sticky-header");
			}
		  }
	})
}

export function toggleMenu(e: MouseEvent) {
	e.preventDefault();
	const menu = document.querySelector(".menu-btn");
	if(menu?.classList.contains('active')) {
		menu?.classList.remove('active');
		menu?.classList.add('no-touch');
		document.body.classList.remove('no-scroll');
		document.querySelector(".menu-overlay")?.classList.remove("is-open");
		document.querySelector(".menu-overlay")?.classList.remove("has-scroll");
		document.querySelector(".menu-overlay")?.classList.remove("animate-active");
		setTimeout(function () {
			document.querySelector(".menu-overlay")?.classList.remove("is-visible");
			menu.classList.remove("no-touch");
		}, 1000);
	} else {
		menu?.classList.add('active', 'no-touch');
		document.body.classList.add('no-scroll');
		document.querySelector(".menu-overlay")?.classList.add("is-visible", "is-open");
		setTimeout(function () {
			document.querySelector(".menu-overlay")?.classList.add("has-scroll", "animate-active");
			menu?.classList.remove("no-touch");
		}, 1000);
	}
	return false;
};

export const activeAnimation = () => {
	// The progress_inner variable is assigned the result of document.querySelectorAll(".scroll-animate"), 
	// which selects all elements with the class "scroll-animate" from the document.
	const progress_inner = document.querySelectorAll<HTMLElement>(".scroll-animate");
	// The triggerBottom variable is set to (window.innerHeight / 5) * 5 - 20, 
	// which calculates a position in the viewport to trigger the animation. 
	// The exact formula used may depend on specific requirements.
	const triggerBottom = (window.innerHeight / 5) * 5 - 20;	
  
	progress_inner.forEach((box: HTMLElement) => {
		// box.getBoundingClientRect().top retrieves the top position of each element relative to the viewport.
		const boxTop = box.getBoundingClientRect().top;
		// checks if the top position of the element is above the triggerBottom threshold.
		if (boxTop < triggerBottom) {
			box.style.visibility = "visible";
			box.classList.add("animate__active");
		}
	});
};

export const randomStringGenerator = (length: number) => {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars.charAt(randomIndex);
    }
    return result;
};

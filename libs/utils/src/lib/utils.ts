export function initCursor() {

	// The cursor is set to the center of the window by dividing 
	// the window's inner width and inner height by 2 and assigning the results 
	// to mouseX and mouseY variables, respectively.
	let mouseX = window.innerWidth/2;
	let mouseY = window.innerHeight/2;

	const cursor = {
		el: document.querySelector('.cursor') as any,
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

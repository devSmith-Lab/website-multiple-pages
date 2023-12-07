
/* :: 1.0 Testimonial Slider JS */
	function testimonialSlider() {
		const carouselOne = document.getElementById('carouselOne');

		if(carouselOne) {
			carouselOne.addEventListener('slid.bs.carousel', function () {
				const activeItem = this.querySelector(".active");
				document.querySelector(".js-testimonial-img").src = activeItem.getAttribute("data-js-testimonial-img")
			})
		}

	} // testimonialSlider ()

	testimonialSlider()

/* :: 1.0 Course Preview Video JS */
	function coursePreviewVideo () {
		const coursePreviewModal = document.querySelector(".js-course-preview-modal")
		if(coursePreviewModal) {
			coursePreviewModal.addEventListener("shown.bs.modal", function() {
				this.querySelector(".js-course-preview-video").play();
				this.querySelector(".js-course-preview-video").currentTime = 0;
			});

			coursePreviewModal.addEventListener("hide.bs.modal", function() {
				this.querySelector(".js-course-preview-video").pause();
			});
		}
	} // coursePreviewVideo ()

	coursePreviewVideo()

/* :: 1.0 Style Switcher JS */
	function styleSwitcherToggle () {
		const styleSwitcher = document.querySelector(".js-style-switcher");
		const styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

		styleSwitcherToggler.addEventListener("click", function(){
			styleSwitcher.classList.toggle("open");
			this.querySelector("i").classList.toggle("fa-times");
			this.querySelector("i").classList.toggle("fa-cog");
		});
	} // styleSwitcherToggle ()

	styleSwitcherToggle()
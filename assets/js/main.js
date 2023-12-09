
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

/* :: 1.0 Theme Colors JS */
	function themeColors() {
		const colorStyle = document.querySelector(".js-color-style");
		const themeContainer = document.querySelector(".js-theme-colors");

		themeContainer.addEventListener("click", ({target}) => {
			if(target.classList.contains("js-theme-color-item")) {
				localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
				setColor();
			}
		});

		function setColor() {
			let path = colorStyle.getAttribute("href").split("/");
			path = path.slice(0, path.length - 1)
			colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color")  + ".css");
			
			if(document.querySelector(".js-theme-color-item.active")) {
				document.querySelector(".js-theme-color-item.active").classList.remove("active");
			}

			document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");

		} // setColor ()

		if(localStorage.getItem("color") !== null) {
			//console.log("true")
			setColor()
		} else {
			const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
			document.querySelector("[data-js-theme-color=" + defaultColor + "]").classList.add("active");
			console.log(defaultColor)
		}

	} // themeColors ()

	themeColors()

/* :: 1.0 Theme Dark & Light JS */
	function themeLightDark() {
		const darkModeCheckbox = document.querySelector(".js-dark-mode");

		darkModeCheckbox.addEventListener("click", function() {
			if(this.checked) {
				localStorage.setItem("theme-dark", "true")
			} else {
				localStorage.setItem("theme-dark", "false")
			}
			themeMode()
		})

		function themeMode () {
			if(localStorage.getItem("theme-dark") === "false") {
				document.body.classList.remove("t-dark")
			} else {
				document.body.classList.add("t-dark")
			}
		} // themeMode ()

		if(localStorage.getItem("theme-dark") !== null) {
			themeMode();
		}

		if(document.body.classList.contains("t-dark")) {
			darkModeCheckbox.checked = true;
		}

	} // themeLightDark ()

	themeLightDark()
window.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector(".main-container form");

	form.addEventListener("submit", (event) => {
		event.preventDefault();		
		alert("submitted");
	});
});

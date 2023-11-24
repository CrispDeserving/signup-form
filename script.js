window.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector(".main-container form");
	const inputs = document.querySelectorAll("form input");

	form.addEventListener("submit", submit_form_handler);
	
	for (const input of inputs) {
		input.addEventListener("input", (event) => {
			input_check_if_empty(event.target);
		});	
	}
});

function input_check_if_empty(input) {
	if (input.value === "") {
		input.setCustomValidity("Must not be empty.");
		return true;
	}

	input.setCustomValidity("");
	input.reportValidity();
	return false;
}

function submit_form_handler(event) {
	event.preventDefault();
	
	const form = event.target;
	const inputs = form.querySelectorAll("li input");

	for (const input of inputs) {
		if (input_check_if_empty(input)) {
			input.reportValidity();
			break;
		}
	}
}

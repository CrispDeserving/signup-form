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
		let input_invalid = false;
		if (input_check_if_empty(input)) {
			input_invalid = true;
		}

		if (input.validity.typeMismatch) {
			let type_string = "";
			switch (input.type) {
				case "email":
					type_string = "email";
				break;

				case "tel":
					type_string = "number";
				break;
				
				default:
					type_string = "template";
				break;
			}

			console.log("here");
			input.setCustomValidity(`Input does not look like ${type_string}.`);
			input_invalid = true;
		}

		if (input_invalid) {
			input.reportValidity();
			return;
		}
	}

	const password = form.querySelector("#password");
	const password_confirm = form.querySelector("#password-confirm");

	if (password.value !== password_confirm.value) {
		password.setCustomValidity("Passwords must match.");
		password_confirm.setCustomValidity("Passwords must match.");

		password.reportValidity();
		return;
	}

	form.submit();
	alert("Form submitted!");
}

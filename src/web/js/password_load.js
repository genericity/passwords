/**
* Represents the contents of a password file.
**/
class PasswordManager {
	constructor(sections, container) {
		this.sections = sections;
		this.container = container;
	}

	searchFor(str) {
		let hits = false;
		str = str.toLowerCase();
		for (let section of this.sections) {
			// Show any sections with this name.
			if (section.getName().toLowerCase().includes(str)) {
				section.show();
				section.showAll();
				hits = true;
			} else {
				// Only show if there is at least one result in here
				// that matches the string.
				let display = section.searchFor(str);

				if (display) {
					section.show();
					hits = true;
				} else {
					section.hide();
				}
			}
		}
		return hits;
	}
}

// Wrap in an anonymous function to clean up the global namespace.
(() => {
	let card = document.getElementById("card");
	let content_wrapper = card.getElementsByTagName("content")[0];

	let section_names = ["Email", "Misc", "Steam", "reddit", "Work"]
	let sections = [];
	for (let j = 0; j < 5; j++) {
		let objects = [];
		for (let i = 0; i < 5; i++) {
			let pair = new PasswordPair("hello" + Math.round(Math.random() * 10) + "@gmail.com", "examplePassword");
			objects.push(pair);
		}
		let section = new Section(section_names[j], objects);
		let section_obj = section.makeObject();
		content_wrapper.appendChild(section_obj);

		sections.push(section);
	}

	let password_manager = new PasswordManager(sections, content_wrapper);

	let search_box = document.getElementById("search_bar");
	search_box.addEventListener("change", (e) => {password_manager.searchFor(e.srcElement.value)});
	search_box.addEventListener("keyup", (e) => {password_manager.searchFor(e.srcElement.value)});

	// Redirect focus to search bar when Ctrl + F is typed.
	window.addEventListener("keydown", (e) => {
	    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) { 
	        e.preventDefault();
	        document.getElementById('search_bar').focus();
	    }
	});
})();
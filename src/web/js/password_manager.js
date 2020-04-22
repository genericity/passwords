/**
* Represents the contents of a password file.
**/
class PasswordManager {
	constructor(sections, container) {
		this.sections = sections;
		this.container = container;

		this.init();
	}

	init() {
		for (let section of this.sections) {
			this.container.append(section.makeObject());
		}
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
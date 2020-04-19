class Section {
	constructor(name, objects = []) {
		this.name = name;
		this.objects = objects;
		this.element;
	}

	makeObject() {
		let section = document.createElement("section");
		section.className = "type";

		let heading = document.createElement("h3");
		heading.className = "type_header";
		let heading_text = document.createTextNode(this.name);
		heading.appendChild(heading_text);

		section.appendChild(heading);

		for (let obj of this.objects) {
			section.appendChild(obj.makeObject());
		}

		this.element = section;

		return section;
	}

	getName() {
		return this.name;
	}

	show() {
		this.element.classList.add('visible');
		this.element.classList.remove('hidden');
	}

	hide() {
		this.element.classList.remove('visible');
		this.element.classList.add('hidden');
		for (let row of this.objects) {
			row.hide();
		}
	}

	showAll() {
		for (let row of this.objects) {
			row.show();
		}
	}

	hideAll() {
		for (let row of this.objects) {
			row.hide();
		}
	}


	searchFor(str) {
		str = str.toLowerCase();
		let hits = false;
		for (let row of this.objects) {
			if (row.getUsername(true).toLowerCase().includes(str)) {
				hits = true;
				row.show();
			} else {
				row.hide();
			}
		}
		return hits;
	}
}
class Section {
	constructor(name, objects = []) {
		this.name = name;
		this.objects = objects;
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

		return section;
	}
}
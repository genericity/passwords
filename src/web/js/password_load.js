let card = document.getElementById("card");
let content_wrapper = card.getElementsByTagName("content")[0];

for (let j = 0; j < 5; j++) {
	let objects = [];
	for (let i = 0; i < 5; i++) {
		let pair = new PasswordPair("hello" + Math.round(Math.random() * 10) + "@gmail.com", "examplePassword");
		objects.push(pair);
	}
	console.log(objects);
	let section = new Section("Email", objects);
	let section_obj = section.makeObject();
	content_wrapper.appendChild(section_obj);
}
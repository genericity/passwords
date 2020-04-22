// Wrap in an anonymous function to clean up the global namespace.
(async () => {
	let card = document.getElementById("card");
	let content_wrapper = card.getElementsByTagName("content")[0];

	let data = await eel.get_data("test.json")();
	let content = Parser.parse(data);
	let password_manager = new PasswordManager(content, content_wrapper);

	// Searching.
	let search_box = document.getElementById("search_bar");
	search_box.addEventListener("change", (e) => {password_manager.searchFor(e.srcElement.value)});
	search_box.addEventListener("keyup", (e) => {password_manager.searchFor(e.srcElement.value)});
})();
class PasswordPair {
	constructor (encrypted_username, encrypted_password) {
		this.encrypted = {
			'username': encrypted_username,
			'password': encrypted_password
		};
		this.username_obj;
		this.username_input;
		this.password_obj;
		this.password_input;
		this.element;
	}

	getUsername(decrypt = false) {
		return this.encrypted.username;
	}

	getPassword(decrypt = false) {
		return this.encrypted.password;
	}

	makeObject () {
		let row = document.createElement('div');
		row.className = "item_row";

		let hash_dot = document.createElement('div');
		hash_dot.className = "hash_dot " + this.getHashDotColour(this.encrypted.username);
		row.appendChild(hash_dot);

		let item_content = document.createElement('div');
		item_content.className = "item_content";

		// Username.
		let username = document.createElement('div');
		username.className = "username editable";
		let username_text = document.createTextNode(this.getUsername(false));
		username.appendChild(username_text);
		item_content.appendChild(username);
		this.username_obj = username;

		this.username_input = document.createElement('input');
		this.username_input.type = "text";
		this.username_input.className = "username_input hidden";
		item_content.appendChild(this.username_input);

		// Password.
		let password = document.createElement('div');
		password.className = "password spoiler editable";
		let password_text = document.createTextNode(this.getPassword(true));
		password.appendChild(password_text);
		item_content.appendChild(password);
		this.password_obj = password;

		this.password_input = document.createElement('input');
		this.password_input.type = "text";
		this.password_input.className = "password_input spoiler hidden";
		item_content.appendChild(this.password_input);

		row.appendChild(item_content);

		// Chevron.
		let actions = document.createElement('div');
		actions.className = "actions";
		let further_actions = document.createElement('div');
		further_actions.className = "further_actions material-icons";
		let chevron_text = document.createTextNode("chevron_right");
		further_actions.appendChild(chevron_text);
		actions.appendChild(further_actions);
		row.appendChild(actions);

		this.element = row;

		return row;
	}

	getHashDotColour(str) {
		let hash = this.getSimpleHash(str);
		let colours = ["dark_orange", "light_orange", "dark_purple", "light_purple", "dark_blue"];

		// To convert the hashed number to a colour, we just get the last digit and mod it by
		// the length of the colour array.

		let last_digit = Math.abs(hash % 10);
		let colour = colours[last_digit % colours.length];

		return colour;
	}

	/**
	* Very simple hash function for generating a hash from a string.
	**/
	getSimpleHash(str) {
		let hash = 0;
		let i = 0;
		let l = str.length;
		while (i < l) {
			hash = ((hash << 5) - hash + str.charCodeAt(i++)) << 0;
		}
		return hash;
	}

	show() {
		this.element.classList.add('visible');
		this.element.classList.remove('hidden');
	}

	hide() {
		this.element.classList.remove('visible');
		this.element.classList.add('hidden');
	}

	makeEditable(editable) {
		if (editable) {
			this.username_obj.classList.remove('visible');
			this.username_obj.classList.add('hidden');
			this.password_obj.classList.remove('visible');
			this.password_obj.classList.add('hidden');
			this.username_input.classList.add('visible');
			this.username_input.classList.remove('hidden');
			this.password_input.classList.add('visible');
			this.password_input.classList.remove('hidden');

			// Update text.
			this.username_input.value = this.username_obj.innerHTML;
			// TODO - Decrypt first
			this.password_obj.value = this.password_obj.innerHTML;
		} else {
			this.username_obj.classList.add('visible');
			this.username_obj.classList.remove('hidden');
			this.password_obj.classList.add('visible');
			this.password_obj.classList.remove('hidden');
			this.username_input.classList.remove('visible');
			this.username_input.classList.add('hidden');
			this.password_input.classList.remove('visible');
			this.password_input.classList.add('hidden');

			// Update text.
			this.username_obj.innerHTML = this.username_input.value;
			// TODO - Encrypt first
			this.password_obj.innerHTML = this.password_obj.value;
		}
	}

}
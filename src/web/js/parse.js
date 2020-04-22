class Parser {
	constructor () {}
	static parse(raw_content) {
		let content = [];
		for (let s of raw_content) {
			let items = [];
			for (let i of s['items']) {
				let pair = new PasswordPair(i['name'], i['secret']);
				items.push(pair);
			}
			let section = new Section(s['name'], items);
			content.push(section);
		}
		return content;
	}
}
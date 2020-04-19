class Item:
	def __init__(self, name, secret):
		self.name = name
		self.secret = secret

	def get_secret(self):
		return self.secret

	def get_name(self):
		return self.name

	def set_secret(self, secret):
		self.secret = secret

	def set_name(self, name):
		self.name = name

	def get_repr(self):
		return {'name': self.name, 'secret': self.secret}

class Section:
	def __init__(self, name, items):
		self.name = name
		self.items = items

	def get_item(self):
		return self.items

	def get_name(self):
		return self.name

	def set_items(self, items):
		self.items = items

	def set_name(self, name):
		self.name = name

	def get_repr(self):
		return {'name': self.name, 'items': [item.get_repr() for item in self.items]}
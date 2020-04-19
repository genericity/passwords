import io
import json
from item import Item, Section

class FileParser:
	def __init__(self, filename):
		self.filename = filename
		self.raw_content = None
		self.serialized = None
		self.content = None

	def get_raw_content(self):
		if self.raw_content is None:
			with open(filename, 'r') as f:
				self.raw_content = file.readlines()

		return self.raw_content

	def parse(self, raw_content):
		# Password files have a very simple format (for now):
		# - JSON for serialization

		self.serialized = json.loads(raw_content)

		content = []
		for s in self.serialized:
			items = [Item(i.name, i.secret) for i in s.items]
			section = Section(s.name, items)
			content.append(section)

		self.content = content

		return content

	def write(self, serialized_data):
		with open(filename, 'w') as f:
			f.write(json.dumps(serialized_data))
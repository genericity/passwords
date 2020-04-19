import io
import json

class FileParser:
	def __init__(self, filename):
		self.filename = filename
		self.raw_content = None
		self.serialized = None
		self.content = None

	def get_raw_content(self):
		if self.raw_content is None:
			with open(self.filename, 'r') as f:
				self.raw_content = f.read()

		return self.raw_content

	def parse(self, raw_content):
		# Password files have a very simple format (for now):
		# - JSON for serialization

		self.serialized = json.loads(raw_content)

		return self.serialized

	def write(self, serialized_data):
		with open(filename, 'w') as f:
			f.write(json.dumps(serialized_data))
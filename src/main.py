from __future__ import print_function
import eel
import parse

@eel.expose
def get_data(filename):
    new_file = parse.FileParser(filename)
    raw_content = new_file.get_raw_content()
    parsed = new_file.parse(raw_content)
    return parsed

# Set web files folder
eel.init('web')

# Start the application on the loading screen page.
eel.start('passwords.html', size=(600, 800))
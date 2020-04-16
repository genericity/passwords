from __future__ import print_function   # For Py2/3 compatibility
import eel

# Set web files folder
eel.init('web')

# Start the application on the loading screen page.
eel.start('load.html', size=(600, 800))
// Wrap in an anonymous function to clean up the global namespace.
(async () => {
	// Redirect focus to search bar when Ctrl + F is typed.
	window.addEventListener("keydown", (e) => {
	    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) { 
	        e.preventDefault();
	        document.getElementById('search_bar').focus();
	    }
	});
})();
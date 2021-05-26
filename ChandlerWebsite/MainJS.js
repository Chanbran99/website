function openTabs(events, tabEvent) {
	var i,  tabItems, tabLink
	
	tabLink = document.getElementsByClassName("tabItems");
	for (i = 0; i < tabLink.length; i++) {
		tabLink[i].style.display = "none";
	}
	
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	
	document.getElementById(tabEvent).style.display = "block";
	events.currentTarget.className += " active";
}
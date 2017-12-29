function getUrlParameter(param) {
	// get current page url as a string
	var url_string = window.location.href;
	// conver url_string to a URL object
	var url = new URL(url_string)
	// find param value
	var param_value = url.searchParams.get(param);
	
	return param_value;
}
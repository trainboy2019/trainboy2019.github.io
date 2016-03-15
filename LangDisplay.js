var lang = "Unknown";
	if (window.navigator.language.indexOf("en-us") != -1) lang="American English";
	if (window.navigator.language.indexOf("en-US") != -1) lang="American English";
	if (window.navigator.language.indexOf("en-gb") != -1) lang="British English";
	if (window.navigator.language.indexOf("en-GB") != -1) lang="British English";
	document.write(lang);
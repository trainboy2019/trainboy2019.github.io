console.log(navigator);
		console.log(navigator.userAgent);
		var OSName = "Unknown";
		var iOS1 = "Hi";
		var iOS2 = "hi";
		var iOS3 = "Hello";
		var isAndroid ="false"
		var isMobile=""
		if (window.navigator.userAgent.indexOf("Macintosh") != -1) OSName="Mac";
		if (window.navigator.userAgent.indexOf("Android") != -1) OSName="Android";
		if (window.navigator.userAgent.indexOf("Windows NT") != -1) OSName="Windows";
		if (window.navigator.userAgent.indexOf("Linux") != -1) OSName="Linux";
		if (window.navigator.userAgent.indexOf("Maemo;") != -1) OSName="Linux";
		//Easter Egg for Mason
		if (window.navigator.userAgent.indexOf("Nexus 5X Build MMB29M") != -1) OSName="Mason";
		if (window.navigator.userAgent.indexOf("Mobile; rv:26.0") != -1) OSName="Firefox Phone";
		if (window.navigator.userAgent.indexOf("Tablet; rv:26.0") != -1) OSName="Firefox Tablet";
		if (window.navigator.userAgent.indexOf("iPhone") != -1) OSName="iPhone";
		if (window.navigator.userAgent.indexOf("iPod") != -1) OSName="iPod";
		if (window.navigator.userAgent.indexOf("iPad") != -1) OSName="iPad";
		if (window.navigator.userAgent.indexOf("BlackBerry;") != -1) OSName="BlackBerry";
		if (window.navigator.userAgent.indexOf("Windows Phone") != -1) OSName="Windows Phone";
		if (window.navigator.userAgent.indexOf("GoogleTV") != -1) OSName="Google TV";

		if (window.navigator.userAgent.indexOf("Nintendo 3DS") != -1) OSName="Nintendo 3DS";

		if (window.navigator.userAgent.indexOf("New Nintendo 3DS") != -1) OSName="New Nintendo 3DS";

		if (window.navigator.userAgent.indexOf("Nintendo Wii") != -1) OSName="Nintendo Wii";

		if (window.navigator.userAgent.indexOf("Nintendo WiiU") != -1) OSName="Nintendo Wii U";

		if (window.navigator.userAgent.indexOf("PlayStation 4") != -1) OSName="PlayStation 4";

		if (window.navigator.userAgent.indexOf("PLAYSTATION 3") != -1) OSName="PlayStation 3";

		if (window.navigator.userAgent.indexOf("Xbox") != -1) OSName="XBox 360";

		if (window.navigator.userAgent.indexOf("OUYA") != -1) OSName="OUYA";

		if (window.navigator.userAgent.indexOf("PlayStation Vita") != -1) OSName="PlayStation Vita";

		if (window.navigator.userAgent.indexOf("PlayStation Portable") != -1) OSName="PlayStation Portable";

		if (window.navigator.userAgent.indexOf("Viera") != -1) OSName="Panasonic Viera";

		if (window.navigator.userAgent.indexOf("X11; Linux armv7l") != -1) OSName="Vizio Co-Star";

		if (window.navigator.userAgent.indexOf("Apple TV") != -1) OSName="Apple TV";

		if (window.navigator.userAgent.indexOf("CrKey") != -1) OSName="Google Chromecast";

		if (window.navigator.userAgent.indexOf("Windows NT 10.0; Win64; x64; Xbox; Xbox One") != -1) OSName="XBox One";

		if (window.navigator.userAgent.indexOf("Nintendo DSi") != -1) OSName="Nintendo DSi";

		if (window.navigator.userAgent.indexOf("X11; CrOS") != -1) OSName="Chrome OS";
			
	document.write("Hello, "+OSName+" user!")
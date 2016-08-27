
function swapStyleSheet(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet);
}


console.log(navigator);
		console.log(navigator.userAgent);
		var OSName = "stylesheetRed.css";
		var iOS1 = "Hi";
		var iOS2 = "hi";
		var iOS3 = "Hello";
		var isAndroid ="false"
		var isMobile=""
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10") != -1) swapStyleSheet('stylesheetMac.css');



		// if( ua.indexOf("Android") >= 0 )
		// {
  // 			var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
  // 			if (androidversion < 2.3)
  // 			{
  //     			OSName="Android Phone Version "+androidversion;
  // 			}
		// }
		
		

		if (window.navigator.userAgent.indexOf("Android") != -1) swapStyleSheet('stylesheetAndroid.css');
		


		//if (window.navigator.userAgent.match(/Android/i) ) OSName="Android"
		if (window.navigator.userAgent.indexOf("Windows NT") != -1) swapStyleSheet('stylesheetWindows.css');
		if (window.navigator.userAgent.indexOf("X11; Linux") != -1) swapStyleSheet('stylesheetLinux.css');
//		if (window.navigator.userAgent.indexOf("X11; Linux x86_64; rv:10.0") != -1) OSName="Linux";
//		if (window.navigator.userAgent.indexOf("X11; Linux i686 on x86_64; rv:10.0") != -1) OSName="Linux";
		if (window.navigator.userAgent.indexOf("Maemo;") != -1) OSName="Linux";
		if (window.navigator.userAgent.indexOf("rv:26.0") != -1) swapStyleSheet('stylesheetFirefox.css');



if (window.navigator.userAgent.indexOf("iPad;") != -1) swapStyleSheet('stylesheetiOS.css');

if (window.navigator.userAgent.indexOf("iPod;") != -1) swapStyleSheet('stylesheetiOS.css');
if (window.navigator.userAgent.indexOf("iPhone;") != -1) swapStyleSheet('stylesheetiOS.css');








		if (window.navigator.userAgent.indexOf("BlackBerry;") != -1) swapStyleSheet('stylesheetBlackberry.css');

		if (window.navigator.userAgent.indexOf("Windows Phone") != -1) swapStyleSheet('stylesheetWindowsPhone.css');

		if (window.navigator.userAgent.indexOf("Nintendo 3DS") != -1) swapStyleSheet('stylesheet3ds.css');

		if (window.navigator.userAgent.indexOf("New Nintendo 3DS") != -1) swapStyleSheet('stylesheet3ds.css');

		if (window.navigator.userAgent.indexOf("Nintendo Wii") != -1) swapStyleSheet('stylesheetWii.css');

		if (window.navigator.userAgent.indexOf("Nintendo WiiU") != -1) swapStyleSheet('stylesheetWiiU.css');

		if (window.navigator.userAgent.indexOf("PlayStation 4") != -1) swapStyleSheet('stylesheetPS4.css');

		if (window.navigator.userAgent.indexOf("PLAYSTATION 3") != -1) swapStyleSheet('stylesheetPS3.css');

		if (window.navigator.userAgent.indexOf("Xbox") != -1) swapStyleSheet('stylesheetXbox.css');

		if (window.navigator.userAgent.indexOf("PlayStation Vita") != -1) swapStyleSheet('stylesheetPSV.css');

		if (window.navigator.userAgent.indexOf("PlayStation Portable") != -1) swapStyleSheet('stylesheetPSP.css');

		if (window.navigator.userAgent.indexOf("Apple TV") != -1) swapStyleSheet('stylesheetiOS.css');

		if (window.navigator.userAgent.indexOf("Windows NT 10.0; Win64; x64; Xbox; Xbox One") != -1) swapStyleSheet('stylesheetXbox.css');

		if (window.navigator.userAgent.indexOf("Nintendo DSi") != -1) swapStyleSheet('stylesheetDSi.css');

		if (window.navigator.userAgent.indexOf("X11; CrOS") != -1) swapStyleSheet('stylesheetChrome.css');
			
	document.write(OSName)
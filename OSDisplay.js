console.log(navigator);
		console.log(navigator.userAgent);
		var OSName = "Unknown";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10_11") != -1) OSName="Mac OS X El Capitan";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10_10") != -1) OSName="Mac OS X Yosemite";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10_9") != -1) OSName="Mac OS X Mavericks";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10_8") != -1) OSName="Mac OS X Mountain Lion";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10_7") != -1) OSName="Mac OS X Lion";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10_6") != -1) OSName="Mac OS X Snow Leopard";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10_5") != -1) OSName="Mac OS X Leopard";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10_4") != -1) OSName="Mac OS X Tiger";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10_3") != -1) OSName="Mac OS X Panther";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10_2") != -1) OSName="Mac OS X Jaguar";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10_1") != -1) OSName="Mac OS X Puma";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10_0") != -1) OSName="Mac OS X Cheetah";

		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10.11") != -1) OSName="Mac OS X El Capitan";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10.10") != -1) OSName="Mac OS X Yosemite";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10.9") != -1) OSName="Mac OS X Mavericks";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10.8") != -1) OSName="Mac OS X Mountain Lion";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10.7") != -1) OSName="Mac OS X Lion";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10.6") != -1) OSName="Mac OS X Snow Leopard";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10.5") != -1) OSName="Mac OS X Leopard";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10.4") != -1) OSName="Mac OS X Tiger";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10.3") != -1) OSName="Mac OS X Panther";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10.2") != -1) OSName="Mac OS X Jaguar";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10.1") != -1) OSName="Mac OS X Puma";
		if (window.navigator.userAgent.indexOf("Macintosh; Intel Mac OS X 10.0") != -1) OSName="Mac OS X Cheetah";


		if (window.navigator.userAgent.indexOf("windows nt 5.1") != -1) OSName="Windows XP";
		if (window.navigator.userAgent.indexOf("windows nt 6.0") != -1) OSName="Windows Vista";
		if (window.navigator.userAgent.indexOf("windows nt 6.1") != -1) OSName="Windows 7";
		if (window.navigator.userAgent.indexOf("windows nt 6.2") != -1) OSName="Windows 8";
		if (window.navigator.userAgent.indexOf("windows nt 6.3") != -1) OSName="Windows 8.1";
		if (window.navigator.userAgent.indexOf("windows nt 10.0") != -1) OSName="Windows 10";
		if (window.navigator.userAgent.indexOf("X11; Linux i686; rv:10.0)") != -1) OSName="Linux";
		if (window.navigator.userAgent.indexOf("X11; Linux x86_64; rv:10.0") != -1) OSName="Linux";
		if (window.navigator.userAgent.indexOf("X11; Linux i686 on x86_64; rv:10.0") != -1) OSName="Linux";
		if (window.navigator.userAgent.indexOf("Maemo; Linux armv7l; rv:10.0") != -1) OSName="Linux";
		if (window.navigator.userAgent.indexOf("Android; Mobile; rv:30.0") != -1) OSName="Android Phone";
		if (window.navigator.userAgent.indexOf("Android; Tablet; rv:30.0") != -1) OSName="Android Tablet";
		if (window.navigator.userAgent.indexOf("Mobile; rv:26.0") != -1) OSName="Firefox Phone";
		if (window.navigator.userAgent.indexOf("Tablet; rv:26.0") != -1) OSName="Firefox Tablet";
		
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1_0 like Mac OS X") != -1) OSName="iPad iOS 1.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1_1 like Mac OS X") != -1) OSName="iPad iOS 1.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1_2 like Mac OS X") != -1) OSName="iPad iOS 1.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1_3 like Mac OS X") != -1) OSName="iPad iOS 1.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1_4 like Mac OS X") != -1) OSName="iPad iOS 1.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1_5 like Mac OS X") != -1) OSName="iPad iOS 1.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1_6 like Mac OS X") != -1) OSName="iPad iOS 1.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1_7 like Mac OS X") != -1) OSName="iPad iOS 1.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1_8 like Mac OS X") != -1) OSName="iPad iOS 1.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1_9 like Mac OS X") != -1) OSName="iPad iOS 1.9";


		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2_0 like Mac OS X") != -1) OSName="iPad iOS 2.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2_1 like Mac OS X") != -1) OSName="iPad iOS 2.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2_2 like Mac OS X") != -1) OSName="iPad iOS 2.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2_3 like Mac OS X") != -1) OSName="iPad iOS 2.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2_4 like Mac OS X") != -1) OSName="iPad iOS 2.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2_5 like Mac OS X") != -1) OSName="iPad iOS 2.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2_6 like Mac OS X") != -1) OSName="iPad iOS 2.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2_7 like Mac OS X") != -1) OSName="iPad iOS 2.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2_8 like Mac OS X") != -1) OSName="iPad iOS 2.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2_9 like Mac OS X") != -1) OSName="iPad iOS 2.9";

		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3_0 like Mac OS X") != -1) OSName="iPad iOS 3.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3_1 like Mac OS X") != -1) OSName="iPad iOS 3.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3_2 like Mac OS X") != -1) OSName="iPad iOS 3.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3_3 like Mac OS X") != -1) OSName="iPad iOS 3.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3_4 like Mac OS X") != -1) OSName="iPad iOS 3.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3_5 like Mac OS X") != -1) OSName="iPad iOS 3.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3_6 like Mac OS X") != -1) OSName="iPad iOS 3.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3_7 like Mac OS X") != -1) OSName="iPad iOS 3.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3_8 like Mac OS X") != -1) OSName="iPad iOS 3.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3_9 like Mac OS X") != -1) OSName="iPad iOS 3.9";

		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4_0 like Mac OS X") != -1) OSName="iPad iOS 4.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4_1 like Mac OS X") != -1) OSName="iPad iOS 4.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4_2 like Mac OS X") != -1) OSName="iPad iOS 4.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4_3 like Mac OS X") != -1) OSName="iPad iOS 4.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4_4 like Mac OS X") != -1) OSName="iPad iOS 4.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4_5 like Mac OS X") != -1) OSName="iPad iOS 4.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4_6 like Mac OS X") != -1) OSName="iPad iOS 4.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4_7 like Mac OS X") != -1) OSName="iPad iOS 4.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4_8 like Mac OS X") != -1) OSName="iPad iOS 4.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4_9 like Mac OS X") != -1) OSName="iPad iOS 4.9";

		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5_0 like Mac OS X") != -1) OSName="iPad iOS 5.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5_1 like Mac OS X") != -1) OSName="iPad iOS 5.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5_2 like Mac OS X") != -1) OSName="iPad iOS 5.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5_3 like Mac OS X") != -1) OSName="iPad iOS 5.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5_4 like Mac OS X") != -1) OSName="iPad iOS 5.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5_5 like Mac OS X") != -1) OSName="iPad iOS 5.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5_6 like Mac OS X") != -1) OSName="iPad iOS 5.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5_7 like Mac OS X") != -1) OSName="iPad iOS 5.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5_8 like Mac OS X") != -1) OSName="iPad iOS 5.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5_9 like Mac OS X") != -1) OSName="iPad iOS 5.9";

		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6_0 like Mac OS X") != -1) OSName="iPad iOS 6.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6_1 like Mac OS X") != -1) OSName="iPad iOS 6.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6_2 like Mac OS X") != -1) OSName="iPad iOS 6.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6_3 like Mac OS X") != -1) OSName="iPad iOS 6.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6_4 like Mac OS X") != -1) OSName="iPad iOS 6.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6_5 like Mac OS X") != -1) OSName="iPad iOS 6.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6_6 like Mac OS X") != -1) OSName="iPad iOS 6.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6_7 like Mac OS X") != -1) OSName="iPad iOS 6.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6_8 like Mac OS X") != -1) OSName="iPad iOS 6.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6_9 like Mac OS X") != -1) OSName="iPad iOS 6.9";

		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7_0 like Mac OS X") != -1) OSName="iPad iOS 7.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7_1 like Mac OS X") != -1) OSName="iPad iOS 7.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7_2 like Mac OS X") != -1) OSName="iPad iOS 7.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7_3 like Mac OS X") != -1) OSName="iPad iOS 7.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7_4 like Mac OS X") != -1) OSName="iPad iOS 7.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7_5 like Mac OS X") != -1) OSName="iPad iOS 7.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7_6 like Mac OS X") != -1) OSName="iPad iOS 7.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7_7 like Mac OS X") != -1) OSName="iPad iOS 7.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7_8 like Mac OS X") != -1) OSName="iPad iOS 7.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7_9 like Mac OS X") != -1) OSName="iPad iOS 7.9";

		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8_0 like Mac OS X") != -1) OSName="iPad iOS 8.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8_1 like Mac OS X") != -1) OSName="iPad iOS 8.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8_2 like Mac OS X") != -1) OSName="iPad iOS 8.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8_3 like Mac OS X") != -1) OSName="iPad iOS 8.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8_4 like Mac OS X") != -1) OSName="iPad iOS 8.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8_5 like Mac OS X") != -1) OSName="iPad iOS 8.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8_6 like Mac OS X") != -1) OSName="iPad iOS 8.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8_7 like Mac OS X") != -1) OSName="iPad iOS 8.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8_8 like Mac OS X") != -1) OSName="iPad iOS 8.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8_9 like Mac OS X") != -1) OSName="iPad iOS 8.9";

		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9_0 like Mac OS X") != -1) OSName="iPad iOS 9.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9_1 like Mac OS X") != -1) OSName="iPad iOS 9.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9_2 like Mac OS X") != -1) OSName="iPad iOS 9.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9_3 like Mac OS X") != -1) OSName="iPad iOS 9.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9_4 like Mac OS X") != -1) OSName="iPad iOS 9.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9_5 like Mac OS X") != -1) OSName="iPad iOS 9.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9_6 like Mac OS X") != -1) OSName="iPad iOS 9.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9_7 like Mac OS X") != -1) OSName="iPad iOS 9.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9_8 like Mac OS X") != -1) OSName="iPad iOS 9.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9_9 like Mac OS X") != -1) OSName="iPad iOS 9.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1_0 like Mac OS X") != -1) OSName="iPod iOS 1.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1_1 like Mac OS X") != -1) OSName="iPod iOS 1.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1_2 like Mac OS X") != -1) OSName="iPod iOS 1.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1_3 like Mac OS X") != -1) OSName="iPod iOS 1.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1_4 like Mac OS X") != -1) OSName="iPod iOS 1.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1_5 like Mac OS X") != -1) OSName="iPod iOS 1.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1_6 like Mac OS X") != -1) OSName="iPod iOS 1.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1_7 like Mac OS X") != -1) OSName="iPod iOS 1.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1_8 like Mac OS X") != -1) OSName="iPod iOS 1.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1_9 like Mac OS X") != -1) OSName="iPod iOS 1.9";


		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2_0 like Mac OS X") != -1) OSName="iPod iOS 2.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2_1 like Mac OS X") != -1) OSName="iPod iOS 2.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2_2 like Mac OS X") != -1) OSName="iPod iOS 2.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2_3 like Mac OS X") != -1) OSName="iPod iOS 2.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2_4 like Mac OS X") != -1) OSName="iPod iOS 2.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2_5 like Mac OS X") != -1) OSName="iPod iOS 2.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2_6 like Mac OS X") != -1) OSName="iPod iOS 2.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2_7 like Mac OS X") != -1) OSName="iPod iOS 2.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2_8 like Mac OS X") != -1) OSName="iPod iOS 2.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2_9 like Mac OS X") != -1) OSName="iPod iOS 2.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3_0 like Mac OS X") != -1) OSName="iPod iOS 3.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3_1 like Mac OS X") != -1) OSName="iPod iOS 3.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3_2 like Mac OS X") != -1) OSName="iPod iOS 3.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3_3 like Mac OS X") != -1) OSName="iPod iOS 3.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3_4 like Mac OS X") != -1) OSName="iPod iOS 3.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3_5 like Mac OS X") != -1) OSName="iPod iOS 3.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3_6 like Mac OS X") != -1) OSName="iPod iOS 3.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3_7 like Mac OS X") != -1) OSName="iPod iOS 3.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3_8 like Mac OS X") != -1) OSName="iPod iOS 3.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3_9 like Mac OS X") != -1) OSName="iPod iOS 3.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4_0 like Mac OS X") != -1) OSName="iPod iOS 4.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4_1 like Mac OS X") != -1) OSName="iPod iOS 4.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4_2 like Mac OS X") != -1) OSName="iPod iOS 4.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4_3 like Mac OS X") != -1) OSName="iPod iOS 4.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4_4 like Mac OS X") != -1) OSName="iPod iOS 4.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4_5 like Mac OS X") != -1) OSName="iPod iOS 4.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4_6 like Mac OS X") != -1) OSName="iPod iOS 4.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4_7 like Mac OS X") != -1) OSName="iPod iOS 4.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4_8 like Mac OS X") != -1) OSName="iPod iOS 4.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4_9 like Mac OS X") != -1) OSName="iPod iOS 4.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5_0 like Mac OS X") != -1) OSName="iPod iOS 5.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5_1 like Mac OS X") != -1) OSName="iPod iOS 5.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5_2 like Mac OS X") != -1) OSName="iPod iOS 5.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5_3 like Mac OS X") != -1) OSName="iPod iOS 5.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5_4 like Mac OS X") != -1) OSName="iPod iOS 5.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5_5 like Mac OS X") != -1) OSName="iPod iOS 5.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5_6 like Mac OS X") != -1) OSName="iPod iOS 5.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5_7 like Mac OS X") != -1) OSName="iPod iOS 5.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5_8 like Mac OS X") != -1) OSName="iPod iOS 5.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5_9 like Mac OS X") != -1) OSName="iPod iOS 5.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6_0 like Mac OS X") != -1) OSName="iPod iOS 6.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6_1 like Mac OS X") != -1) OSName="iPod iOS 6.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6_2 like Mac OS X") != -1) OSName="iPod iOS 6.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6_3 like Mac OS X") != -1) OSName="iPod iOS 6.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6_4 like Mac OS X") != -1) OSName="iPod iOS 6.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6_5 like Mac OS X") != -1) OSName="iPod iOS 6.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6_6 like Mac OS X") != -1) OSName="iPod iOS 6.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6_7 like Mac OS X") != -1) OSName="iPod iOS 6.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6_8 like Mac OS X") != -1) OSName="iPod iOS 6.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6_9 like Mac OS X") != -1) OSName="iPod iOS 6.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7_0 like Mac OS X") != -1) OSName="iPod iOS 7.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7_1 like Mac OS X") != -1) OSName="iPod iOS 7.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7_2 like Mac OS X") != -1) OSName="iPod iOS 7.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7_3 like Mac OS X") != -1) OSName="iPod iOS 7.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7_4 like Mac OS X") != -1) OSName="iPod iOS 7.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7_5 like Mac OS X") != -1) OSName="iPod iOS 7.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7_6 like Mac OS X") != -1) OSName="iPod iOS 7.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7_7 like Mac OS X") != -1) OSName="iPod iOS 7.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7_8 like Mac OS X") != -1) OSName="iPod iOS 7.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7_9 like Mac OS X") != -1) OSName="iPod iOS 7.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8_0 like Mac OS X") != -1) OSName="iPod iOS 8.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8_1 like Mac OS X") != -1) OSName="iPod iOS 8.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8_2 like Mac OS X") != -1) OSName="iPod iOS 8.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8_3 like Mac OS X") != -1) OSName="iPod iOS 8.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8_4 like Mac OS X") != -1) OSName="iPod iOS 8.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8_5 like Mac OS X") != -1) OSName="iPod iOS 8.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8_6 like Mac OS X") != -1) OSName="iPod iOS 8.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8_7 like Mac OS X") != -1) OSName="iPod iOS 8.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8_8 like Mac OS X") != -1) OSName="iPod iOS 8.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8_9 like Mac OS X") != -1) OSName="iPod iOS 8.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9_0 like Mac OS X") != -1) OSName="iPod iOS 9.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9_1 like Mac OS X") != -1) OSName="iPod iOS 9.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9_2 like Mac OS X") != -1) OSName="iPod iOS 9.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9_3 like Mac OS X") != -1) OSName="iPod iOS 9.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9_4 like Mac OS X") != -1) OSName="iPod iOS 9.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9_5 like Mac OS X") != -1) OSName="iPod iOS 9.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9_6 like Mac OS X") != -1) OSName="iPod iOS 9.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9_7 like Mac OS X") != -1) OSName="iPod iOS 9.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9_8 like Mac OS X") != -1) OSName="iPod iOS 9.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9_9 like Mac OS X") != -1) OSName="iPod iOS 9.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1_0 like Mac OS X") != -1) OSName="iPhone iOS 1.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1_1 like Mac OS X") != -1) OSName="iPhone iOS 1.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1_2 like Mac OS X") != -1) OSName="iPhone iOS 1.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1_3 like Mac OS X") != -1) OSName="iPhone iOS 1.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1_4 like Mac OS X") != -1) OSName="iPhone iOS 1.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1_5 like Mac OS X") != -1) OSName="iPhone iOS 1.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1_6 like Mac OS X") != -1) OSName="iPhone iOS 1.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1_7 like Mac OS X") != -1) OSName="iPhone iOS 1.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1_8 like Mac OS X") != -1) OSName="iPhone iOS 1.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1_9 like Mac OS X") != -1) OSName="iPhone iOS 1.9";


		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2_0 like Mac OS X") != -1) OSName="iPhone iOS 2.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2_1 like Mac OS X") != -1) OSName="iPhone iOS 2.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2_2 like Mac OS X") != -1) OSName="iPhone iOS 2.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2_3 like Mac OS X") != -1) OSName="iPhone iOS 2.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2_4 like Mac OS X") != -1) OSName="iPhone iOS 2.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2_5 like Mac OS X") != -1) OSName="iPhone iOS 2.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2_6 like Mac OS X") != -1) OSName="iPhone iOS 2.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2_7 like Mac OS X") != -1) OSName="iPhone iOS 2.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2_8 like Mac OS X") != -1) OSName="iPhone iOS 2.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2_9 like Mac OS X") != -1) OSName="iPhone iOS 2.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3_0 like Mac OS X") != -1) OSName="iPhone iOS 3.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3_1 like Mac OS X") != -1) OSName="iPhone iOS 3.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3_2 like Mac OS X") != -1) OSName="iPhone iOS 3.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3_3 like Mac OS X") != -1) OSName="iPhone iOS 3.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3_4 like Mac OS X") != -1) OSName="iPhone iOS 3.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3_5 like Mac OS X") != -1) OSName="iPhone iOS 3.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3_6 like Mac OS X") != -1) OSName="iPhone iOS 3.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3_7 like Mac OS X") != -1) OSName="iPhone iOS 3.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3_8 like Mac OS X") != -1) OSName="iPhone iOS 3.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3_9 like Mac OS X") != -1) OSName="iPhone iOS 3.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4_0 like Mac OS X") != -1) OSName="iPhone iOS 4.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4_1 like Mac OS X") != -1) OSName="iPhone iOS 4.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4_2 like Mac OS X") != -1) OSName="iPhone iOS 4.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4_3 like Mac OS X") != -1) OSName="iPhone iOS 4.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4_4 like Mac OS X") != -1) OSName="iPhone iOS 4.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4_5 like Mac OS X") != -1) OSName="iPhone iOS 4.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4_6 like Mac OS X") != -1) OSName="iPhone iOS 4.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4_7 like Mac OS X") != -1) OSName="iPhone iOS 4.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4_8 like Mac OS X") != -1) OSName="iPhone iOS 4.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4_9 like Mac OS X") != -1) OSName="iPhone iOS 4.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5_0 like Mac OS X") != -1) OSName="iPhone iOS 5.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5_1 like Mac OS X") != -1) OSName="iPhone iOS 5.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5_2 like Mac OS X") != -1) OSName="iPhone iOS 5.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5_3 like Mac OS X") != -1) OSName="iPhone iOS 5.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5_4 like Mac OS X") != -1) OSName="iPhone iOS 5.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5_5 like Mac OS X") != -1) OSName="iPhone iOS 5.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5_6 like Mac OS X") != -1) OSName="iPhone iOS 5.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5_7 like Mac OS X") != -1) OSName="iPhone iOS 5.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5_8 like Mac OS X") != -1) OSName="iPhone iOS 5.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5_9 like Mac OS X") != -1) OSName="iPhone iOS 5.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6_0 like Mac OS X") != -1) OSName="iPhone iOS 6.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6_1 like Mac OS X") != -1) OSName="iPhone iOS 6.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6_2 like Mac OS X") != -1) OSName="iPhone iOS 6.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6_3 like Mac OS X") != -1) OSName="iPhone iOS 6.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6_4 like Mac OS X") != -1) OSName="iPhone iOS 6.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6_5 like Mac OS X") != -1) OSName="iPhone iOS 6.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6_6 like Mac OS X") != -1) OSName="iPhone iOS 6.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6_7 like Mac OS X") != -1) OSName="iPhone iOS 6.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6_8 like Mac OS X") != -1) OSName="iPhone iOS 6.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6_9 like Mac OS X") != -1) OSName="iPhone iOS 6.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7_0 like Mac OS X") != -1) OSName="iPhone iOS 7.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7_1 like Mac OS X") != -1) OSName="iPhone iOS 7.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7_2 like Mac OS X") != -1) OSName="iPhone iOS 7.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7_3 like Mac OS X") != -1) OSName="iPhone iOS 7.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7_4 like Mac OS X") != -1) OSName="iPhone iOS 7.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7_5 like Mac OS X") != -1) OSName="iPhone iOS 7.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7_6 like Mac OS X") != -1) OSName="iPhone iOS 7.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7_7 like Mac OS X") != -1) OSName="iPhone iOS 7.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7_8 like Mac OS X") != -1) OSName="iPhone iOS 7.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7_9 like Mac OS X") != -1) OSName="iPhone iOS 7.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8_0 like Mac OS X") != -1) OSName="iPhone iOS 8.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8_1 like Mac OS X") != -1) OSName="iPhone iOS 8.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8_2 like Mac OS X") != -1) OSName="iPhone iOS 8.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8_3 like Mac OS X") != -1) OSName="iPhone iOS 8.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8_4 like Mac OS X") != -1) OSName="iPhone iOS 8.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8_5 like Mac OS X") != -1) OSName="iPhone iOS 8.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8_6 like Mac OS X") != -1) OSName="iPhone iOS 8.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8_7 like Mac OS X") != -1) OSName="iPhone iOS 8.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8_8 like Mac OS X") != -1) OSName="iPhone iOS 8.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8_9 like Mac OS X") != -1) OSName="iPhone iOS 8.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9_0 like Mac OS X") != -1) OSName="iPhone iOS 9.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9_1 like Mac OS X") != -1) OSName="iPhone iOS 9.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9_2 like Mac OS X") != -1) OSName="iPhone iOS 9.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9_3 like Mac OS X") != -1) OSName="iPhone iOS 9.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9_4 like Mac OS X") != -1) OSName="iPhone iOS 9.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9_5 like Mac OS X") != -1) OSName="iPhone iOS 9.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9_6 like Mac OS X") != -1) OSName="iPhone iOS 9.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9_7 like Mac OS X") != -1) OSName="iPhone iOS 9.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9_8 like Mac OS X") != -1) OSName="iPhone iOS 9.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9_9 like Mac OS X") != -1) OSName="iPhone iOS 9.9";










		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1.0 like Mac OS X") != -1) OSName="iPad iOS 1.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1.1 like Mac OS X") != -1) OSName="iPad iOS 1.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1.2 like Mac OS X") != -1) OSName="iPad iOS 1.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1.3 like Mac OS X") != -1) OSName="iPad iOS 1.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1.4 like Mac OS X") != -1) OSName="iPad iOS 1.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1.5 like Mac OS X") != -1) OSName="iPad iOS 1.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1.6 like Mac OS X") != -1) OSName="iPad iOS 1.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1.7 like Mac OS X") != -1) OSName="iPad iOS 1.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1.8 like Mac OS X") != -1) OSName="iPad iOS 1.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 1.9 like Mac OS X") != -1) OSName="iPad iOS 1.9";


		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2.0 like Mac OS X") != -1) OSName="iPad iOS 2.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2.1 like Mac OS X") != -1) OSName="iPad iOS 2.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2.2 like Mac OS X") != -1) OSName="iPad iOS 2.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2.3 like Mac OS X") != -1) OSName="iPad iOS 2.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2.4 like Mac OS X") != -1) OSName="iPad iOS 2.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2.5 like Mac OS X") != -1) OSName="iPad iOS 2.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2.6 like Mac OS X") != -1) OSName="iPad iOS 2.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2.7 like Mac OS X") != -1) OSName="iPad iOS 2.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2.8 like Mac OS X") != -1) OSName="iPad iOS 2.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 2.9 like Mac OS X") != -1) OSName="iPad iOS 2.9";

		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3.0 like Mac OS X") != -1) OSName="iPad iOS 3.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3.1 like Mac OS X") != -1) OSName="iPad iOS 3.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3.2 like Mac OS X") != -1) OSName="iPad iOS 3.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3.3 like Mac OS X") != -1) OSName="iPad iOS 3.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3.4 like Mac OS X") != -1) OSName="iPad iOS 3.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3.5 like Mac OS X") != -1) OSName="iPad iOS 3.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3.6 like Mac OS X") != -1) OSName="iPad iOS 3.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3.7 like Mac OS X") != -1) OSName="iPad iOS 3.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3.8 like Mac OS X") != -1) OSName="iPad iOS 3.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 3.9 like Mac OS X") != -1) OSName="iPad iOS 3.9";

		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4.0 like Mac OS X") != -1) OSName="iPad iOS 4.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4.1 like Mac OS X") != -1) OSName="iPad iOS 4.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4.2 like Mac OS X") != -1) OSName="iPad iOS 4.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4.3 like Mac OS X") != -1) OSName="iPad iOS 4.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4.4 like Mac OS X") != -1) OSName="iPad iOS 4.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4.5 like Mac OS X") != -1) OSName="iPad iOS 4.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4.6 like Mac OS X") != -1) OSName="iPad iOS 4.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4.7 like Mac OS X") != -1) OSName="iPad iOS 4.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4.8 like Mac OS X") != -1) OSName="iPad iOS 4.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 4.9 like Mac OS X") != -1) OSName="iPad iOS 4.9";

		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5.0 like Mac OS X") != -1) OSName="iPad iOS 5.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5.1 like Mac OS X") != -1) OSName="iPad iOS 5.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5.2 like Mac OS X") != -1) OSName="iPad iOS 5.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5.3 like Mac OS X") != -1) OSName="iPad iOS 5.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5.4 like Mac OS X") != -1) OSName="iPad iOS 5.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5.5 like Mac OS X") != -1) OSName="iPad iOS 5.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5.6 like Mac OS X") != -1) OSName="iPad iOS 5.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5.7 like Mac OS X") != -1) OSName="iPad iOS 5.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5.8 like Mac OS X") != -1) OSName="iPad iOS 5.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 5.9 like Mac OS X") != -1) OSName="iPad iOS 5.9";

		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6.0 like Mac OS X") != -1) OSName="iPad iOS 6.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6.1 like Mac OS X") != -1) OSName="iPad iOS 6.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6.2 like Mac OS X") != -1) OSName="iPad iOS 6.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6.3 like Mac OS X") != -1) OSName="iPad iOS 6.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6.4 like Mac OS X") != -1) OSName="iPad iOS 6.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6.5 like Mac OS X") != -1) OSName="iPad iOS 6.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6.6 like Mac OS X") != -1) OSName="iPad iOS 6.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6.7 like Mac OS X") != -1) OSName="iPad iOS 6.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6.8 like Mac OS X") != -1) OSName="iPad iOS 6.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 6.9 like Mac OS X") != -1) OSName="iPad iOS 6.9";

		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7.0 like Mac OS X") != -1) OSName="iPad iOS 7.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7.1 like Mac OS X") != -1) OSName="iPad iOS 7.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7.2 like Mac OS X") != -1) OSName="iPad iOS 7.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7.3 like Mac OS X") != -1) OSName="iPad iOS 7.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7.4 like Mac OS X") != -1) OSName="iPad iOS 7.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7.5 like Mac OS X") != -1) OSName="iPad iOS 7.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7.6 like Mac OS X") != -1) OSName="iPad iOS 7.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7.7 like Mac OS X") != -1) OSName="iPad iOS 7.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7.8 like Mac OS X") != -1) OSName="iPad iOS 7.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 7.9 like Mac OS X") != -1) OSName="iPad iOS 7.9";

		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8.0 like Mac OS X") != -1) OSName="iPad iOS 8.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8.1 like Mac OS X") != -1) OSName="iPad iOS 8.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8.2 like Mac OS X") != -1) OSName="iPad iOS 8.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8.3 like Mac OS X") != -1) OSName="iPad iOS 8.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8.4 like Mac OS X") != -1) OSName="iPad iOS 8.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8.5 like Mac OS X") != -1) OSName="iPad iOS 8.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8.6 like Mac OS X") != -1) OSName="iPad iOS 8.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8.7 like Mac OS X") != -1) OSName="iPad iOS 8.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8.8 like Mac OS X") != -1) OSName="iPad iOS 8.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 8.9 like Mac OS X") != -1) OSName="iPad iOS 8.9";

		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9.0 like Mac OS X") != -1) OSName="iPad iOS 9.0";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9.1 like Mac OS X") != -1) OSName="iPad iOS 9.1";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9.2 like Mac OS X") != -1) OSName="iPad iOS 9.2";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9.3 like Mac OS X") != -1) OSName="iPad iOS 9.3";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9.4 like Mac OS X") != -1) OSName="iPad iOS 9.4";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9.5 like Mac OS X") != -1) OSName="iPad iOS 9.5";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9.6 like Mac OS X") != -1) OSName="iPad iOS 9.6";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9.7 like Mac OS X") != -1) OSName="iPad iOS 9.7";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9.8 like Mac OS X") != -1) OSName="iPad iOS 9.8";
		if (window.navigator.userAgent.indexOf("iPad; CPU iPad OS 9.9 like Mac OS X") != -1) OSName="iPad iOS 9.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1.0 like Mac OS X") != -1) OSName="iPod iOS 1.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1.1 like Mac OS X") != -1) OSName="iPod iOS 1.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1.2 like Mac OS X") != -1) OSName="iPod iOS 1.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1.3 like Mac OS X") != -1) OSName="iPod iOS 1.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1.4 like Mac OS X") != -1) OSName="iPod iOS 1.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1.5 like Mac OS X") != -1) OSName="iPod iOS 1.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1.6 like Mac OS X") != -1) OSName="iPod iOS 1.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1.7 like Mac OS X") != -1) OSName="iPod iOS 1.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1.8 like Mac OS X") != -1) OSName="iPod iOS 1.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 1.9 like Mac OS X") != -1) OSName="iPod iOS 1.9";


		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2.0 like Mac OS X") != -1) OSName="iPod iOS 2.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2.1 like Mac OS X") != -1) OSName="iPod iOS 2.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2.2 like Mac OS X") != -1) OSName="iPod iOS 2.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2.3 like Mac OS X") != -1) OSName="iPod iOS 2.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2.4 like Mac OS X") != -1) OSName="iPod iOS 2.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2.5 like Mac OS X") != -1) OSName="iPod iOS 2.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2.6 like Mac OS X") != -1) OSName="iPod iOS 2.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2.7 like Mac OS X") != -1) OSName="iPod iOS 2.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2.8 like Mac OS X") != -1) OSName="iPod iOS 2.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 2.9 like Mac OS X") != -1) OSName="iPod iOS 2.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3.0 like Mac OS X") != -1) OSName="iPod iOS 3.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3.1 like Mac OS X") != -1) OSName="iPod iOS 3.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3.2 like Mac OS X") != -1) OSName="iPod iOS 3.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3.3 like Mac OS X") != -1) OSName="iPod iOS 3.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3.4 like Mac OS X") != -1) OSName="iPod iOS 3.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3.5 like Mac OS X") != -1) OSName="iPod iOS 3.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3.6 like Mac OS X") != -1) OSName="iPod iOS 3.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3.7 like Mac OS X") != -1) OSName="iPod iOS 3.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3.8 like Mac OS X") != -1) OSName="iPod iOS 3.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 3.9 like Mac OS X") != -1) OSName="iPod iOS 3.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4.0 like Mac OS X") != -1) OSName="iPod iOS 4.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4.1 like Mac OS X") != -1) OSName="iPod iOS 4.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4.2 like Mac OS X") != -1) OSName="iPod iOS 4.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4.3 like Mac OS X") != -1) OSName="iPod iOS 4.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4.4 like Mac OS X") != -1) OSName="iPod iOS 4.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4.5 like Mac OS X") != -1) OSName="iPod iOS 4.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4.6 like Mac OS X") != -1) OSName="iPod iOS 4.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4.7 like Mac OS X") != -1) OSName="iPod iOS 4.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4.8 like Mac OS X") != -1) OSName="iPod iOS 4.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 4.9 like Mac OS X") != -1) OSName="iPod iOS 4.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5.0 like Mac OS X") != -1) OSName="iPod iOS 5.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5.1 like Mac OS X") != -1) OSName="iPod iOS 5.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5.2 like Mac OS X") != -1) OSName="iPod iOS 5.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5.3 like Mac OS X") != -1) OSName="iPod iOS 5.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5.4 like Mac OS X") != -1) OSName="iPod iOS 5.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5.5 like Mac OS X") != -1) OSName="iPod iOS 5.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5.6 like Mac OS X") != -1) OSName="iPod iOS 5.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5.7 like Mac OS X") != -1) OSName="iPod iOS 5.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5.8 like Mac OS X") != -1) OSName="iPod iOS 5.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 5.9 like Mac OS X") != -1) OSName="iPod iOS 5.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6.0 like Mac OS X") != -1) OSName="iPod iOS 6.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6.1 like Mac OS X") != -1) OSName="iPod iOS 6.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6.2 like Mac OS X") != -1) OSName="iPod iOS 6.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6.3 like Mac OS X") != -1) OSName="iPod iOS 6.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6.4 like Mac OS X") != -1) OSName="iPod iOS 6.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6.5 like Mac OS X") != -1) OSName="iPod iOS 6.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6.6 like Mac OS X") != -1) OSName="iPod iOS 6.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6.7 like Mac OS X") != -1) OSName="iPod iOS 6.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6.8 like Mac OS X") != -1) OSName="iPod iOS 6.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 6.9 like Mac OS X") != -1) OSName="iPod iOS 6.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7.0 like Mac OS X") != -1) OSName="iPod iOS 7.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7.1 like Mac OS X") != -1) OSName="iPod iOS 7.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7.2 like Mac OS X") != -1) OSName="iPod iOS 7.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7.3 like Mac OS X") != -1) OSName="iPod iOS 7.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7.4 like Mac OS X") != -1) OSName="iPod iOS 7.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7.5 like Mac OS X") != -1) OSName="iPod iOS 7.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7.6 like Mac OS X") != -1) OSName="iPod iOS 7.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7.7 like Mac OS X") != -1) OSName="iPod iOS 7.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7.8 like Mac OS X") != -1) OSName="iPod iOS 7.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 7.9 like Mac OS X") != -1) OSName="iPod iOS 7.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8.0 like Mac OS X") != -1) OSName="iPod iOS 8.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8.1 like Mac OS X") != -1) OSName="iPod iOS 8.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8.2 like Mac OS X") != -1) OSName="iPod iOS 8.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8.3 like Mac OS X") != -1) OSName="iPod iOS 8.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8.4 like Mac OS X") != -1) OSName="iPod iOS 8.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8.5 like Mac OS X") != -1) OSName="iPod iOS 8.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8.6 like Mac OS X") != -1) OSName="iPod iOS 8.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8.7 like Mac OS X") != -1) OSName="iPod iOS 8.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8.8 like Mac OS X") != -1) OSName="iPod iOS 8.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 8.9 like Mac OS X") != -1) OSName="iPod iOS 8.9";

		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9.0 like Mac OS X") != -1) OSName="iPod iOS 9.0";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9.1 like Mac OS X") != -1) OSName="iPod iOS 9.1";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9.2 like Mac OS X") != -1) OSName="iPod iOS 9.2";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9.3 like Mac OS X") != -1) OSName="iPod iOS 9.3";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9.4 like Mac OS X") != -1) OSName="iPod iOS 9.4";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9.5 like Mac OS X") != -1) OSName="iPod iOS 9.5";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9.6 like Mac OS X") != -1) OSName="iPod iOS 9.6";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9.7 like Mac OS X") != -1) OSName="iPod iOS 9.7";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9.8 like Mac OS X") != -1) OSName="iPod iOS 9.8";
		if (window.navigator.userAgent.indexOf("iPod; CPU iPod OS 9.9 like Mac OS X") != -1) OSName="iPod iOS 9.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1.0 like Mac OS X") != -1) OSName="iPhone iOS 1.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1.1 like Mac OS X") != -1) OSName="iPhone iOS 1.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1.2 like Mac OS X") != -1) OSName="iPhone iOS 1.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1.3 like Mac OS X") != -1) OSName="iPhone iOS 1.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1.4 like Mac OS X") != -1) OSName="iPhone iOS 1.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1.5 like Mac OS X") != -1) OSName="iPhone iOS 1.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1.6 like Mac OS X") != -1) OSName="iPhone iOS 1.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1.7 like Mac OS X") != -1) OSName="iPhone iOS 1.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1.8 like Mac OS X") != -1) OSName="iPhone iOS 1.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 1.9 like Mac OS X") != -1) OSName="iPhone iOS 1.9";


		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2.0 like Mac OS X") != -1) OSName="iPhone iOS 2.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2.1 like Mac OS X") != -1) OSName="iPhone iOS 2.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2.2 like Mac OS X") != -1) OSName="iPhone iOS 2.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2.3 like Mac OS X") != -1) OSName="iPhone iOS 2.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2.4 like Mac OS X") != -1) OSName="iPhone iOS 2.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2.5 like Mac OS X") != -1) OSName="iPhone iOS 2.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2.6 like Mac OS X") != -1) OSName="iPhone iOS 2.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2.7 like Mac OS X") != -1) OSName="iPhone iOS 2.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2.8 like Mac OS X") != -1) OSName="iPhone iOS 2.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 2.9 like Mac OS X") != -1) OSName="iPhone iOS 2.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3.0 like Mac OS X") != -1) OSName="iPhone iOS 3.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3.1 like Mac OS X") != -1) OSName="iPhone iOS 3.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3.2 like Mac OS X") != -1) OSName="iPhone iOS 3.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3.3 like Mac OS X") != -1) OSName="iPhone iOS 3.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3.4 like Mac OS X") != -1) OSName="iPhone iOS 3.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3.5 like Mac OS X") != -1) OSName="iPhone iOS 3.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3.6 like Mac OS X") != -1) OSName="iPhone iOS 3.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3.7 like Mac OS X") != -1) OSName="iPhone iOS 3.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3.8 like Mac OS X") != -1) OSName="iPhone iOS 3.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 3.9 like Mac OS X") != -1) OSName="iPhone iOS 3.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4.0 like Mac OS X") != -1) OSName="iPhone iOS 4.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4.1 like Mac OS X") != -1) OSName="iPhone iOS 4.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4.2 like Mac OS X") != -1) OSName="iPhone iOS 4.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4.3 like Mac OS X") != -1) OSName="iPhone iOS 4.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4.4 like Mac OS X") != -1) OSName="iPhone iOS 4.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4.5 like Mac OS X") != -1) OSName="iPhone iOS 4.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4.6 like Mac OS X") != -1) OSName="iPhone iOS 4.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4.7 like Mac OS X") != -1) OSName="iPhone iOS 4.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4.8 like Mac OS X") != -1) OSName="iPhone iOS 4.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 4.9 like Mac OS X") != -1) OSName="iPhone iOS 4.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5.0 like Mac OS X") != -1) OSName="iPhone iOS 5.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5.1 like Mac OS X") != -1) OSName="iPhone iOS 5.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5.2 like Mac OS X") != -1) OSName="iPhone iOS 5.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5.3 like Mac OS X") != -1) OSName="iPhone iOS 5.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5.4 like Mac OS X") != -1) OSName="iPhone iOS 5.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5.5 like Mac OS X") != -1) OSName="iPhone iOS 5.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5.6 like Mac OS X") != -1) OSName="iPhone iOS 5.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5.7 like Mac OS X") != -1) OSName="iPhone iOS 5.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5.8 like Mac OS X") != -1) OSName="iPhone iOS 5.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 5.9 like Mac OS X") != -1) OSName="iPhone iOS 5.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6.0 like Mac OS X") != -1) OSName="iPhone iOS 6.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6.1 like Mac OS X") != -1) OSName="iPhone iOS 6.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6.2 like Mac OS X") != -1) OSName="iPhone iOS 6.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6.3 like Mac OS X") != -1) OSName="iPhone iOS 6.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6.4 like Mac OS X") != -1) OSName="iPhone iOS 6.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6.5 like Mac OS X") != -1) OSName="iPhone iOS 6.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6.6 like Mac OS X") != -1) OSName="iPhone iOS 6.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6.7 like Mac OS X") != -1) OSName="iPhone iOS 6.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6.8 like Mac OS X") != -1) OSName="iPhone iOS 6.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 6.9 like Mac OS X") != -1) OSName="iPhone iOS 6.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7.0 like Mac OS X") != -1) OSName="iPhone iOS 7.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7.1 like Mac OS X") != -1) OSName="iPhone iOS 7.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7.2 like Mac OS X") != -1) OSName="iPhone iOS 7.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7.3 like Mac OS X") != -1) OSName="iPhone iOS 7.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7.4 like Mac OS X") != -1) OSName="iPhone iOS 7.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7.5 like Mac OS X") != -1) OSName="iPhone iOS 7.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7.6 like Mac OS X") != -1) OSName="iPhone iOS 7.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7.7 like Mac OS X") != -1) OSName="iPhone iOS 7.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7.8 like Mac OS X") != -1) OSName="iPhone iOS 7.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 7.9 like Mac OS X") != -1) OSName="iPhone iOS 7.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8.0 like Mac OS X") != -1) OSName="iPhone iOS 8.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8.1 like Mac OS X") != -1) OSName="iPhone iOS 8.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8.2 like Mac OS X") != -1) OSName="iPhone iOS 8.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8.3 like Mac OS X") != -1) OSName="iPhone iOS 8.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8.4 like Mac OS X") != -1) OSName="iPhone iOS 8.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8.5 like Mac OS X") != -1) OSName="iPhone iOS 8.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8.6 like Mac OS X") != -1) OSName="iPhone iOS 8.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8.7 like Mac OS X") != -1) OSName="iPhone iOS 8.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8.8 like Mac OS X") != -1) OSName="iPhone iOS 8.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 8.9 like Mac OS X") != -1) OSName="iPhone iOS 8.9";

		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9.0 like Mac OS X") != -1) OSName="iPhone iOS 9.0";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9.1 like Mac OS X") != -1) OSName="iPhone iOS 9.1";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9.2 like Mac OS X") != -1) OSName="iPhone iOS 9.2";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9.3 like Mac OS X") != -1) OSName="iPhone iOS 9.3";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9.4 like Mac OS X") != -1) OSName="iPhone iOS 9.4";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9.5 like Mac OS X") != -1) OSName="iPhone iOS 9.5";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9.6 like Mac OS X") != -1) OSName="iPhone iOS 9.6";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9.7 like Mac OS X") != -1) OSName="iPhone iOS 9.7";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9.8 like Mac OS X") != -1) OSName="iPhone iOS 9.8";
		if (window.navigator.userAgent.indexOf("iPhone; CPU iPhone OS 9.9 like Mac OS X") != -1) OSName="iPhone iOS 9.9";
			
	document.write(OSName)
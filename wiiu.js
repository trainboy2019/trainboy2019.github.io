// window.addEventListener("load", function(event) {
//   if (window.wiiu) {
//     setInterval(function() {
//       var state = window.wiiu.gamepad.update();

//       // process the current state
//     }, 20);
//   } else {
//     // browser is not a Wii U
//   }
// }, false);



	// var LeftStickLeft = document.getElementById("LeftStickLeft");
 //    LeftStickLeft.style.color = "red";
 //    var LeftStickRight = document.getElementById("LeftStickRight");
 //    LeftStickRight.style.color = "red";
 //    var LeftStickUp = document.getElementById("LeftStickUp");
 //    LeftStickUp.style.color = "red";
 //    var LeftStickDown = document.getElementById("LeftStickDown");
 //    LeftStickDown.style.color = "red";
 //    var RightStickLeft = document.getElementById("RightStickLeft");
 //    RightStickLeft.style.color = "red";
 //    var RightStickRight = document.getElementById("RightStickRight");
 //    RightStickRight.style.color = "red";
 //    var RightStickUp = document.getElementById("RightStickUp");
 //    RightStickUp.style.color = "red";
 //    var RightStickDown = document.getElementById("RightStickDown");
 //    RightStickDown.style.color = "red";
 //    var LeftStickClick = document.getElementById("LeftStickClick");
 //    LeftStickClick.style.color = "red";
 //    var RightStickClick = document.getElementById("RightStickClick");
 //    RightStickClick.style.color = "red";
 //    var TV = document.getElementById("TV");
 //    TV.style.color = "red";
 //    var A = document.getElementById("A");
 //    A.style.color = "red";
 //    var B = document.getElementById("B");
 //    B.style.color = "red";
 //    var X = document.getElementById("X");
 //    X.style.color = "red";
 //    var Y = document.getElementById("Y");
 //    Y.style.color = "red";
 //    var Left = document.getElementById("Left");
 //    Left.style.color = "red";
 //    var Right = document.getElementById("Right");
 //    Right.style.color = "red";
 //    var Up = document.getElementById("Up");
 //    Up.style.color = "red";
 //    var Down = document.getElementById("Down");
 //    Down.style.color = "red";
 //    var ZL = document.getElementById("ZL");
 //    ZL.style.color = "red";
 //    var ZR = document.getElementById("ZR");
 //    ZR.style.color = "red";
 //    var L = document.getElementById("L");
 //    L.style.color = "red";
 //    var R = document.getElementById("R");
 //    R.style.color = "red";
 //    var Plus = document.getElementById("Plus");
 //    Plus.style.color = "red";
 //    var Minus = document.getElementById("Minus");
 //    Minus.style.color = "red";
 //    var Home = document.getElementById("Home");
 //    Home.style.color = "red";








function reset(){
	var LeftStickLeft = document.getElementById("LeftStickLeft");
    
    var LeftStickRight = document.getElementById("LeftStickRight");
    
    var LeftStickUp = document.getElementById("LeftStickUp");
    
    var LeftStickDown = document.getElementById("LeftStickDown");
    
    var RightStickLeft = document.getElementById("RightStickLeft");
    
    var RightStickRight = document.getElementById("RightStickRight");
    
    var RightStickUp = document.getElementById("RightStickUp");
    
    var RightStickDown = document.getElementById("RightStickDown");
    
    var LeftStickClick = document.getElementById("LeftStickClick");
    
    var RightStickClick = document.getElementById("RightStickClick");
    
    var TV = document.getElementById("TV");
    
    var A = document.getElementById("A");
    
    var B = document.getElementById("B");
    
    var X = document.getElementById("X");
    
    var Y = document.getElementById("Y");
    
    var Left = document.getElementById("Left");
    
    var Right = document.getElementById("Right");
    
    var Up = document.getElementById("Up");
    
    var Down = document.getElementById("Down");
    
    var ZL = document.getElementById("ZL");
    
    var ZR = document.getElementById("ZR");
    
    var L = document.getElementById("L");
    
    var R = document.getElementById("R");
    
    var Plus = document.getElementById("Plus");
    
    var Minus = document.getElementById("Minus");
    
    var Home = document.getElementById("Home");



    LeftStickLeft.style.color = "black";
			LeftStickRight.style.color = "black";
			LeftStickUp.style.color = "black";
			LeftStickDown.style.color = "black";
			RightStickLeft.style.color = "black";
			RightStickRight.style.color = "black";
			RightStickUp.style.color = "black";
			RightStickDown.style.color = "black";
			LeftStickClick.style.color = "black";
			RightStickClick.style.color = "black";
			TV.style.color = "black";
			A.style.color = "black";
			B.style.color = "black";
			X.style.color = "black";
			Y.style.color = "black";
			Left.style.color = "black";
			Right.style.color = "black";
			Up.style.color = "black";
			Down.style.color = "black";
			ZL.style.color = "black";
			ZR.style.color = "black";
			L.style.color = "black";
			R.style.color = "black";
			Plus.style.color = "black";
			Minus.style.color = "black";
			Home.style.color = "black";
			document.body.style.backgroundColor = "white";

}







if (navigator.appVersion.indexOf("WiiU")!=-1) // = WiiU Browser
	{
	var LeftStickLeft = document.getElementById("LeftStickLeft");
    
    var LeftStickRight = document.getElementById("LeftStickRight");
    
    var LeftStickUp = document.getElementById("LeftStickUp");
    
    var LeftStickDown = document.getElementById("LeftStickDown");
    
    var RightStickLeft = document.getElementById("RightStickLeft");
    
    var RightStickRight = document.getElementById("RightStickRight");
    
    var RightStickUp = document.getElementById("RightStickUp");
    
    var RightStickDown = document.getElementById("RightStickDown");
    
    var LeftStickClick = document.getElementById("LeftStickClick");
    
    var RightStickClick = document.getElementById("RightStickClick");
    
    var TV = document.getElementById("TV");
    
    var A = document.getElementById("A");
    
    var B = document.getElementById("B");
    
    var X = document.getElementById("X");
    
    var Y = document.getElementById("Y");
    
    var Left = document.getElementById("Left");
    
    var Right = document.getElementById("Right");
    
    var Up = document.getElementById("Up");
    
    var Down = document.getElementById("Down");
    
    var ZL = document.getElementById("ZL");
    
    var ZR = document.getElementById("ZR");
    
    var L = document.getElementById("L");
    
    var R = document.getElementById("R");
    
    var Plus = document.getElementById("Plus");
    
    var Minus = document.getElementById("Minus");
    
    var Home = document.getElementById("Home");



   //  LeftStickLeft.style.color = "black";
			// LeftStickRight.style.color = "black";
			// LeftStickUp.style.color = "black";
			// LeftStickDown.style.color = "black";
			// RightStickLeft.style.color = "black";
			// RightStickRight.style.color = "black";
			// RightStickUp.style.color = "black";
			// RightStickDown.style.color = "black";
			// LeftStickClick.style.color = "black";
			// RightStickClick.style.color = "black";
			// TV.style.color = "black";
			// A.style.color = "black";
			// B.style.color = "black";
			// X.style.color = "black";
			// Y.style.color = "black";
			// Left.style.color = "black";
			// Right.style.color = "black";
			// Up.style.color = "black";
			// Down.style.color = "black";
			// ZL.style.color = "black";
			// ZR.style.color = "black";
			// L.style.color = "black";
			// R.style.color = "black";
			// Plus.style.color = "black";
			// Minus.style.color = "black";
			// Home.style.color = "black";
    


		wiiu.gamepad.update();	// Register all values from GamePad.
			LeftStickLeft.style.color = "black";
			LeftStickRight.style.color = "black";
			LeftStickUp.style.color = "black";
			LeftStickDown.style.color = "black";
			RightStickLeft.style.color = "black";
			RightStickRight.style.color = "black";
			RightStickUp.style.color = "black";
			RightStickDown.style.color = "black";
			LeftStickClick.style.color = "black";
			RightStickClick.style.color = "black";
			TV.style.color = "black";
			A.style.color = "black";
			B.style.color = "black";
			X.style.color = "black";
			Y.style.color = "black";
			Left.style.color = "black";
			Right.style.color = "black";
			Up.style.color = "black";
			Down.style.color = "black";
			ZL.style.color = "black";
			ZR.style.color = "black";
			L.style.color = "black";
			R.style.color = "black";
			Plus.style.color = "black";
			Minus.style.color = "black";
			Home.style.color = "black";

		if(wiiu.gamepad.hold == 0x40000000) // LeftStickLeft
			LeftStickLeft.style.color = "cyan";
		if(wiiu.gamepad.hold == 0x20000000) // LeftStickRight
			LeftStickRight.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x10000000) // LeftStickUp
LeftStickUp.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x08000000) // LeftStickDown
LeftStickDown.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x04000000) // RightStickLeft
RightStickLeft.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x02000000) // RightStickRight
RightStickRight.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x01000000) // RightStickUp
RightStickUp.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00800000) // RightStickDown
RightStickDown.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00400000) // LeftStickClick
LeftStickClick.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00200000) // RightStickClick
RightStickClick.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00100000) // TV
TV.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00080000) // A
A.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00040000) // B
B.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00020000) // X
X.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00010000) // Y
Y.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00008000) // Left
Left.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00004000) // Right
Right.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00002000) // Up
Up.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00001000) // Down
Down.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00000800) // ZL
ZL.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00000400) // ZR
ZR.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00000200) // L
L.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00000100) // R
R.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00000080) // Plus
Plus.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00000040) // Minus
Minus.style.color = "cyan";
			
		if(wiiu.gamepad.hold == 0x00000020) // Home
Home.style.color = "cyan";
		if(wiiu.gamepad.tpTouch == 1) // TouchOn
			document.body.style.backgroundColor = "yellow";
		if(wiiu.gamepad.tpTouch == 0) // TouchOff
			document.body.style.backgroundColor = "white";
	}
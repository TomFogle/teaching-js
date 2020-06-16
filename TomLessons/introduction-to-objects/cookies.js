/*
Trays of chocolate chip cookies.

Each tray has x number of cookies.

Each cookie has y number of chocolate chips. 

Add/remove chocolate chips. 
*/
//////////////////////////////////////////////

// Cookie class
	//# of chocolate chips

///////////////////////Cookie Class with x number of chips in cookie
class Cookie{
	chips; 
	constructor(numChips){
		this.chips = numChips; 
	}
	printChips(){
		console.log("This cookie has " + this.chips + " chips.");
	}
	// e.g. cookie1.addChips(5); 
	addChips(x){
		this.chips = this.chips + x;
	}
	removeChips(y){
		this.chips = this.chips-y;
	}
}
///////////////////////////Tray Class with x number of cookies on tray
class Tray{
	tray = [];
	constructor(){}
	printNumCookies(){
		console.log("This tray has "+ tray.length +" cookies.")
	}
	addChipsToCookie(cookieNum, numChips){
		// tray[cookieNum-1].chips = tray[cookieNum-1].chips + numChips;
		// //This takes cookie within a tray, then adds chips to the cookie
		tray[cookieNum-1].addChips(numChips);
	}
	removeChipsFromCookie(cookieNum, numChips){
		tray[cookieNum-1].removeChips(numChips);
	}
}
/////////////////////////////New Cookies
cookie1 = new Cookie(5);
cookie2 = new Cookie(3);
cookie3 = new Cookie(1);
cookie4 = new Cookie(4);
cookie5 = new Cookie(2);
/////////////////////////Cookies pushed onto new Tray with tray array inside of it.
myTray = new Tray();
///////// tray = [];

myTray.tray.push(cookie1, cookie2, cookie3, cookie4, cookie5);
//////////////add/remove chips from a cookie
/* e.g. cookie1.addChips(x);
		cookie1.removeChips(x);
		myTray.addChipstoCookie(Cookie number, number of chips);
		myTray.removeChipsFromCooke(Cookie number, number of chips);










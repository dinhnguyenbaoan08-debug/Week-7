
function showTip () {
	var sidTip = document.getElementById("sidTip"); 		//obtain access to the HTML tool tip element using id "sidTip" and link it to a variable named sidTip
	
	sidTip.style.display = "inline";  										//display the HTML tool tip element sidTip by changing the value of its CSS property "display" to "inline"
}

function hideTip () {  														//this function hides the tool tip
	var sidTip = document.getElementById("sidTip"); 		//obtain access to the HTML tool tip element using id "sidTip" and link it to a variable named sidTip
	
	sidTip.style.display = "none";  																					//first, get access to the tool tip HTML eleme																						//then, hide the tool tip HTML element by changing its CSS property "display" to "none"
}

function init () {																	/* the init function links functions to appropriate events of corresponding HTML elements */
	var sid = document.getElementById("sid"); 
																							/* create a variable named sid */
	sid.onmouseover = showTip;																						/* get access to the HTML element by its id "sid" and link it to sid */
	sid.onmouseout = hideTip;																							/* link function showTip to the onmouseover event of sid */
	
	sid.onfocus= showTip;																								/* link function showTip to the onfocus event of sid  */
	sid.onblur = hideTip;																								/* link function hideTip to the onblur event of sid  */
}
window.onload = init;
																							/* link function init to the onload event of the window so that function init will be called when the page is loaded */\\\\\\\\
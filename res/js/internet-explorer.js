// Detect if Internet explorer
function GetIEVersion() {
	var sAgent = window.navigator.userAgent;
	var Idx = sAgent.indexOf("MSIE");

	if (Idx > 0)
		return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
	else if (!!navigator.userAgent.match(/Trident\/7\./))
		return 11;
	else
		return 0; //It is not IE
}

var ver = GetIEVersion();
if (ver > 0 && ver < 12)
	alert("Unsupported browser!");//TBD
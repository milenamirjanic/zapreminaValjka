var input1 = document.getElementById("pp");
var input2 = document.getElementById("H");
var select1 = document.getElementById("ppJ");
var select2 = document.getElementById("HJ");


function konvertor(ucm,broj) {
	switch(ucm) {
	  case 'mm':
	    return broj/10;
	    break;
	  case 'dm':
	    return broj*10;
	    break;
	    case 'm':
	    return broj*100;
	    break;
	  default:
	    return broj;
	}
}


function Izracunaj()
{
	function poluprecnik()
	{
		var r=input1.value;
		var ucm=select1.value;
		return konvertor(ucm,r);
	}

	function visina()
	{
		var H=input2.value;
		var ucm=select2.value;
		return konvertor(ucm,H);
	}

	if (true) {

	}
		else {

		}

	var resenje = poluprecnik() * poluprecnik();
	resenje= resenje * visina();


	document.getElementById("resenje").innerHTML= "<p>Zapremina valjka je:<br> <b>"+resenje+"cm<sup>3</sup></b>.</p>";
}

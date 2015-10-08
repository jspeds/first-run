/*
 * fs - from station
 * ft - fare type
 * sn - station number
 * sa - station array
 * aesn - airport express station number
 * aesa - airport express station array
 * aeflag - 1 : display ae fare, 0 : display mtr fare
 */
(function(){
	fs=73;
	ft=0;
	sn="2 111 28 1 37 96 18 12 98 11 55 80 74 69 30 82 51 36 101 39 64 4 115 83 13 8 40 22 15 57 19 21 38 76 9 78 117 102 20 65 6 53 14 31 41 52 16 32 70 34 81 97 68 17 35 7 99 75 26 119 54 33 72 100 67 24 73 29 118 49 50 3 42 114 25 120 43 71 27 10 103 5 48 116 23";
	sa=sn.split(" ");
	aesn="44 45 46 47 56";
	aesa=aesn.split(" ");
	aeflag=0;
	sf(fs);
})();
function sf(fromstation){
	aeflag=0;
	fs=fromstation;
	document.getElementById(47).innerHTML='na';
	document.getElementById(56).innerHTML='na';
	for (i=0;i<sa.length;i++){
		var f=fromstation;
		var t=sa[i];
		if (t==f){
			document.getElementById(t).innerHTML="x";
		} else {
			if (f>t){var tmp=t;t=f;f=tmp;}
			t-=f;
			if (ff[f][t] != undefined){
				var val=ff[f][t].split(" ");
				document.getElementById(sa[i]).innerHTML=to1dec(val[ft]);
			}
		}
	}
}
function saef(fromstation){
	aeflag=1;
	fs=fromstation;
	for (i=0;i<sa.length;i++){
		document.getElementById(sa[i]).innerHTML="na";
	}
	for (i=0;i<aesa.length;i++){
		var f=fromstation;
		var t=aesa[i];
		if (t==f){
			var ts=t;
			if (ts==46) ts=42;
			if (ts==45) ts=40;
			if (ts==44) ts=39;
			document.getElementById(ts).innerHTML="x";
		} else {
			if (f>t){var tmp=t;t=f;f=tmp;}
			t-=f;
			if (ff[f][t] != undefined){
				var val=ff[f][t].split(" ");
				var ts=aesa[i];
				if (ts==46) ts=42;
				if (ts==45) ts=40;
				if (ts==44) ts=39;
				if ((ft==1)||(ft==4)||(ft==5)||(ft==7)){
					document.getElementById(ts).innerHTML="na";
				} else {
					document.getElementById(ts).innerHTML=to1dec(val[ft]);
				}
			}
		}
	}
}
function to1dec(num){
	return parseFloat(num).toFixed(1).toString();
}
function setft(sel){
	ft=parseInt(sel.value);
	if (aeflag == 0){
	  sf(fs);
	} else {
	  saef(fs);
	}
}

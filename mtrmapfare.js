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
	var sn="2 111 28 1 37 96 18 12 98 11 55 80 74 69 30 82 51 36 101 39 64 4 115 83 13 8 40 22 15 57 19 21 38 76 9 78 117 102 20 65 6 53 14 31 41 52 16 32 70 34 81 97 68 17 35 7 99 75 26 119 54 33 72 100 67 24 73 29 118 49 50 3 42 114 25 120 43 71 27 10 103 5 48 116 23";
	var aesn="44 45 46 47 56";
// from station default to sn: 73 
	ns.fs=73;
	ns.ft=0;
	ns.aeflag=0;
	ns.sa=sn.split(" ");
	ns.aesa=aesn.split(" ");

	ns.sf=function(fromstation){
		ns.aeflag=0;
		ns.fs=fromstation;
		document.getElementById(47).innerHTML='na';
		document.getElementById(56).innerHTML='na';
		for (var i=0,j=ns.sa.length;i<j;i++){
			var f=fromstation;
			var t=ns.sa[i];
			if (t==f){
				document.getElementById(t).innerHTML="x";
			} else {
				if (f>t){var tmp=t;t=f;f=tmp;}
				t-=f;
				if (ns.ff[f][t] != undefined){
					var val=ns.ff[f][t].split(" ");
					document.getElementById(ns.sa[i]).innerHTML=val[ns.ft];
				}
			}
		}
	}
	
	ns.saef=function(fromstation){
		ns.aeflag=1;
		ns.fs=fromstation;
		for (var i=0,j=ns.sa.length;i<j;i++){
			document.getElementById(ns.sa[i]).innerHTML="na";
		}
		for (var i=0,j=ns.aesa.length;i<j;i++){
			var f=fromstation;
			var t=ns.aesa[i];
			if (t==f){
				var ts=t;
				if (ts==46) ts=42;
				if (ts==45) ts=40;
				if (ts==44) ts=39;
				document.getElementById(ts).innerHTML="x";
			} else {
				if (f>t){var tmp=t;t=f;f=tmp;}
				t-=f;
				if (ns.ff[f][t] != undefined){
					var ts=ns.aesa[i];
					if (ts==46) ts=42;
					if (ts==45) ts=40;
					if (ts==44) ts=39;
					if ((ns.ft==1)||(ns.ft==4)||(ns.ft==5)||(ns.ft==7)){
						document.getElementById(ts).innerHTML="na";
					} else {
						var val=ns.ff[f][t].split(" ");
						document.getElementById(ts).innerHTML=val[ns.ft];
					}
				}
			}
		}
	}

	ns.setft=function(sel){
		ns.ft=parseInt(sel.value);
		ns.aeflag ?  ns.saef(ns.fs) : ns.sf(ns.fs);
	}

	ns.sf(ns.fs);
})();

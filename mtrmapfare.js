/*
 * fs - from station
 * ft - fare type
 * sn - station number
 * sa - station array
 * aesn - airport express station number
 * aesa - airport express station array
 * aeflag - 1 : display ae fare, 0 : display mtr fare
 */
(()=>{
	let sn='2 111 28 1 37 96 18 12 98 11 55 80 74 69 30 82 51 36 101 39 64 4 115 83 13 8 40 22 15 57 19 21 38 76 9 78 117 102 20 65 6 53 14 31 41 52 16 32 70 34 81 97 68 17 35 7 99 75 26 119 54 33 72 100 67 24 73 29 118 49 50 3 42 114 25 120 43 71 27 10 103 5 48 116 23 84 85 86 87 88 89'
	let aesn='44 45 46 47 56'
// from station default to sn: 73
	ns.fs=73
	ns.ft=0
	ns.sa=sn.split(' ')
	ns.aesa=aesn.split(' ')
	ns.sf=fromstation=>{
		ns.aeflag=0
		ns.fs=fromstation
		document.getElementById(47).innerHTML='na'
		document.getElementById(56).innerHTML='na'
    ns.sa.forEach(x=>{
			let f=fromstation,t=x
			if (t!=f){
			  if (f>t){[f,t]=[t,f]}
				t-=f
				if (ns.ff[f][t]!=undefined){
					document.getElementById(x).innerHTML=ns.ff[f][t].split(' ')[ns.ft]
				}
			} else {
				document.getElementById(x).innerHTML='x'
			}
		})
	}
	ns.saef=fromstation=>{
		ns.aeflag=1
		ns.fs=fromstation
    ns.sa.forEach(x=>{document.getElementById(x).innerHTML='na'})
    ns.aesa.forEach(x=>{
			let f=fromstation,t=x,ts=x
			switch (ts){
				case '46': ts=42; break;
				case '45': ts=40; break;
				case '44': ts=39;
			}
			if (t!=f){
				if ((ns.ft==1)||(ns.ft==4)||(ns.ft==5)||(ns.ft==7)){
					document.getElementById(ts).innerHTML='na'
				} else {
			    if (f>t){[f,t]=[t,f]}
  				t-=f
  				if (ns.ff[f][t]!=undefined){
						document.getElementById(ts).innerHTML=ns.ff[f][t].split(' ')[ns.ft]
					}
				}
			} else {
				document.getElementById(ts).innerHTML='x'
			}
		})
	}
	ns.setft=sel=>{
		ns.ft=parseInt(sel.value)
		ns.aeflag?ns.saef(ns.fs):ns.sf(ns.fs)
	}
	ns.sf(ns.fs)
})()

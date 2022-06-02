var sec = 00
var min = 00
var hora = 00
var interval

function doisDigitos(digito) {
	if(digito < 10) {
		return("0"+ digito)
	} else {
		return(digito)
	}
}

function start() {
	counter()
	interval = setInterval(counter, 1000)
}

function pause() {
	clearInterval(interval)
}

function stop() {
	clearInterval(interval)
	sec=0
	min=0
	hora=0
	document.getElementById('watch').innerText="00:00:00"
}

function counter() {
	sec++
	if(sec==60) {
		min++
		sec=0
		if(min==60) {
			hora++
			min=0
		}
	}
	
	document.getElementById('watch').innerText=doisDigitos(hora) + ":" + doisDigitos(min)+ ":" + doisDigitos(sec)
}
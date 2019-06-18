function startStopClock(button) {
	if(button.interval){
		clearInterval(button.interval);
		button.interval=0;
		button.innerHTML = 'Start';
	} else {
		button.interval = setInterval(function() {
			var timeToSet = document.getElementById('timeLeft').innerHTML;
			var newTime = parseFloat(timeToSet)-1;
			document.getElementById('timeLeft').innerHTML = newTime;
			if (newTime==-1) {
				initializeNextPeriod();
			}
		}, 1000);
		button.innerHTML = 'Pause';
	} 
}

function initializeNextPeriod() {
	var periodType = document.getElementById("timeType").innerHTML;
	if (periodType=="Break") {
		resetAsSession();
	} else {
		resetAsBreak();
	}
}

function resetClock(value) {
	var periodType = document.getElementById("timeType").innerHTML;
	var startButton = document.getElementById('startButton');
	if (periodType=="Session") {
		resetAsSession();
	} else {
		resetAsBreak();
	}
	clearInterval(startButton.interval);
	startButton.interval=0;
	startButton.innerHTML = 'Start';
}

function resetAsBreak() {
	var timeToSet = document.getElementById('breakQuantity').value;
	document.getElementById('timeLeft').innerHTML = timeToSet;
	document.getElementById('timeType').innerHTML="Break"; 	
}

function resetAsSession() {
	var timeToSet = document.getElementById('sessionQuantity').value;
	document.getElementById('timeLeft').innerHTML = timeToSet;
	document.getElementById('timeType').innerHTML="Session";
}

function sessionChange(timeValue) {
	if (document.getElementById('timeType').innerHTML=="Session"){
		document.getElementById("timeLeft").innerHTML = timeValue;
	}
}

function breakChange(timeValue) {
	if(document.getElementById('timeType').innerHTML=="Break"){
		document.getElementById("timeLeft").innerHTML = timeValue;
	}	
}
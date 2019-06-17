function startStopClock(button) {
	if(button.interval){
		clearInterval(button.interval);
		button.innerHTML = 'Start';
	} else {
		var timeText = document.getElementById('timerDisplay').innerHTML;
		if (timeText=="Press Start") {
			resetAsSession();
		}
		button.interval = setInterval(function() {
			var timeToSet = document.getElementById('timerDisplay').innerHTML;
			var newTime = parseFloat(timeToSet)-1;
			document.getElementById('timerDisplay').innerHTML = newTime;
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
	document.getElementById('timerDisplay').innerHTML = timeToSet;
	document.getElementById('timeType').innerHTML="Break"; 	
}

function resetAsSession() {
	var timeToSet = document.getElementById('sessionQuantity').value;
	document.getElementById('timerDisplay').innerHTML = timeToSet;
	document.getElementById('timeType').innerHTML="Session";
}

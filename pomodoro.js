function startStopClock(button) {
	if(button.interval){
		clearInterval(button.interval);
		button.interval=0;
		button.innerHTML = 'Start';
	} else {
		button.interval = setInterval(function() {
			var timeToSet = timeToSeconds(document.getElementById('timeLeft').innerHTML);
			var newTime = parseFloat(timeToSet)-1;
			document.getElementById('timeLeft').innerHTML = secondsToTime(newTime);
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
	document.getElementById('timeLeft').innerHTML = minutesToTime(timeToSet);
	document.getElementById('timeType').innerHTML="Break"; 	
}

function resetAsSession() {
	var timeToSet = document.getElementById('sessionQuantity').value;
	document.getElementById('timeLeft').innerHTML = minutesToTime(timeToSet);
	document.getElementById('timeType').innerHTML="Session";
}

function sessionChange(timeValue) {
	if (document.getElementById('timeType').innerHTML=="Session"){
		document.getElementById("timeLeft").innerHTML = minutesToTime(timeValue);
	}
}

function breakChange(timeValue) {
	if(document.getElementById('timeType').innerHTML=="Break"){
		document.getElementById("timeLeft").innerHTML = minutesToTime(timeValue);
	}	
}

function minutesToTime(minutes) {
	return new Date(minutes * 60 * 1000).toISOString().substr(11, 8);
}

function secondsToTime(seconds) {
	return new Date(seconds * 1000).toISOString().substr(11, 8);
}

function timeToSeconds(time) {
	var hoursMinSecs = time.split(':');
	return hoursMinSecs
		.map(function(a, i){ return parseFloat(a)*Math.pow(60, (2-i));})
		.reduce(function(a,b){return a+b;})
}
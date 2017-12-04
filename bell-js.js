//get the clock
function startTime(){
	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();

	m = checkTime(m);
	s = checkTime(s);

	switch(h){
		case 13:
		h = 1;
		break;

		case 14:
		h = 2;
		break

		case 15:
		h = 3;
		break;

		case 16:
		h = 4;
		break;

		case 17:
		h = 5;
		break;

		case 18:
		h = 6;
		break;

		case 19:
		h = 7;
		break;

		case 20:
		h = 8;
		break;

		case 21:
		h = 9;
		break;

		case 22:
		h = 10;
		break;

		case 23:
		h = 11;
		break;

		case 24:
		h = 12;
		break;
	}

	let time = h + ':' + m;
	document.querySelector('#clock').innerHTML = time;

	let t = setTimeout(function(){
		startTime();
	}, 500);
}

function checkTime(i){
	if(i < 10){
		i = '0' + i;
	}
	return i;
}

//create date object
let d = new Date();
let day = d.getDay();

//Displays Full Day schedule
function checkFullDay(){
	$('#dropdown-content').hide();
	$('#period-container-full').show();
	$('#period-container-half').hide();
	$('#dropdown').html('Full Day');

	switch(day){
		case 0:
		day = 'Sunday';
		$('#day').html(day);
		break;

		case 1:
		day = 'Monday';
		document.querySelector('#day').innerHTML = day;
		break;
		
		case 2:
		day = 'Tuesday';
		$('#day').html(day);
		break;

		case 3: 
		day = 'Wednesday';
		$('#day').html(day);
		break;

		case 4:
		day = 'Thursday';
		$('#day').html(day);
		break;

		case 5: 
		day = 'Friday';
		$('#day').html(day);
		break;

		case 6:
		day = 'Saturday';
		break;
	}
	fullDayTime();
}

//displays the Half Day Schedule
function checkHalfDay(){
	$('#dropdown-content').hide();
	$('#period-container-full').hide();
	$('#period-container-half').show();
	$('#dropdown').html('Half Day');

	//create date object
	let d = new Date();
	let day = d.getDay();

	switch(day){
		case 0:
		day = 'Sunday';
		$('#day').html(day);
		break;

		case 1:
		day = 'Monday';
		$('#day').html(day);
		break;
		
		case 2:
		day = 'Tuesday';
		$('#day').html(day);
		break;

		case 3: 
		day = 'Wednesday';
		$('#day').html(day);
		break;

		case 4:
		day = 'Thursday';
		$('#day').html(day);
		break;

		case 5: 
		day = 'Friday';
		$('#day').html(day);
		break;

		case 6:
		day = 'Saturday';
		$('#day').html(day);
		break;
	}
	halfDayTime();
}

//return the appropriate schedule
function fullDayTime(){
	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();
	let day = date.getDay();
	
	if(day === 0 || day === 6){
		$('#period').html("It's the weekend!");
		$('#period').css('font-size', '32px');
		$('#period-number').html('');
		$('#time-full').html('');
	}
	else if(h === 7 && m >= 45 && m < 54){
		$('#period').html("Period:");
		$('#period-number').html('HR');
		$('#period-number').css('font-size', '42');
		$('#time-full').html('7:45-7:50');
	}
	else if(h === 7 && m >= 54 || h === 8 && m < 40){
		$('#period').html("Period:");
		$('#period-number').html('1');
		$('#period-number').css('font-size', '42');
		$('#time-full').html('7:54-8:36');
	} 
	else if(h === 8 && m >= 40 || h === 9 && m < 26){
		$('#period').html("Period:");
		$('#period-number').html('2');
		$('#period-number').css('font-size', '42');
		$('#time-full').html('8:40-9:22');
	} 
	else if(h === 9 && m >= 26 || h === 10 && m < 12){
		$('#period').html("Period:");
		$('#period-number').html('3');
		$('#period-number').css('font-size', '42');
		$('#time-full').html('9:26-10:08');
	} 
	else if(h === 10 && m >= 12 && m < 58){
		$('#period').html("Period:");
		$('#period-number').html('4');
		$('#period-number').css('font-size', '42');
		$('#time-full').html('10:12-10:54');
	} 
	else if(h === 10 && m >= 58 || h === 11 && m < 32){
		$('#period').html("Period:");
		$('#period-number').html('5E');
		$('#period-number').css('font-size', '42');
		$('#time-full').html('10:58-11:40');
	} 
	else if(h === 11 && m >= 32 && m < 44){
		$('#period').html("Period:");
		$('#period-number').html('5L');
		$('#period-number').css('font-size', '42');
		$('#time-full').html('11:32-12:14');
	} 
	else if(h === 11 && m >= 44 || h === 12 && m < 18){
		$('#period').html("Period:");
		$('#period-number').html('6E');
		$('#period-number').css('font-size', '42');
		$('#time-full').html('11:44-12:26');
	} 
	else if(h === 12 && m >= 18 || h === 13 && m < 4){
		$('#period').html("Period:");
		$('#period-number').html('6L');
		$('#period-number').css('font-size', '42');
		$('#time-full').html('12:18-1:00');
	} 
	else if(h === 13 && m >= 4 && m < 50){
		$('#period').html("Period:");
		$('#period-number').html('7');
		$('#period-number').css('font-size', '42');
		$('#time-full').html('1:04-1:46');
	} 
	else if(h === 13 && m >= 50 || h === 14 && m < 32){
		$('#period').html("Period:");
		$('#period-number').html('8');
		$('#period-number').css('font-size', '42');
		$('#time-full').html('1:50-2:32');
	} 
	else {
		$('#period').html('School is out');
		$('#period-number').html('');
		$('#time-full').html('');
	}

	let t = setTimeout(function(){
		fullDayTime();
	}, 500);
}

function halfDayTime(){
	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();
	let day = date.getDay();

	if(day === 0 || day === 6){
		$('#period-half').html("It's the weekend!");
		$('#period-half').css('font-size', '32px');
		$('#period-number-half').html('');
		$('#time-half').html('');
	}
	else if(h === 7 && m >= 45 && m < 54){
		$('#period-half').html("Period:");
		$('#period-number-half').html('HR');
		$('#period-number-half').css('font-size', '42');
		$('#time-half').html('7:45-7:50');
	}
	else if(h === 7 && m >= 54 || h === 8 && m < 28){
		$('#period-half').html("Period:");
		$('#period-number-half').html('1');
		$('#period-number-half').css('font-size', '42');
		$('#time-half').html('7:54-8:24');
	} 
	else if(h === 8 && m >= 28 || h === 9 && m < 2){
		$('#period-half').html("Period:");
		$('#period-number-half').html('2');
		$('#period-number-half').css('font-size', '42');
		$('#time-half').html('8:28-8:58');
	} 
	else if(h === 9 && m >= 2 && m < 36){
		$('#period-half').html("Period:");
		$('#period-number-half').html('3');
		$('#period-number-half').css('font-size', '42');
		$('#time-half').html('9:02-9:32');
	} 
	else if(h === 9 && m >= 36 || h === 10 && m < 10){
		$('#period-half').html("Period:");
		$('#period-number-half').html('4');
		$('#period-number-half').css('font-size', '42');
		$('#time-half').html('9:36-10:06');
	} 
	else if(h === 10 && m >= 10 && m < 44){
		$('#period-half').html("Period:");
		$('#period-number-half').html('5E/5L');
		$('#period-number-half').css('font-size', '42');
		$('#time-half').html('10:10-10:40');
	} 
	else if(h === 10 && m >= 44 || h === 11 && m < 18){
		$('#period-half').html("Period:");
		$('#period-number-half').html('6E/6L');
		$('#period-number-half').css('font-size', '42');
		$('#time-half').html('10:44-11:14');
	} 
	else if(h === 11 && m >= 18 && m < 52){
		$('#period-half').html("Period:");
		$('#period-number-half').html('7');
		$('#period-number-half').css('font-size', '42');
		$('#time-half').html('11:18-11:48');
	} 
	else if(h === 11 && m >= 52 || h === 12 && m < 22){
		$('#period-half').html("Period:");
		$('#period-number-half').html('8');
		$('#period-number-half').css('font-size', '42');
		$('#time-half').html('11:52-12:22');
	}  
	else {
		$('#period-half').html('School is out');
		$('#period-number-half').html('');
		$('#time-half').html('');
	}

	let t = setTimeout(function(){
		halfDayTime();
	}, 500);
}

function clickDropdown(){
	$('#dropdown').click(function(){
		$('#dropdown-content').toggle();
		$('#display-schedule').hide();
	});
}

function clickFull(){
	$('#full').click(function(){
		checkFullDay();
	});
}

function clickHalf(){
	$('#half').click(function(){
		checkHalfDay();
		$('#dropdown').html('Half Day');
	});
}
window.onload = startTime(), checkFullDay(), fullDayTime(), halfDayTime(), clickDropdown(), clickFull(), clickHalf();
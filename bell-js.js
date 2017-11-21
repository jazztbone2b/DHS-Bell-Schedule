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
		$('#period').html("It's the weekend!");
		$('#period').css('font-size', '32px');
		$('#period-number').html('');
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
		$('#day').html(day);
		$('#period').html("It's the weekend!");
		$('#period').css('font-size', '32px');
		$('#period-number').html('');
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
		$('#period-half').html("It's the weekend!");
		$('#period-half').css('font-size', '32px');
		$('#period-number-half').html('');
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
		$('#period').html("It's the weekend!");
		$('#period').css('font-size', '32px');
		$('#period-number').html('');
		break;
	}
	halfDayTime();

}

//return the appropriate schedule
function fullDayTime(){
	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();

	m = checkTime(m);
	
	setTimeout(function(){
		fullDayTime();
	}, 500);

	let time = h + ':' + m;

	if(h === 7 && m >= 45 && m < 54){
		$('#period-number').html('Homeroom');
		$('#period-number').css('font-size', '28');
	}
	else if(h === 7 && m >= 54 || h === 8 && m < 40){
		$('#period-number').html('1');
	} 
	else if(h === 8 && m >= 40 || h === 9 && m < 26){
		$('#period-number').html('2');
	} 
	else if(h === 9 && m >= 26 || h === 10 && m < 12){
		$('#period-number').html('3');
	} 
	else if(h === 10 && m >= 12 && m < 58){
		$('#period-number').html('4');
	} 
	else if(h === 10 && m >= 58 || h === 11 && m < 32){
		$('#period-number').html('5E');
	} 
	else if(h === 11 && m >= 32 && m < 44){
		$('#period-number').html('5L');
	} 
	else if(h === 11 && m >= 44 || h === 12 && m < 18){
		$('#period-number').html('6E');
	} 
	else if(h === 12 && m >= 18 || h === 13 && m < 4){
		$('#period-number').html('6L');
	} 
	else if(h === 13 && m >= 4 && m < 50){
		$('#period-number').html('7');
	} 
	else if(h === 13 && m >= 50 || h === 14 && m < 32){
		$('#period-number').html('8');
	} 
	else {
		$('#period').html('School is out');
		$('#period-number').html('');
	}

}

function halfDayTime(){
	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();

	m = checkTime(m);
	
	setTimeout(function(){
		fullDayTime();
	}, 500);

	let time = h + ':' + m;

	if(h === 7 && m >= 45 && m < 54){
		$('#period-number-half').html('Homeroom');
		$('#period-number-half').css('font-size', '28');
	}
	else if(h === 7 && m >= 54 || h === 8 && m < 28){
		$('#period-number-half').html('1');
	} 
	else if(h === 8 && m >= 28 || h === 9 && m < 2){
		$('#period-number-half').html('2');
	} 
	else if(h === 9 && m >= 2 && m < 36){
		$('#period-number-half').html('3');
	} 
	else if(h === 9 && m >= 36 || h === 10 && m < 10){
		$('#period-number-half').html('4');
	} 
	else if(h === 10 && m >= 10 && m < 44){
		$('#period-number-half').html('5E/5L');
	} 
	else if(h === 10 && m >= 44 || h === 11 && m < 18){
		$('#period-number-half').html('6E/6L');
	} 
	else if(h === 11 && m >= 18 && m < 52){
		$('#period-number-half').html('7');
	} 
	else if(h === 11 && m >= 52 || h === 12 && m < 22){
		$('#period-number-half').html('8');
	}  
	else {
		$('#period-half').html('School is out');
		$('#period-number-half').html('');
	}
}

$('#dropdown').click(function(){
	$('#dropdown-content').toggle();
	$('#display-schedule').hide();
});

$('#full').click(function(){
	checkFullDay();
});

$('#half').click(function(){
	checkHalfDay();
	$('#dropdown').html('Half Day');
});

window.onload = startTime(), checkFullDay(), fullDayTime(), halfDayTime();
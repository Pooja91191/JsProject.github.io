// Variables For Datapicker

var datePicker = document.getElementById('datePicker');
var choseDate = document.getElementById('choseDate');

// Variables For Printing value
var ageYear = document.getElementById('ageYear');
var ageMonths = document.getElementById('ageMonths');
var ageDays = document.getElementById('ageDays');
var ageHours = document.getElementById('ageHours');
var ageSeconds = document.getElementById('ageSeconds');
var ageMiliseconds = document.getElementById('ageMiliseconds');

datePicker.addEventListener('change',function(){
    var options = {year: 'numeric', month: 'long', day: 'numeric'};
    var selectedDate = new Date(this.value);
    var DOB = selectedDate.toLocaleDateString('en-US',options);

    choseDate.innerHTML = "DOB : " + " "+ DOB; 

    var miliSeconds_Btw_DOB = Date.parse(DOB);
    var miliSecond_Btw_Now = Date.now();

    var age_in_Miliseconds = miliSecond_Btw_Now - miliSeconds_Btw_DOB;

 //  console.log(age_in_Miliseconds);

 var miliSeconds = age_in_Miliseconds;
 var second = 1000;
 var minute = second*60;
 var hour = minute*60;
 var day = hour*24;
 var month = day*30;
 var year = day*365;

 //now start the calculation

 var years = Math.round(miliSeconds/year);
 var months = years*12;
 var days = years*365;
 var hours = Math.round(miliSeconds/hour);
 var seconds = Math.round(miliSeconds/second);

 //noe=w it is time to print values in boxes

 ageYear.innerHTML = years
 ageMonths.innerHTML = months
 ageDays.innerHTML = days
 ageHours.innerHTML = hours
 ageSeconds.innerHTML = seconds
 ageMiliseconds.innerHTML=miliSeconds;
 
 document.querySelector('.age-calc').classList.add('expand');

})
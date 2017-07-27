function getQuote() {
$.ajax({
  url: "https://api.forismatic.com/api/1.0/?",
  dataType: "jsonp",
  data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
  cache: false,
  success: function(data) {
    if (data.quoteAuthor) {
      $("#quoteText").html(data.quoteText+" -"+ data.quoteAuthor);
    } 
    else {
      $("#quoteText").html(data.quoteText);
    }
    }
  });
};

function startTime() {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById("timeText").innerHTML = hour + ":" + minute + ":" + second;
    
    var t = setTimeout(startTime, 500);
}

function checkTime(x) {
    if (x < 10) {
          x = "0" + x
      };
    return x;
}

function dispBackground(){
    var currDate = new Date();
    var currHour = currDate.getHours();

    if (currHour >=6 && currHour <10){
        document.body.style.backgroundImage = "url('HkSunrise.jpg')";
    }
    else if (currHour >=18 && currHour <21){
        document.body.style.backgroundImage = "url('HkSunset.jpg')";
    }
    else if ((currHour >= 0 && currHour <6) || (currHour >=21 && currHour <=24)){
        document.body.style.backgroundImage = "url('HkNight.jpg')";
    }
    else {
        document.body.style.backgroundImage = "url('HkDay.jpg')";
    }
}

function dispDate() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var theDate = new Date();
    var year = theDate.getFullYear();
    var month = months[(theDate.getMonth())];
    var day = theDate.getDate();

    document.getElementById("date").innerHTML = day + " " + month + " " + year;
}




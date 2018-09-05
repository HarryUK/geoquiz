// document.getElementById("form1").parentNode.removeChild(document.getElementById("form1")); Old Method
	var points = 0;
	var counter1 = 0;
	var counter2 = 0;
	var counter3 = 0;
	var counter4 = 0;
	var counter5 = 0;
	$(document).ready(function() {
	});
	function brazil() {
		counter1++;
	    var answer = document.forms["form1"]["answer1"].value;
	    if (answer.toLowerCase() != "brasilia") {
			document.getElementById("counter1").innerHTML = "Wrong";
	    	return;
	    }
	    else if(counter1 == 1) {
	    	document.getElementById("counter1").innerHTML = "Correct First time";
	    	points += 3;
	    }
	   	else if(counter1 == 2) {
	    	document.getElementById("counter1").innerHTML = "Correct Second Time";
	    	points += 2;
	    }
	   	else if(counter1 > 2) {
	    	document.getElementById("counter1").innerHTML = "Correct";
	    	points += 1;
	    }
	    $("#form1").fadeOut(100);
	    $("#counter1").addClass("fadeInCSS");
	    $("#counter1").css("padding-bottom", "40px")
	    document.getElementById("score").innerHTML = points;
	}
	function australia() {
		counter2++;
	    var answer = document.forms["form2"]["answer2"].value;
	    if (answer.toLowerCase() != "canberra") {
	    	document.getElementById("counter2").innerHTML = "Wrong";
	    	return;
	    }
	    else if(counter2 == 1) {
	    	document.getElementById("counter2").innerHTML = "Correct First time";
	    	points += 3;
	    }
	   	else if(counter2 == 2) {
	    	document.getElementById("counter2").innerHTML = "Correct Second Time";
	    	points += 2;
	    }
	   	else if(counter2 > 2) {
	    	document.getElementById("counter2").innerHTML = "Correct";
	    	points += 1;
	    }
	    $("#form2").fadeOut(100);
	    $("#counter2").addClass("fadeInCSS");
	    $("#counter2").css("padding-bottom", "40px")
	    document.getElementById("score").innerHTML = points;
	}
	function america() {
		counter3++;
	    var answer = document.forms["form3"]["answer3"].value;
	    if (answer.toLowerCase() != "washington") {
	    	document.getElementById("counter3").innerHTML = "Wrong";
	    	return;
	    }
	    else if(counter3 == 1) {
	    	document.getElementById("counter3").innerHTML = "Correct First time";
	    	points += 3;
	    }
	   	else if(counter3 == 2) {
	    	document.getElementById("counter3").innerHTML = "Correct Second Time";
	    	points += 2;
	    }
	   	else if(counter3 > 2) {
	    	document.getElementById("counter3").innerHTML = "Correct";
	    	points += 1;
	    }
	    $("#form3").fadeOut(100);
	    $("#counter3").addClass("fadeInCSS");
	    $("#counter3").css("padding-bottom", "40px")
	    document.getElementById("score").innerHTML = points;
	}
	function unitedkingdom() {
		counter4++;
	    var answer = document.forms["form4"]["answer4"].value;
	    if (answer.toLowerCase() != "london") {
	    	document.getElementById("counter4").innerHTML = "Wrong";
	    	return;
	    }
	    else if(counter4 == 1) {
	    	document.getElementById("counter4").innerHTML = "Correct First time";
	    	points += 3;
	    }
	   	else if(counter4 == 2) {
	    	document.getElementById("counter4").innerHTML = "Correct Second Time";
	    	points += 2;
	    }
	   	else if(counter4 > 2) {
	    	document.getElementById("counter4").innerHTML = "Correct";
	    	points += 1;
	    }
	    $("#form4").fadeOut(100);
	    $("#counter4").addClass("fadeInCSS");
	    $("#counter4").css("padding-bottom", "40px")
	    document.getElementById("score").innerHTML = points;
	}
	function kenya() {
		counter5++;
	    var answer = document.forms["form5"]["answer5"].value;
	    if (answer.toLowerCase() != "nairobi") {
	    	document.getElementById("counter5").innerHTML = "Wrong";
	    	return;
	    }
	    else if(counter5 == 1) {
	    	document.getElementById("counter5").innerHTML = "Correct First time";
	    	points += 3;
	    }
	   	else if(counter5 == 2) {
	    	document.getElementById("counter5").innerHTML = "Correct Second Time";
	    	points += 2;
	    }
	   	else if(counter5 > 2) {
	    	document.getElementById("counter5").innerHTML = "Correct";
	    	points += 1;
	    }
	    $("#form5").fadeOut(100);
	    $("#counter5").addClass("fadeInCSS");
	    $("#counter5").css("padding-bottom", "40px")
	    document.getElementById("score").innerHTML = points;
	}
	if(counter1 > 2 && counter2 > 2 && counter3 > 2 && counter4 > 2 && counter5 > 5) {
		alert('You finished!, Check your final score at the bottom of the page');
	}

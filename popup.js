var elem = document.getElementById("searchform");
elem.addEventListener("submit", function() {
    var value1 = document.getElementById('entertext').value;

    var value2 = document.getElementById('site').value;


    var value3 = value1 + value2;

	
    document.getElementById('finalquery').setAttribute('value', value3);
},false);
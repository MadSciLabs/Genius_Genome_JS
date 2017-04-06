var button = document.getElementById("toggle");

var _current = "#p2";
var _to = "#p3";

var morph = new TimelineMax({paused:true});
//morph.to(_to, 1, { morphSVG: _current, ease:Power3.easeOut });

var classname = document.getElementsByClassName("classname");

var myFunction = function() {
    var attribute = this.getAttribute("data-myattribute");
    alert(attribute);
};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction, false);
}

/*
window.addEventListener('scroll', function() {
  if (morph.progress() === 0) {
    morph.play();
  }
});
*/

function morphThis(_val)
{
	console.log("current: " + _current);

	if (_val == "l1") {
		console.log("to: p1");
		_to = "#p2";
		_current = "#p1";

		//from , to
		morph.to("#p1", 1.0, { morphSVG: "#p2", ease:Power1.easeOut });

	} else if (_val == "l2") {
		console.log("to: p2");
		_to = "#p2";
		_current = "#p1";

		morph.to("#p1", 1.0, { morphSVG: "#p3", ease:Power1.easeOut });

	} else if (_val == "l3") {
		console.log("to: p3");
		_to = "#p3";
		_current = "#p1";

		morph.to("#p1", 1.0, { morphSVG: "#p1", ease:Power1.easeOut });

	} else if (_val == "l4") {
		console.log("to: p4");
		_to = "#p4";
		_current = "#p1";

		morph.to("#p1", 1.0, { morphSVG: "#p4", ease:Power1.easeOut });
	} else if (_val == "l5") {
		console.log("to: p5");
		_to = "#p5";
		_current = "#p1";

		morph.to("#p1", 1.0, { morphSVG: "#p5", ease:Power1.easeOut });
	} else if (_val == "l6") {
		console.log("to: p6");
		_to = "#p6";
		_current = "#p1";

		morph.to("#p1", 1.0, { morphSVG: "#p6", ease:Power1.easeOut });
	} else if (_val == "l7") {
		console.log("to: p7");
		_to = "#p7";
		_current = "#p1";

		morph.to("#p1", 1.0, { morphSVG: "#p7", ease:Power1.easeOut });
	} else if (_val == "l8") {
		console.log("to: p8");
		_to = "#p8";
		_current = "#p1";

		morph.to("#p1", 1.0, { morphSVG: "#p8", ease:Power1.easeOut });
	} else if (_val == "l9") {
		console.log("to: p9");
		_to = "#p9";
		_current = "#p1";

		morph.to("#p1", 1.0, { morphSVG: "#p9", ease:Power1.easeOut });
	}


	

	//morph.to(_to, 1.0, { morphSVG: _current, ease:Power3.easeOut });
	morph.play();

	//_current = _to;

	/*
	alert(_val);
	if (morph.progress() === 0) { //if it's at the beginning, start playing
    	morph.play();
  	} else { //otherwise toggle the direction on-the-fly
    	morph.reversed( !morph.reversed() );
  	}
	*/

}

/*
button.addEventListener("l1", function() {
  if (morph.progress() === 0) { //if it's at the beginning, start playing
    morph.play();
  } else { //otherwise toggle the direction on-the-fly
    morph.reversed( !morph.reversed() );
  }
});
*/
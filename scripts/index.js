let MotionStory = document.querySelector(".lottie");
var animation = lottie.loadAnimation({
  container: MotionStory,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "data.json",
	 initialSegment: [89, 100],
	
});

function start() {
	"use strict";
    animation.playSegments([0,90], true);
	document.getElementById("screen1").style.display = "inline";
	document.getElementById("screen2").style.display = "none";
	document.getElementById("screen3").style.display = "none";
	document.getElementById("screen4").style.display = "none";
	document.getElementById("screen5").style.display = "none";
	document.getElementById("screen6").style.display = "none";
	document.getElementById("screen7").style.display = "none";
	document.getElementById("screen8").style.display = "none";
	document.getElementById("screen9").style.display = "none";
}
document.querySelector('.start').addEventListener('click', start);

function goscreen2() {
	"use strict";
    animation.playSegments([91,180], true);
	document.getElementById("screen1").style.display = "none";
	document.getElementById("screen2").style.display = "inline";
	document.getElementById("screen3").style.display = "none";
	document.getElementById("screen4").style.display = "none";
	document.getElementById("screen5").style.display = "none";
		document.getElementById("screen6").style.display = "none";
	document.getElementById("screen7").style.display = "none";
	document.getElementById("screen8").style.display = "none";
	document.getElementById("screen9").style.display = "none";
//	about hide the btn after click> https://www.w3schools.com/jsref/prop_style_display.asp
}
document.querySelector('.goscreen2').addEventListener('click', goscreen2);

function goscreen3() {
	"use strict";
    animation.playSegments([181,300], true);
	document.getElementById("screen1").style.display = "none";
	document.getElementById("screen2").style.display = "none";
	document.getElementById("screen3").style.display = "inline";
	document.getElementById("screen4").style.display = "none";
	document.getElementById("screen5").style.display = "none";
		document.getElementById("screen6").style.display = "none";
	document.getElementById("screen7").style.display = "none";
	document.getElementById("screen8").style.display = "none";
	document.getElementById("screen9").style.display = "none";

}
document.querySelector('.goscreen3').addEventListener('click', goscreen3);

function goscreen4() {
	"use strict";
    animation.playSegments([301,420], true);
	document.getElementById("screen1").style.display = "none";
	document.getElementById("screen2").style.display = "none";
	document.getElementById("screen3").style.display = "none";
	document.getElementById("screen4").style.display = "inline";
	document.getElementById("screen5").style.display = "none";
		document.getElementById("screen6").style.display = "none";
	document.getElementById("screen7").style.display = "none";
	document.getElementById("screen8").style.display = "none";
	document.getElementById("screen9").style.display = "none";

}
document.querySelector('.goscreen4').addEventListener('click', goscreen4);

function goscreen5() {
	"use strict";
    animation.playSegments([421,570], true);
	document.getElementById("screen1").style.display = "none";
	document.getElementById("screen2").style.display = "none";
	document.getElementById("screen3").style.display = "none";
	document.getElementById("screen4").style.display = "none";
	document.getElementById("screen5").style.display = "inline";
	document.getElementById("screen6").style.display = "none";
	document.getElementById("screen7").style.display = "none";
	document.getElementById("screen8").style.display = "none";
	document.getElementById("screen9").style.display = "none";
}
document.querySelector('.goscreen5').addEventListener('click', goscreen5);

function goscreen6() {
	"use strict";
    animation.playSegments([571,690], true);
	document.getElementById("screen1").style.display = "none";
	document.getElementById("screen2").style.display = "none";
	document.getElementById("screen3").style.display = "none";
	document.getElementById("screen4").style.display = "none";
	document.getElementById("screen5").style.display = "none";
	document.getElementById("screen6").style.display = "inline";
	document.getElementById("screen7").style.display = "none";
	document.getElementById("screen8").style.display = "none";
	document.getElementById("screen9").style.display = "none";
}
document.querySelector('.goscreen6').addEventListener('click', goscreen6);

function goscreen7() {
	"use strict";
    animation.playSegments([691,810], true);
	document.getElementById("screen1").style.display = "none";
	document.getElementById("screen2").style.display = "none";
	document.getElementById("screen3").style.display = "none";
	document.getElementById("screen4").style.display = "none";
	document.getElementById("screen5").style.display = "none";
	document.getElementById("screen6").style.display = "none";
	document.getElementById("screen7").style.display = "inline";
	document.getElementById("screen8").style.display = "none";
	document.getElementById("screen9").style.display = "none";
}
document.querySelector('.goscreen7').addEventListener('click', goscreen7);

function goscreen8() {
	"use strict";
    animation.playSegments([811,886], true);
	document.getElementById("screen1").style.display = "none";
	document.getElementById("screen2").style.display = "none";
	document.getElementById("screen3").style.display = "none";
	document.getElementById("screen4").style.display = "none";
	document.getElementById("screen5").style.display = "none";
	document.getElementById("screen6").style.display = "none";
	document.getElementById("screen7").style.display = "none";
	document.getElementById("screen8").style.display = "inline";
	document.getElementById("screen9").style.display = "none";
}
document.querySelector('.goscreen8').addEventListener('click', goscreen8);

function goscreen9() {
	"use strict";
    animation.playSegments([887,933], true);
	document.getElementById("screen1").style.display = "none";
	document.getElementById("screen2").style.display = "none";
	document.getElementById("screen3").style.display = "none";
	document.getElementById("screen4").style.display = "none";
	document.getElementById("screen5").style.display = "none";
	document.getElementById("screen6").style.display = "none";
	document.getElementById("screen7").style.display = "none";
	document.getElementById("screen8").style.display = "none";
	document.getElementById("screen9").style.display = "inline";
}
document.querySelector('.goscreen9').addEventListener('click', goscreen9);





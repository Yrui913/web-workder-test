var start;
onmessage = getStart;
function getStart(event) {
	start = event.data;
	onmessage = getEnd;
}

var end;
function getEnd(event) {
	end = event.data;
	onmessage = null;
	work();
}

function work() {
	var result = 0;
	for (var i = start; i < end; i++) {
		result += 1;
	}
	postMessage(result);
	close();
}
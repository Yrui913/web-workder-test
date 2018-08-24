(function(){
	onmessage = function(e) {
		console.log('message received from main script',e);
		var workerResult = 'Result:' +  (e.data[0] * e.data[1]);
		console.log('posting message back to main script');
		postMessage(workerResult);
	}
})();
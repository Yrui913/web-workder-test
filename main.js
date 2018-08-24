(function(){
	var first = document.getElementById('first');
	var second = document.getElementById('second');
	var result = document.getElementById('result');
	console.log('first node', first);
	console.log('second node',second);
	//兼容检测
	if(window.Worker) {
		var myWorker =  new Worker('./worker.js');
		first.onchange = function() {
			myWorker.postMessage([first.value,second.value]);
			console.log('message posted to worker');
			console.log('first is change',first.value);
		}

		second.onchange = function() {
			myWorker.postMessage([first.value,second.value]);
			console.log('message posted to worker');
			console.log('second is change',second.value);
		}

		myWorker.onmessage = function(e) {
			result.textContent = e.data;
			console.log('message received from worker');
		}
	}
})();
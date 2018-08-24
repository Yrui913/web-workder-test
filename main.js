(function(){
	var first = document.getElementById('first');
	var second = document.getElementById('second');
	var result = document.getElementById('result');
	
	console.log('result node',result);
	console.log('first node', first);
	console.log('second node',second);
	//兼容检测
	if(window.Worker) {
		var myWorker =  new Worker('./worker.js');
	

		myWorker.onmessage = function(event){
			result.textContent = event.data;
		}

		myWorker.onerror = function(event) {
			console.log([
				'ERROR: Line ', e.lineno, ' in ', e.filename,  ' : ',  e.message
				].join(' '));
		};
	}
})();
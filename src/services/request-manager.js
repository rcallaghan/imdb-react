function makeRequest (url) {
	return fetch(url)
	.then(res => {
		return res.json();
	})
}

// http://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

class RequestManager {
	static get(url) {
		return makeRequest(url);
	}
}

export default {
	get: RequestManager.get,
	debounce: RequestManager.debounce,
}
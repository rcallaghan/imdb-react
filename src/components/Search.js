import React, {Component} from 'react'
import List from './List'

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			placeholder: 'Search for a title', 
			value: '',
			results: [],
		}
		this.getData = debounce(this.getData,200);
	}

	handleChange(e) {
		this.setState({value: e.target.value});
		this.getData();
	}

	getData() {
		fetch('http://www.omdbapi.com/?s=' + this.state.value).then(results => results.json()).then(data => this.setState({'results': data}))
	}

	render() {
		return (
			<div>
				<input type='text' placeholder={this.state.placeholder} onChange={this.handleChange.bind(this)}/>

				<List data={this.state.results.Search} />
			</div>
		)
	}
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
};

export default Search
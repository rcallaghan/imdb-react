import React, {Component} from 'react'
import RequestManager from '../services/request-manager'
import { API_SEARCH_URL } from '../constants'
import List from './List'

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			placeholder: 'Search for a title', 
			value: '',
			results: [],
		}
	}

	handleChange(e) {
		this.setState({value: e.target.value});
		RequestManager.get(API_SEARCH_URL + this.state.value).then(payload => this.setState({'results': payload}));
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

export default Search
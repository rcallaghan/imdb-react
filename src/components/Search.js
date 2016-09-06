import React, {Component} from 'react'
import RequestManager from '../services/request-manager'
import { API_SEARCH_URL } from '../constants'
import List from './List'

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
		}
	}

	handleChange(e) {
		RequestManager.get(API_SEARCH_URL + e.target.value).then(payload => this.setState({'results': payload}));
	}

	render() {
		return (
			<div>
				<input type="text" placeholder="Search for a title" onChange={this.handleChange.bind(this)}/>
				<List data={this.state.results.Search} />
			</div>
		)
	}
}

export default Search
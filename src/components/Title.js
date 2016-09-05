import React, {Component} from 'react'
import RequestManager from '../services/request-manager'
import { API_SPECIFIC_ID } from '../constants'
import Titleinfo from './Titleinfo'

class Title extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'data': ''
		}
	}

	componentDidMount() {
		RequestManager.get(API_SPECIFIC_ID + this.props.params.title).then(payload => this.setState({'data': payload}));
	}

	render() {
		return (
			<div>
				<Titleinfo 
					Title={this.state.data.Title}
					Plot={this.state.data.Plot}
					Poster={this.state.data.Poster}
					Actors={this.state.data.Actors}
					Writers={this.state.data.Writer}
					Rating={this.state.data.imdbRating}
					Voters={this.state.data.imdbVotes}
				/>
			</div>
		)
	}
}

export default Title
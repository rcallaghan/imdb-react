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
				<Titleinfo data={this.state.data} />
			</div>
		)
	}
}

export default Title
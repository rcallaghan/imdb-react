import React, {Component} from 'react'

class Search extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a className="button" href={this.props.LinkTo}>Search Again!</a>
		)
	}
}

export default Search
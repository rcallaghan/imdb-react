import React, {Component} from 'react'


class List extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul>
				{this.props.data ?
					this.props.data.map(result => 
						<li>
							<a href={'/title/' + result.imdbID}>
								<img className='thumb' src={result.Poster !== 'N/A' ? result.Poster : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=No%20Image&w=200&h=200' } />
								<h2> {result.Title}</h2>
								<p>Released in: {result.Year}</p>
								<p>Type: {result.Type}</p>
							</a>
						</li>
					)
					:
					""
				}
			</ul>
		)
	}
}


export default List
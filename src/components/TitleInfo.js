import React, {Component} from 'react'
import Homebutton from './Homebutton'

class Titleinfo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Homebutton LinkTo='/'/>

				<div className="row">
					<div className="col-md-3">
						<img src={this.props.data.Poster} className="poster"/>
					</div>
					<div className="col-md-9">
						<h1>{this.props.data.Title}</h1>
						<p className="rating"><b>Rating on IMDB:</b> {this.props.data.imdbRating}</p>
						<p className="votes"><b>IMDB Voters:</b> {this.props.data.imdbVotes}</p>
						
						<h3>Plot</h3>
						<p className="plot">{this.props.data.Plot}</p>
						
						<h3>Actors</h3>
						<p className="actors">{this.props.data.Actors}</p>
						
						<h3>Writers</h3>
						<p className="writers">{this.props.data.Writer}</p>
					</div>
				</div>
			</div>
		)
	}
}


export default Titleinfo
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
						<img src={this.props.Poster} className="poster"/>
					</div>
					<div className="col-md-9">
						<h1>{this.props.Title}</h1>
						<p className="rating"><b>Rating on IMDB:</b> {this.props.Rating}</p>
						<p className="votes"><b>IMDB Voters:</b> {this.props.Voters}</p>
						
						<h3>Plot</h3>
						<p className="plot">{this.props.Plot}</p>
						
						<h3>Actors</h3>
						<p className="actors">{this.props.Actors}</p>
						
						<h3>Writers</h3>
						<p className="writers">{this.props.Writers}</p>
					</div>
				</div>
			</div>
		)
	}
}


export default Titleinfo
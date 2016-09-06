import React, {Component} from 'react'
import Homebutton from './Homebutton'

class Titleinfo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const data = this.props.data;
		return (
			<div>
				<Homebutton LinkTo='/'/>

				<div className="row">
					<div className="col-md-3">
						<img src={data.Poster} className="poster"/>
					</div>
					<div className="col-md-9">
						<h1>{data.Title}</h1>
						<p className="rating"><b>Rating on IMDB:</b> {data.imdbRating}</p>
						<p className="votes"><b>IMDB Voters:</b> {data.imdbVotes}</p>
						
						<h3>Plot</h3>
						<p className="plot">{data.Plot}</p>
						
						<h3>Actors</h3>
						<p className="actors">{data.Actors}</p>
						
						<h3>Writers</h3>
						<p className="writers">{data.Writer}</p>
					</div>
				</div>
			</div>
		)
	}
}


export default Titleinfo
import React, { Component } from "react";
import {
	topRatedUrl,
	PopularUrl,
	NowPlaying,
	GetMovieDetailsUrl,
} from "../../assests/apiResources/api";
import MainCrousel from "../../components/MainCrousel/MainCrousel";
import { Link } from "react-router-dom";
import "./movieHome.scss";
export default class MovieHome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topRated: null,
			Popular: null,
			NowPlaying: null,
			MovieDetails: null,
			favouriteIDs: [],
			favouriteMovies: [],
		};
	}
	componentDidMount() {
		fetch(NowPlaying).then((res) => {
			res.json().then((data) => {
				this.setState({ NowPlaying: data.results });
			});
		});
		fetch(PopularUrl).then((res) => {
			res.json().then((data) => {
				this.setState({ Popular: data.results });
			});
		});
		fetch(topRatedUrl).then((res) => {
			res.json().then((data) => {
				this.setState({ topRated: data.results });
			});
		});
	}

	getMovieDetails = (id) => {
		fetch(GetMovieDetailsUrl(id)).then((res) => {
			res.json().then((data) => {
				console.log(data);
			});
		});
	};

	favouritesHandler = (ID) => {
		let temp = [...this.state.favouriteIDs];
		if (!temp.includes(ID)) {
			temp.push(ID);
			this.setState({ favouriteIDs: temp });
			let AllData = [
				...this.state.topRated,
				...this.state.Popular,
				...this.state.NowPlaying,
			];

			const filtringFunction = (ele) => {
				return ele.id === ID;
			};

			let filtered = AllData.filter(filtringFunction);
			let temp2 = [...this.state.favouriteMovies];

			temp2.push(filtered);
			this.setState({ favouriteMovies: temp2 }, () =>
				this.props.saveFav(this.state.favouriteMovies)
			);
		}
	};

	render() {
		return (
			<div className="movie-home-wrapper">
				<header>
					<h3>Movie App</h3>
					<Link to="/Favourites">My Favourites</Link>
				</header>

				<div className="crousel-title-wrapper">
					<h4>All time hit</h4>
					<MainCrousel
						getMovieDetails={this.getMovieDetails}
						favouritesHandler={this.favouritesHandler}
						movieData={this.state.topRated}
					/>
				</div>
				<div className="crousel-title-wrapper">
					<h4>Upcoming</h4>
					<MainCrousel
						getMovieDetails={this.getMovieDetails}
						favouritesHandler={this.favouritesHandler}
						movieData={this.state.NowPlaying}
					/>
				</div>
				<div className="crousel-title-wrapper">
					<h4>Popular</h4>
					<MainCrousel
						getMovieDetails={this.getMovieDetails}
						favouritesHandler={this.favouritesHandler}
						movieData={this.state.Popular}
					/>
				</div>
			</div>
		);
	}
}

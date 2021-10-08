import React, { Component } from "react";
import {
	topRatedUrl,
	PopularUrl,
	NowPlaying,
} from "../../assests/apiResources/api";
import MainCrousel from "../../components/MainCrousel/MainCrousel";
import "./movieHome.scss";
export default class MovieHome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topRated: null,
			Popular: null,
			NowPlaying: null,
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
	render() {
		return (
			<div className="movie-home-wrapper">
				<h3>Movie App</h3>
				<div className="crousel-title-wrapper">
					<h4>All time hit</h4>
					<MainCrousel movieData={this.state.topRated} />
				</div>
				<div className="crousel-title-wrapper">
					<h4>Upcoming</h4>
					<MainCrousel movieData={this.state.NowPlaying} />
				</div>
				<div className="crousel-title-wrapper">
					<h4>Popular</h4>
					<MainCrousel movieData={this.state.Popular} />
				</div>
			</div>
		);
	}
}

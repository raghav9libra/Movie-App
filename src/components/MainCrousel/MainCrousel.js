import React, { Component } from "react";
import "./MainCrousel.scss";
import Img from "../../assests/images/img.jpg";
export default class MainCrousel extends Component {
	render() {
		return (
			<div className="crousel-wrapper">
				{this.props.movieData
					? this.props.movieData.slice(0, 5).map((ele, index) => {
							return (
								<img
									src={`https://image.tmdb.org/t/p/original/${ele.poster_path}`}
									alt="Movie Poster"
								/>
							);
					  })
					: null}
			</div>
		);
	}
}

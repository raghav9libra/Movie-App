import React, { Component } from "react";
import "./MainCrousel.scss";
import Img from "../../assests/images/img.jpg";
export default class MainCrousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showBtn: false,
		};
	}
	DetailsClickHandler = (ID) => {
		this.props.getMovieDetails(ID);
	};
	FavClickHandler = (ID) => {
		this.props.favouritesHandler(ID);
	};

	render() {
		return (
			<div className="crousel-wrapper">
				{this.props.movieData
					? this.props.movieData.slice(0, 5).map((ele, index) => {
							return (
								<div className="img-warapper" key={index}>
									<img
										src={`https://image.tmdb.org/t/p/original/${ele.poster_path}`}
										alt="Movie Poster"
										onMouseOver={() => this.setState({ showBtn: true })}
										onMouseLeave={() => this.setState({ showBtn: false })}
									/>

									<div className="btn-wrapper">
										<a onClick={() => this.DetailsClickHandler(ele.id)}>
											Details
										</a>
										<a onClick={() => this.FavClickHandler(ele.id)}>
											Add To Favourite
										</a>
									</div>
								</div>
							);
					  })
					: null}
			</div>
		);
	}
}

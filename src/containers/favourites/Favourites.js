import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainCrousel from "../../components/MainCrousel/MainCrousel";
import "./Favourites.scss";

export default class Favourites extends Component {
	render() {
		return (
			<div className="fav-wrapper">
				<header>
					<Link to="/">Back</Link>
					<h3>My Favourites</h3>
				</header>
				<div className="fav-crousel-wrapper">
					{this.props.favData ? (
						this.props.favData.map((ele, index) => {
							return <MainCrousel movieData={ele} />;
						})
					) : (
						<p>No Favourites Added</p>
					)}
				</div>
			</div>
		);
	}
}

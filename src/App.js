import MovieHome from "./containers/movieHome/movieHome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailsPage from "./containers/DetailsPage/DetailsPage";
import Favourites from "./containers/favourites/Favourites";
import React, { useState } from "react";

function App() {
	const [favData, setFavData] = useState();

	const saveFav = (data) => {
		setFavData(data);
	};

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact>
						<MovieHome saveFav={saveFav} />
					</Route>
					<Route path="/Details">
						<DetailsPage />
					</Route>
					<Route path="/Favourites">
						<Favourites favData={favData} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

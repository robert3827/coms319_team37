import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

import MainPage from "./pages/mainPage";
import Pokemart from "./pages/pokemart";
import Carousel from 'react-bootstrap/Carousel';
import './stylesheets/App.css';
import './stylesheets/Cards.css'
import './stylesheets/Types.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Credits from "./pages/credits";
import YourCollection from "./pages/yourCollection";
import Menubar from "./components/menubar";
import EarnCoins from "./pages/earnCoins";
import SignIn from "./pages/signIn";

import { useState, useEffect } from "react";
import Layout from "./pages/Layout";





function App() {

	var [numCoins, setNumCoins] = useState(0);
	var [userName, setUserName] = useState("")
	var [signInStatus, setSignInStatus] = useState("signIn");

	function addCoin() {
		setNumCoins (numCoins+1);
		console.log("App: " + numCoins);
	}

	
    useEffect(() => {
        console.log("App_useEff: " + numCoins);

    }, [numCoins]);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout numCoins={numCoins} userName={userName}/>}>
						<Route index element={<MainPage />} />
						<Route path="pokemart" element={<Pokemart setNumCoins={setNumCoins} numCoins={numCoins}  userName={userName}/>} />
						<Route path="yourCollection" element={<YourCollection userName={userName} signInStatus={signInStatus}/>} />
						<Route path="earnCoins" element={<EarnCoins setNumCoins={setNumCoins} numCoins={numCoins} userName={userName}/>} />
						<Route path="credits" element={<Credits />} />
						<Route path="signIn" element={<SignIn setNumCoins={setNumCoins} setUserName={setUserName} userName={userName} setSignInStatus={setSignInStatus} signInStatus={signInStatus}/>} />
					</Route>


				</Routes>
			</BrowserRouter>


		</>


	);
}


export default App;

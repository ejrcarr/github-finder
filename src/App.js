import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import './App.css';

const App = () => {
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({ message, type });

		setTimeout(() => setAlert(null), 5000);
	};

	return (
		<GithubState>
			<Router>
				<div className='App'>
					<NavBar />
					<div className='container'>
						<Alert alert={alert} />
						<Routes>
							<Route
								path='/'
								element={
									<Fragment>
										<Search setAlert={showAlert} />
										<Users />
									</Fragment>
								}
							/>
							<Route path='/about' element={<About />} />
							<Route path='/user/:login' element={<User />} />
						</Routes>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;

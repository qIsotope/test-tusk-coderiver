import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { MainPage } from './pages/MainPage';
import { routes } from './routes/routes';
import './styles/main.scss'


function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<Sidebar />
				<div className="main">
					<Header />
					<Routes>
						{routes.map(routes => <Route path={routes.path} key={routes.path} element={routes.component} />)}
					</Routes>
				</div>
			</div>

		</div>
	);
}

export default App;

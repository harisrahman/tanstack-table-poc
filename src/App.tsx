import './App.scss';
import Table from './components/Table/Table';

const App = () => {
	return (
		<div className="App">
			<div className="body">
				<h2>
					Table (pagination, selection, sorting and custom column
					render)
				</h2>
				<Table />
			</div>
		</div>
	);
};

export default App;

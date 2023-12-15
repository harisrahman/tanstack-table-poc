import './App.scss';
import SubRowTable from './components/SubRowTable/SubRowTable';
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

				<h2>SubRow Table</h2>
				<SubRowTable />
			</div>
		</div>
	);
};

export default App;

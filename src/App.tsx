import './App.scss';
import GroupedTable from './components/GroupedTable/GroupedTable';
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

				<h2>Grouped Table</h2>
				<GroupedTable />
			</div>
		</div>
	);
};

export default App;

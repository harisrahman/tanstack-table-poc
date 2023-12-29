import './App.scss';
import GroupedTable from './components/GroupedTable/GroupedTable';
import StickyRowTable from './components/StickyRowTable/StickyRowTable';
import SubGridTable from './components/SubGridTable/SubGridTable';
import SubRowTable from './components/SubRowTable/SubRowTable';
import Table from './components/Table/Table';

const App = () => {
	return (
		<div className="App">
			<div className="body">
				<h2>
					Table (pagination, selection, sorting, column resizing and
					custom column render)
				</h2>
				<Table />

				<h2>SubRow Table</h2>
				<SubRowTable />

				<h2>Grouped Table</h2>
				<GroupedTable />

				<h2>With Sub Grids</h2>
				<SubGridTable />

				<h2>With Sticky Row</h2>
				<StickyRowTable />
			</div>
		</div>
	);
};

export default App;

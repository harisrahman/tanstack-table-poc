import {
	ExpandedState,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { Fragment, useMemo, useState } from 'react';

import '../Table/Table.scss';
import './SubGridTable.scss';

import { columns } from './columns';
import SubTable from './components/SubTable';
import mockUsers from './data/users.json';

const SubGridTable = () => {
	const [data] = useState(() => [...mockUsers]);
	const [expanded, setExpanded] = useState<ExpandedState>({});

	const table = useReactTable({
		data,
		columns,
		state: {
			expanded,
		},
		onExpandedChange: setExpanded,
		getCoreRowModel: getCoreRowModel(),
	});

	const totalVisibleColumns = useMemo(
		() => table.getVisibleFlatColumns().length,
		[table],
	);

	return (
		<div className="Table SubGridTable">
			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext(),
										  )}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<Fragment key={row.id}>
							<tr key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<td key={cell.id}>
										{flexRender(
											cell.column.columnDef.cell,
											cell.getContext(),
										)}
									</td>
								))}
							</tr>
							{row.getIsExpanded() && row.original.subGrid ? (
								<tr
									key={row.id + 'expanded'}
									className="expanded-sub-table"
								>
									<td colSpan={totalVisibleColumns}>
										<SubTable
											data={row.original.subGrid.data}
											columns={
												row.original.subGrid.columns
											}
										/>
									</td>
								</tr>
							) : null}
						</Fragment>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SubGridTable;

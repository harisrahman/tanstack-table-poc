import {
	ExpandedState,
	flexRender,
	getCoreRowModel,
	getExpandedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

import '../Table/Table.scss';
import './SubRowTable.scss';

import { columns } from './columns';
import mockUsers from './data/users.json';

const SubRowTable = () => {
	const [data] = useState(() => [...mockUsers]);
	const [expanded, setExpanded] = useState<ExpandedState>({});

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		state: {
			expanded,
		},
		onExpandedChange: setExpanded,
		getSubRows: (row) => row.subRows as (typeof row)[],
		getExpandedRowModel: getExpandedRowModel(),
	});

	return (
		<div className="Table SubRowTable">
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
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SubRowTable;

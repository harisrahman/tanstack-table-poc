import {
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

import '../Table/Table.scss';
import './StickyRowTable.scss';

import { columns } from './columns';
import mockUsers from './data/users.json';

const StickyRowTable = () => {
	const [data] = useState(() => [...mockUsers]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="Table StickyRowTable">
			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id} colSpan={header.colSpan}>
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

export default StickyRowTable;

import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useMemo } from 'react';

import '../../Table/Table.scss';
import './SubTable.scss';

type SubTableProps = {
	data: Record<string | number, string | number>[];
	columns: {
		key: string;
		name: string;
	}[];
};

const SubTable = ({ data, columns }: SubTableProps) => {
	const columnHelper = createColumnHelper<(typeof data)[number]>();

	// : ColumnDef<(typeof data)[number]>
	const tableColumns = useMemo(
		() =>
			columns.map(({ key, name }) =>
				columnHelper.accessor(key, {
					header: name,
				}),
			),
		[columnHelper, columns],
	);

	const table = useReactTable({
		data,
		columns: tableColumns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="Table SubTable">
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

export default SubTable;

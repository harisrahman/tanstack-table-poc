import {
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { Fragment, useMemo, useState } from 'react';

import '../Table/Table.scss';
import './GroupedTable.scss';

import { User, columns } from './columns';
import mockUsers from './data/users.json';

const GroupedTable = () => {
	const [data] = useState(() => [...mockUsers]);
	const [expanded, setExpanded] = useState<string[]>([]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		enableRowSelection: true,
	});

	const groups = useMemo(
		() =>
			data.reduce((existingGroups: string[], user: User) => {
				if (!existingGroups.includes(user.categoryName)) {
					existingGroups.push(user.categoryName);
				}
				return existingGroups;
			}, []),
		[data],
	);

	const totalVisibleColumns = useMemo(
		() => table.getVisibleFlatColumns().length,
		[table],
	);

	const expandGroupHandler = (group: string) => {
		setExpanded((curr) => {
			if (curr.includes(group)) {
				return curr.filter((val) => val !== group);
			}
			return [...curr, group];
		});
	};

	const areAllGroupsExpanded = expanded.length === groups.length;

	const expandAllGroups = () => {
		setExpanded(areAllGroupsExpanded ? [] : groups);
	};

	return (
		<div className="Table GroupedTable">
			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									className={
										header.id === 'expandAll'
											? 'expandAllHeader'
											: ''
									}
								>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext(),
										  ) ?? null}
									{header.id === 'expandAll' && (
										<button
											className="btn-transparent"
											onClick={() => expandAllGroups()}
										>
											{areAllGroupsExpanded ? '▼' : '▶'}
										</button>
									)}
								</th>
							))}
						</tr>
					))}
				</thead>

				<tbody>
					{groups.map((group) => (
						<Fragment key={group}>
							<tr className="group-title">
								<td colSpan={totalVisibleColumns}>
									<button
										className="btn-transparent"
										onClick={() =>
											expandGroupHandler(group)
										}
									>
										{group}{' '}
										{expanded.includes(group) ? '▼' : '▶'}
									</button>
								</td>
							</tr>
							{expanded.includes(group) &&
								table
									.getRowModel()
									.rows.filter(
										({ original }) =>
											original.categoryName === group,
									)
									.map((row) => (
										<tr key={row.id}>
											{row
												.getVisibleCells()
												.map((cell) => (
													<td key={cell.id}>
														{flexRender(
															cell.column
																.columnDef.cell,
															cell.getContext(),
														)}
													</td>
												))}
										</tr>
									))}
						</Fragment>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default GroupedTable;

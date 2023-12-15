import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { READABLE_DATE_TIME_FORMAT } from '../../config/constants';
import IndeterminateCheckbox from '../IndeterminateCheckbox/IndeterminateCheckbox';
import type mockUsers from './data/users.json';

type User = (typeof mockUsers)[number];

const columnHelper = createColumnHelper<User>();

// type ColumnDef<User>[] (not working)
export const columns = [
	columnHelper.display({
		id: 'select',
		header: ({ table }) => (
			<IndeterminateCheckbox
				className="px-1"
				checked={table.getIsAllRowsSelected()}
				indeterminate={table.getIsSomeRowsSelected()}
				onChange={table.getToggleAllRowsSelectedHandler()}
			/>
		),
		cell: ({ row }) => (
			<IndeterminateCheckbox
				className="px-1"
				checked={row.getIsSelected()}
				disabled={!row.getCanSelect()}
				indeterminate={row.getIsSomeSelected()}
				onChange={row.getToggleSelectedHandler()}
			/>
		),
	}),

	columnHelper.accessor('id', {
		header: 'id',
	}),
	columnHelper.accessor('first_name', {
		header: 'First Name',
	}),
	columnHelper.accessor('last_name', {
		header: 'Last Name',
	}),
	columnHelper.accessor('email', {
		header: 'Email',
	}),
	columnHelper.accessor('gender', {
		header: 'Gender',
	}),
	columnHelper.accessor('country', {
		header: 'Country',
	}),
	columnHelper.accessor('ip_address', {
		header: 'IP Address',
	}),
	columnHelper.accessor('created_at', {
		header: 'Created At',
		cell: (props) =>
			dayjs(props.getValue()).format(READABLE_DATE_TIME_FORMAT),
	}),

	columnHelper.display({
		id: 'actions',
		header: 'Actions',
		cell: ({ row }) => (
			<div className="px-1">
				<button
					className="btn-transparent"
					onClick={() => {
						console.log(`Delete id: ${row.getValue('id')}`);
					}}
				>
					🗑️
				</button>
				<button
					className="btn-transparent"
					onClick={() => {
						console.log(`Edit id: ${row.getValue('id')}`);
					}}
				>
					✏️
				</button>
			</div>
		),
	}),
];

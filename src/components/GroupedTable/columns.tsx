import { createColumnHelper } from '@tanstack/react-table';
import type mockUsers from './data/users.json';

export type User = (typeof mockUsers)[number];

const columnHelper = createColumnHelper<User>();

export const columns = [
	columnHelper.display({
		id: 'expandAll',
		cell: '',
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
	}),
];

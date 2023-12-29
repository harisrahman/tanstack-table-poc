import { createColumnHelper } from '@tanstack/react-table';
import type mockUsers from './data/users.json';

type User = (typeof mockUsers)[number];

const columnHelper = createColumnHelper<User>();

export const columns = [
	columnHelper.accessor('id', {
		header: 'Id',
		size: 50,
	}),
	columnHelper.accessor('username', {
		header: 'username',
	}),
	columnHelper.accessor('first_name', {
		header: 'First Name',
	}),
	columnHelper.accessor('last_name', {
		header: 'Last Name',
	}),
	columnHelper.accessor('age', {
		header: 'Age',
	}),
	columnHelper.accessor('email', {
		header: 'Email',
	}),
	columnHelper.accessor('phone_number', {
		header: 'Phone',
	}),
	columnHelper.accessor('country', {
		header: 'Country',
	}),
	columnHelper.accessor('postal_code', {
		header: 'postal_code',
	}),
	columnHelper.accessor('favorite_color', {
		header: 'favorite_color',
	}),
	columnHelper.accessor('gender', {
		header: 'Gender',
	}),
	columnHelper.accessor('birthdate', {
		header: 'birthdate',
	}),
	columnHelper.accessor('ip_address', {
		header: 'IP Address',
	}),
	columnHelper.accessor('created_at', {
		header: 'Created At',
	}),

	columnHelper.display({
		id: 'actions',
		header: 'Actions',
		cell: () => (
			<div className="px-1">
				<span className="mr-2">🗑️</span>
				<span>✏️</span>
			</div>
		),
	}),
];

import { HTMLProps, useEffect, useRef } from 'react';

const IndeterminateCheckbox = ({
	indeterminate,
	className = '',
	...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
	const ref = useRef<HTMLInputElement>(null!);

	useEffect(() => {
		if (typeof indeterminate === 'boolean') {
			ref.current.indeterminate = !rest.checked && indeterminate;
		}
	}, [indeterminate, rest.checked]);

	return <input type="checkbox" ref={ref} className={className} {...rest} />;
};

export default IndeterminateCheckbox;

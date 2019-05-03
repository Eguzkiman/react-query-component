import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Query (props) {
	let [error, setError] = useState(null);
	let [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch();
	}, []);

	async function fetch () {
		setLoading(true);
		setError(null);
		try {
			await props.query();
			setLoading(false);
		} catch (e) {
			setError(e);
			setLoading(false);
			throw e;
		}
	}

	let data = [{
		id: 1,
		name: 'asdf'
	}, {
		id: 2,
		name: 'asdf'
	}, {
		id: 3,
		name: 'asdf'
	}];

	return props.children({ error, loading, data });
}

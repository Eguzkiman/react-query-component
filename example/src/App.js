import React from 'react'

import Query from 'react-query-component'
import { StoreContext } from 'redux-react-hook';

export default function App () {
	let query = () => console.log('querying');
	let selector = () => console.log('selecting');

	return (
		 <StoreContext.Provider value={store}>
			<Query query={query} selector={selector}>
				{({error, loading, data}) => {
					if (error) return <p>Error! {error}</p>;
					if (loading) return <p>Loading...</p>;

					return data.map(item => <p key={item.id}>{item.name}</p>);
				}}
			</Query>
		</StoreContext.Provider>
	)
}

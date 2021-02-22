import React, { useState } from 'react';

export const WebContext = React.createContext();

const Provider = props => {
const [isMenuVisible, setMenuVisible] = useState(false);

return (
	<WebContext.Provider value={{
		isMenuVisible,
		toggleMenu: () => setMenuVisible(!isMenuVisible)
	}}>
	{props.children}
	</WebContext.Provider>
	)
};

export default ({ element }) => (
	<Provider>
		{element}
	</Provider>
);